import {
  AppBar,
  CatalogProducts,
  SearchBar,
} from "@/src/components/oraganisms";

const Products = async () => {
  return (
    <div>
      <AppBar />
      <SearchBar />
      <CatalogProducts />
    </div>
  );
};

export default Products;
