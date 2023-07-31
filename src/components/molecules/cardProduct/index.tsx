/* eslint-disable @next/next/no-img-element */
"use client";
import { useRouter } from "next/navigation";

const CardProduct = (props: { product: any }) => {
  const router = useRouter();

  // Cek apakah stok berada di bawah atau sama dengan 50
  const isOutOfStock = props.product?.stok <= 100;

  // Format teks untuk kualitas (huruf pertama besar, sisanya kecil)
 // const formattedKualitas =
   // props.product?.kualitas.charAt(0).toUpperCase() +
   // props.product?.kualitas.slice(1).toLowerCase();

  return (
    <div
      onClick={() => {
        router.push(`/products/${props.product.slug}`);
      }}
      className={`shadow m-2 cursor-pointer`}
    >
      <div className="flex justify-center">
        <img
          className="md:w-44 md:h-44 w-32 h-32 object-cover"
          src={props.product?.images[0]}
          alt={props.product?.nama_barang}
        />
      </div>
      <p className="md:text-base text-xs text-center font-bold">
        {(props.product?.nama_barang as string).toUpperCase()}
      </p>
      <div
        className={`text-xs rounded-full py-1 px-2 mt-2 ${
          isOutOfStock ? "" : ""
        }`}
      >
        <div className="flex justify-between">
          <div>
            {props.product?.kualitas}{" "}
            {isOutOfStock ? (
              <span className="font-semibold text-red-600">
                ({props.product?.stok})
              </span>
            ) : (
              <span className="font-semibold">
                ({props.product?.stok})
              </span>
            )}
          </div>
          <div>
            <p>{props.product?.ukuran}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
