/* eslint-disable @next/next/no-img-element */
"use client";
import { useRouter } from "next/navigation";

const CardProduct = (props: { product: any }) => {
  const router = useRouter();

  // Cek apakah stok berada di bawah atau sama dengan 50
  const isOutOfStock = props.product?.stok <= 0;

  return (
    <div
      onClick={() => {
        router.push(`/products/${props.product.slug}`);
      }}
      className={`shadow m-2 cursor-pointer ${
        isOutOfStock ? "opacity-50" : "" // Tambahkan opasitas jika stok habis
      }`}
    >
      <div className="flex justify-center">
        <img
          className="md:w-44 md:h-44 w-32 h-32 object-cover"
          src={props.product?.images[0]}
          alt={props.product?.nama_barang}
        />
      </div>
      <p className="text-center font-bold">{props.product?.nama_barang}</p>
      <div
        className={`text-xs rounded-full py-1 px-2 mt-2 ${
          isOutOfStock ? "bg-red-500 text-white" : ""
        }`}
      >
        {props.product?.kualitas}{" "}
        {isOutOfStock ? (
          <span className="text-sm font-semibold">(Stok Habis)</span>
        ) : (
          <span className="text-sm font-semibold">({props.product?.stok})</span>
        )}
      </div>
    </div>
  );
};

export default CardProduct;
