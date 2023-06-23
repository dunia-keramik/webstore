import config from "@/config";
import { SwiperProduct } from "@/src/components/molecules";
import {
  AppBar,
  CatalogProducts,
  SearchBar,
} from "@/src/components/oraganisms";
import { GetDataApi } from "@/src/utils";

const Home = async () => {
  const domainName = process.env.NEXT_PUBLIC_HOST;
  const responseBarang = await GetDataApi(
    `${config.NEXT_PUBLIC_API_HOST}/barang?page=1&limit=10`
  );
  const responseWebstore = await GetDataApi(
    `${config.NEXT_PUBLIC_API_HOST}/webstore/domain/${config.NEXT_PUBLIC_HOST}`
  );

  const webstore = responseWebstore?.data;
  const products = responseBarang?.data;

  return (
    <div>
      <AppBar webstore={webstore} />
      <SearchBar />
      <SwiperProduct products={products} title="Barang Terbaru" />
      <CatalogProducts products={products} title={"Semua Produk"} />
      <p>Domain Name: {domainName}</p>
    </div>
  );
};

export default Home;
