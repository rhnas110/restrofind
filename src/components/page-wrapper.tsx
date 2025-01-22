import { ReactNode } from "react";

export const PageWrapper = ({ children }: { children: ReactNode }) => {
  return <main className="max-w-5xl mx-auto">{children}</main>;
};
