import { GetDataApi } from "@/src/utils";
import { CardProduct } from "../../molecules";

const CatalogProducts = async () => {
  const response = await GetDataApi(`${process.env.NEXT_PUBLIC_HOST}/barang`);

  const products = response.data;

  return (
    <div className="flex">
      {products?.map((product: any) => (
        <div key={product.slug}>
          <CardProduct product={product} />
        </div>
      ))}
    </div>
  );
};

export default CatalogProducts;
