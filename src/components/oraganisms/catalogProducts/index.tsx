import { CardProduct } from "../../molecules";
import { LuSquareDot } from "react-icons/lu";

const CatalogProducts = (props: { products: any[]; title: string }) => {
  return (
    <div
      className={`p-2 m-2 shadow sm:border rounded ${
        props.products.length < 1 ? "hidden" : ""
      }`}
    >
      <p className="font-semibold flex items-center">
        <LuSquareDot className="mr-1 text-gray-500" />
        {props.title}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {props.products?.map((product: any) => (
          <div key={product.slug}>
            <CardProduct product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogProducts;
