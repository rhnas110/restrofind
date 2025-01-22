import { Card } from "./card";
import { Restaurants } from "../../types";
export const List = ({ restaurants }: { restaurants: Restaurants[] }) => {
  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {restaurants.map((restaurant) => (
        <Card restaurant={restaurant} key={restaurant.id} />
      ))}
    </section>
  );
};
