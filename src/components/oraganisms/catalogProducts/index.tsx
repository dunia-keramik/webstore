import { GetDataApi } from "@/src/utils";
import { CardProduct } from "../../molecules";

const CatalogProducts = async () => {
  const response = await GetDataApi(`${process.env.NEXT_PUBLIC_HOST}/barang`);

  const products = response.data;

  return (
    <div className={`shadow p-2 m-2 border rounded ${products.length < 1 ? "hidden" : ""}`}>
      <p className="font-semibold">Semua barang</p>
      <div className="flex">
        {products?.map((product: any) => (
          <div key={product.slug}>
            <CardProduct product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogProducts;
