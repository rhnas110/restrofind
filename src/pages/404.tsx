import { Link } from "react-router-dom";
import { PageWrapper } from "../components/page-wrapper";
export const NotFound = () => {
  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="mb-4">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/server-down-of-restaurant-website-illustration-download-in-svg-png-gif-file-formats--404-error-not-found-page-food-delivery-pack-e-commerce-shopping-illustrations-3605234.png?f=webp"
            alt="404"
            className="w-96"
          />
        </div>

        <h1 className="text-3xl font-bold text-stone-700">Oops!</h1>
        <p className="mt-2 text-lg text-center text-stone-600 xs:text-left">
          I think you took a wrong turn.
        </p>

        <div className="flex mt-4 space-x-4">
          <Link
            to="/"
            className="px-4 py-2 text-white rounded-md bg-stone-600 hover:bg-stone-700"
          >
            Home
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
};
