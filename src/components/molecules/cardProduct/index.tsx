/* eslint-disable @next/next/no-img-element */
"use client";
import { useRouter } from "next/navigation";

const CardProduct = (props: { product: any }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push(`/products/${props.product.slug}`);
      }}
      className="shadow m-2 cursor-pointer"
    >
      <div className="flex justify-center">
        <img
          className="md:w-44 md:h-44 w-32 h-32 object-cover"
          src={props.product?.images[0]}
          alt={props.product?.nama_barang}
        />
      </div>
      <p className="text-center font-bold">{props.product?.nama_barang}</p>
    </div>
  );
};

export default CardProduct;
