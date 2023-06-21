import {
  AppBar,
  CatalogProducts,
  SearchBar,
} from "@/src/components/oraganisms";
import { GetDataApi } from "@/src/utils";

const Home = async () => {
   const response = await GetDataApi(`${process.env.NEXT_PUBLIC_HOST}/barang?page=1&limit=10`);

  const products = response.data;

  return (
    <div>
      <AppBar />
      <SearchBar />
      <CatalogProducts products={products} title={"Semua Produk"} />
    </div>
  );
};

export default Home;
