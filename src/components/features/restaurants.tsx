import { useState, useEffect } from "react";
import axios from "axios";

import { FilterNavigation } from "./filter-navigation";
import { List } from "./list";
import { Pagination } from "./pagination";

import { BASE_API_URL } from "../../constants/api";
import { Cuisines, Restaurants as RestaurantsType } from "../../types";
export const Restaurants = () => {
  const [restaurants, setRestaurants] = useState<RestaurantsType[]>([]);
  const [cuisines, setCuisines] = useState<Cuisines[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Filter states
  const [filterOpenNow, setFilterOpenNow] = useState<boolean>(false);
  const [filterPriceRange, setFilterPriceRange] = useState<number>(0);
  const [filterCuisine, setFilterCuisine] = useState<string>("");

  // Pagination states
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;

  // Fetch data from APIs
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const restaurantRes = await axios.get(`${BASE_API_URL}/restaurants`);
        const cuisineRes = await axios.get(`${BASE_API_URL}/cuisines`);
        setRestaurants(restaurantRes.data);
        setFilteredRestaurants(restaurantRes.data);
        setCuisines(cuisineRes.data);
      } catch (err) {
        setError("Failed to fetch data. " + err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter logic
  useEffect(() => {
    const filtered = restaurants.filter((restaurant) => {
      const matchesOpenNow = filterOpenNow ? restaurant.open : true;
      const matchesPriceRange =
        filterPriceRange > 0
          ? restaurant.price_range === filterPriceRange
          : true;
      const matchesCuisine = filterCuisine
        ? restaurant.cuisine.toLowerCase().includes(filterCuisine.toLowerCase())
        : true;

      return matchesOpenNow && matchesPriceRange && matchesCuisine;
    });

    setFilteredRestaurants(filtered as []);
    setCurrentPage(1); // Reset to first page when filters change
  }, [filterOpenNow, filterPriceRange, filterCuisine, restaurants]);

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedRestaurants: RestaurantsType[] = filteredRestaurants.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const totalPages = Math.ceil(filteredRestaurants.length / itemsPerPage);

  // Reset filters
  const resetFilters = () => {
    setFilterOpenNow(false);
    setFilterPriceRange(0);
    setFilterCuisine("");
  };

  // Error states
  if (error)
    return <div className="py-10 text-center text-red-500">{error}</div>;

  return (
    <div className="p-2 md:p-4">
      {/* Filter Navigation */}
      <FilterNavigation
        cuisines={cuisines}
        resetFilters={resetFilters}
        filterCuisine={filterCuisine}
        setFilterCuisine={setFilterCuisine}
        filterPriceRange={filterPriceRange}
        setFilterPriceRange={setFilterPriceRange}
        filterOpenNow={filterOpenNow}
        setFilterOpenNow={setFilterOpenNow}
      />

      {/* Restaurant List */}
      {loading && <div className="py-2 text-center">Loading...</div>}
      <List restaurants={paginatedRestaurants} />

      {/* Pagination Buttons */}
      {!loading && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};
