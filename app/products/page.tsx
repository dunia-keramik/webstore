import config from "@/config";
import {
  AppBar,
  CatalogProducts,
  SearchBar,
} from "@/src/components/oraganisms";
import { GetDataApi } from "@/src/utils";

const Home = async () => {
  const responseWebstore = await GetDataApi(
    `${config.NEXT_PUBLIC_API_HOST}/webstore/domain/${config.NEXT_PUBLIC_HOST}`
  );

  const webstore = responseWebstore?.data;

  return (
    <div>
      <AppBar webstore={webstore} />
      <SearchBar />
      <CatalogProducts />
    </div>
  );
};

export default Home;
