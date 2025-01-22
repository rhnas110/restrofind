import { useState, useEffect } from "react";
import { Rating } from "../rating";
import { mockData } from "../../../constants/mock-data-reviews";
import { Reviews as ReviewsType } from "../../../types";
export const Reviews = () => {
  const [reviews, setReviews] = useState<ReviewsType[]>([]);

  useEffect(() => {
    // Secara random tentukan apakah reviews akan ada atau tidak
    const hasReviews = Math.random() > 0.3; // 70% kemungkinan ada review
    if (hasReviews) {
      // Pilih jumlah review secara random (antara 1 hingga 5)
      const randomReviews: ReviewsType[] = [];
      const reviewCount = Math.floor(Math.random() * 5) + 1;
      while (randomReviews.length < reviewCount) {
        const randomIndex = Math.floor(Math.random() * mockData.length);
        const review = mockData[randomIndex];
        if (!randomReviews.includes(review)) {
          randomReviews.push(review);
        }
      }
      setReviews(randomReviews);
    }
  }, []);

  return (
    <div className="mb-4">
      <h2 className="mb-2 text-xl font-semibold text-stone-600">Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div
            key={index}
            className="p-2.5 mb-2.5 bg-stone-300 border border-stone-200 rounded-md"
          >
            <div className="flex gap-x-1">
              <strong>{review.name}</strong> •
              <Rating amount={review.rating} />
            </div>
            <p>{review.description}</p>
          </div>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
};
