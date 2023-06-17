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
      className="border m-2 cursor-pointer"
    >
      <img
        className="w-36 h-5w-36 border"
        src={props.product?.images[0]}
        alt={props.product?.nama_barang}
      />
      <p className="text-center font-bold">{props.product?.nama_barang}</p>
    </div>
  );
};

export default CardProduct;
