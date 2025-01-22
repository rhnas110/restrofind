import { Link } from "react-router-dom";
import { Rating } from "./rating";
import { Restaurants } from "../../types";
export const Card = ({ restaurant }: { restaurant: Restaurants }) => {
  return (
    <div className="overflow-hidden border rounded-lg shadow-md h-[378px] flex flex-col justify-between">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="object-cover object-center w-full aspect-square h-[200px] select-none"
        loading="lazy"
      />
      <div className="flex flex-col justify-between gap-2 p-2 h-[176px]">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold leading-tight line-clamp-2">
            {restaurant.name}
          </h3>
          <Rating amount={restaurant.rating} />
          <div className="flex items-center justify-between gap-2 text-gray-600">
            <div className="flex gap-1">
              <p>{restaurant.cuisine}</p>•
              <p>{"$".repeat(restaurant.price_range)}</p>
            </div>
            <div className="flex items-center justify-center gap-1 text-xs">
              <span
                className={`w-2 h-2 rounded-full inline-block ${
                  restaurant.open ? "bg-green-500" : "bg-red-500"
                }`}
              ></span>
              <p>{restaurant.open ? "OPEN NOW" : "CLOSED"}</p>
            </div>
          </div>
        </div>

        <Link to={`/restaurants/${restaurant.id}`}>
          <button className="w-full px-4 py-2 mt-2 text-white rounded bg-stone-500">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};
