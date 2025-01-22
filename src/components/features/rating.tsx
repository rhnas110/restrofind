import { FaRegStar, FaStar } from "react-icons/fa";
const MAX_RATING = 5;
export const Rating = ({ amount }: { amount: number }) => {
  return (
    <div className="flex items-center text-stone-500">
      <i className="flex items-center">
        {Array.from({ length: amount }).map((_, i) => (
          <FaStar key={i} />
        ))}
      </i>
      <i className="flex items-center">
        {Array.from({ length: MAX_RATING - amount }).map((_, i) => (
          <FaRegStar key={i} />
        ))}
      </i>
    </div>
  );
};
