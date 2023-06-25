import { Button } from "../../atoms";

/* eslint-disable @next/next/no-img-element */
const DetailProduct = (props: {
  product: any;
  hargaJual: Number
}) => {
  const Barang = props.product;

  return (
    <div className="py-8 px-4 flex md:border md:flex-row flex-col shadow rounded my-3 p-2">
      <div className="md:w-1/3 flex justify-center w-full">
        <img
          className="w-60 h-60 border"
          src={Barang?.images[0]}
          alt={Barang?.nama_barang}
        />
      </div>
      <div className="m-3 md:ml-10">
        <p className="md:text-xl text-lg font-bold my-3">
          {Barang?.nama_barang}
        </p>
        <p className="md:text-lg font-medium my-3">
          Brand: {Barang?.nama_brand}
        </p>
        <p className="md:text-lg font-medium my-3">
          Kategori Barang: {Barang?.nama_kategori_barang}
        </p>
        <p className="md:text-lg font-medium my-3">
          Stok: {`${Barang?.stok} ${Barang?.nama_satuan}`}
        </p>
        <p className="md:text-lg font-medium my-3">
          Harga:{" "}
          {"Rp " +
            Number(props.hargaJual).toLocaleString("id-ID") +
            `/${Barang?.nama_satuan}`}
        </p>
        <Button color="green">Whatsapp</Button>
      </div>
    </div>
  );
};

export default DetailProduct;
