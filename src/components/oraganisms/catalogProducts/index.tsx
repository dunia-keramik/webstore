import { HeaderSection } from "../../atoms";
import { CardProduct } from "../../molecules";

const CatalogProducts = (props: { products: any[]; title: string }) => {
  return (
    <div
      className={`p-2 m-2 shadow sm:border rounded ${
        props.products && props.products?.length > 0 ? "" : "hidden"
      }`}
    >
      <HeaderSection title={props.title} />
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
