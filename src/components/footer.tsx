import { memo } from "react";

export const Footer = memo(() => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-4 text-center">
      <hr className="my-4 border rounded-md border-stone-300" />
      <p>© {currentYear} RestroFind - Where Every Meal is an Adventure.</p>
    </footer>
  );
});
