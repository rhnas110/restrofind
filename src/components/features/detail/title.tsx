import { Rating } from "../rating";
export const Title = ({ title, rating }: { title: string; rating: number }) => {
  return (
    <div className="p-4 mb-4 rounded-md bg-stone-300">
      <h1 className="mb-2 text-3xl font-semibold text-stone-600">{title}</h1>
      <Rating amount={rating} />
    </div>
  );
};
