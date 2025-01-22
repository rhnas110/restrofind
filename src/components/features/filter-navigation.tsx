import { Cuisines } from "../../types";

type FilterNavigationProps = {
  filterOpenNow: boolean;
  setFilterOpenNow: React.Dispatch<React.SetStateAction<boolean>>;
  filterPriceRange: number;
  setFilterPriceRange: React.Dispatch<React.SetStateAction<number>>;
  filterCuisine: string;
  setFilterCuisine: React.Dispatch<React.SetStateAction<string>>;
  cuisines: Cuisines[];
  resetFilters: () => void;
};

export const FilterNavigation = ({
  filterOpenNow,
  setFilterOpenNow,
  filterPriceRange,
  setFilterPriceRange,
  filterCuisine,
  setFilterCuisine,
  cuisines,
  resetFilters,
}: FilterNavigationProps) => {
  return (
    <div className="flex flex-col flex-wrap justify-between gap-4 p-4 mb-4 rounded-md xs:items-center bg-stone-300 xs:flex-row">
      <div className="flex flex-col flex-wrap gap-4 xs:flex-row">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={filterOpenNow}
            onChange={(e) => setFilterOpenNow(e.target.checked)}
            className="rounded"
          />
          <span>Open Now</span>
        </label>

        <select
          value={filterPriceRange}
          onChange={(e) => setFilterPriceRange(Number(e.target.value))}
          className="px-2 py-1 border rounded"
        >
          <option value="0">Price</option>
          <option value="1">$ (Rp. 0 - Rp. 16,000)</option>
          <option value="2">$$ (Rp. 16,001 - Rp. 32,000)</option>
          <option value="3">$$$ (Rp. 32,001 - Rp. 48,000)</option>
          <option value="4">$$$$ (Rp. 48,001+)</option>
        </select>

        <select
          value={filterCuisine}
          onChange={(e) => setFilterCuisine(e.target.value)}
          className="px-2 py-1 border rounded"
        >
          <option value="">Category</option>
          {cuisines.map((cuisine) => (
            <option key={cuisine.id} value={cuisine.name}>
              {cuisine.name}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={resetFilters}
        className="px-4 py-2 text-white rounded bg-stone-500 hover:bg-stone-600"
      >
        Reset Filters
      </button>
    </div>
  );
};
