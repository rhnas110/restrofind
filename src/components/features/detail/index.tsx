import { useParams } from "react-router";
import { useEffect, useState } from "react";

import { Title } from "./title";
import { Thumbnail } from "./thumbnail";
import { Reviews } from "./reviews";
import { Map } from "./map";
import { Footer } from "../../footer";
import { BASE_API_URL } from "../../../constants/api";
import { Restaurants } from "../../../types";

export const Detail = () => {
  const { id } = useParams(); // Ambil ID dari URL dengan params id
  const [restaurant, setRestaurant] = useState<Restaurants | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch restaurant data by ID
    const fetchRestaurant = async () => {
      try {
        const response = await fetch(`${BASE_API_URL}/restaurants/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch restaurant data");
        }
        const data = await response.json();
        setRestaurant(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurant();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!restaurant) {
    return <div>No restaurant found</div>;
  }

  return (
    <div className="p-4">
      {/* Restaurant Name & Rating */}
      <Title title={restaurant.name} rating={restaurant.rating} />

      {/* Image/Thumbnail */}
      <Thumbnail image={restaurant.image} alt={restaurant.name} />

      {/* Section/Description */}
      <div className="mb-4">
        <h2 className="mb-0.5 text-xl font-semibold text-stone-600">
          Description
        </h2>
        <p className="leading-tight">{restaurant.description}</p>
      </div>

      {/* Review Items */}
      <Reviews />

      {/* Map */}
      {restaurant.map && <Map src={restaurant.map} />}

      <Footer />
    </div>
  );
};
