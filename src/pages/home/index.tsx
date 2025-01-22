import { PageWrapper } from "../../components/page-wrapper";
import { Header } from "../../components/header";
import { Restaurants } from "../../components/features/restaurants";
export const Home = () => {
  return (
    <PageWrapper>
      <Header />
      <Restaurants />
    </PageWrapper>
  );
};
