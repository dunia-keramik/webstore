import { SwiperProduct } from "@/src/components/molecules";
import {
  AppBar,
  CatalogProducts,
  SearchBar,
} from "@/src/components/oraganisms";
import { GetDataApi } from "@/src/utils";

const Home = async () => {
  const responseBarang = await GetDataApi(
    `${process.env.NEXT_PUBLIC_HOST}/barang?page=1&limit=10`
  );
  const responseWebstore = await GetDataApi(
    `${process.env.NEXT_PUBLIC_HOST}/webstore/domain/ikjewffi.netlify.app`
  );

  const webstore = responseWebstore.data;
  const products = responseBarang.data;

  return (
    <div>
      <AppBar webstore={webstore} />
      <SearchBar />
      <SwiperProduct products={products} title="Barang Terbaru" />
      <CatalogProducts products={products} title={"Semua Produk"} />
    </div>
  );
};

export default Home;
