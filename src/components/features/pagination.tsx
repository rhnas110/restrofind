type PaginationProps = {
  currentPage: number;
  totalPages: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setCurrentPage: (page: any) => void;
};

export const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
}: PaginationProps) => {
  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button
        onClick={() => setCurrentPage((prev: number) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded ${
          currentPage === 1
            ? "bg-stone-200 cursor-not-allowed"
            : "bg-stone-400 text-white hover:bg-stone-500"
        }`}
      >
        Prev
      </button>
      <span className="text-gray-700">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() =>
          setCurrentPage((prev: number) => Math.min(prev + 1, totalPages))
        }
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded ${
          currentPage === totalPages
            ? "bg-stone-200 cursor-not-allowed"
            : "bg-stone-400 text-white hover:bg-stone-500"
        }`}
      >
        Next
      </button>
    </div>
  );
};
