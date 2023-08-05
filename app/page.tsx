import {
  AppBar,
  CatalogProducts,
  SearchBar,
} from "@/src/components/oraganisms";

const Home = async () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <AppBar />
      <SearchBar />
      <CatalogProducts />
    </div>
  );
};

export default Home;
