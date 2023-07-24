import {
  AppBar,
  CatalogProducts,
  SearchBar,
} from "@/src/components/oraganisms";

const Home = async () => {
  return (
    <div>
      <AppBar />
      <SearchBar />
      <CatalogProducts />
    </div>
  );
};

export default Home;
