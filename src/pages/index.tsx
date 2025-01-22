import { ReactNode } from "react";

// Pages
import { Home } from "./home";
import { Detail } from "./detail";
import { NotFound } from "./404";

function Page({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

function HomePage() {
  return (
    <Page>
      <Home />
    </Page>
  );
}

function DetailPage() {
  return (
    <Page>
      <Detail />
    </Page>
  );
}

function NotFoundPage() {
  return (
    <Page>
      <NotFound />
    </Page>
  );
}

export { HomePage, DetailPage, NotFoundPage };
