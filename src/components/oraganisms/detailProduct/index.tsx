/* eslint-disable @next/next/no-img-element */
const DetailProduct = (props: { product: any }) => {
  const Barang = props.product;
  return (
    <div className="max-w-3xl mx-auto py-8 px-4 flex md:border md:flex-row flex-col shadow rounded my-3 p-2">
      <div className="md:w-1/3 flex justify-center w-full">
        <img
          className="w-60 h-5w-60 border"
          src={Barang?.images[0]}
          alt={Barang?.nama_barang}
        />
      </div>
      <div className="m-3 md:ml-10">
        <p className="md:text-xl text-lg font-bold my-3">
          {Barang?.nama_barang}
        </p>
        <p className="md:text-lg font-semibold my-3">{Barang?.nama_brand}</p>
        <p className="md:text-lg font-semibold my-3">
          {Barang?.nama_kategori_barang}
        </p>
        <p className="md:text-lg font-semibold my-3">{`${Barang?.stok} ${Barang?.nama_satuan}`}</p>
        <p className="md:text-lg font-semibold my-3">
          {"Rp " +
            Number(Barang?.harga_beli).toLocaleString("id-ID") +
            `/${Barang?.nama_satuan}`}
        </p>
      </div>
    </div>
  );
};

export default DetailProduct;
