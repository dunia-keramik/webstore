import { HeaderSection } from "../../atoms";

const DeskripsiProduct = (props: { product: any }) => {
  return (
    <div className="py-4 px-4 flex md:border flex-col shadow rounded my-3 p-2">
      <HeaderSection title="Deskripsi Barang" />
      <p className="md:text-lg font-medium my-3">
        Tipe: {props.product?.nama_tipe}
      </p>
      <p className="md:text-lg font-medium my-3">
        Ukuran: {props.product?.nama_ukuran}
      </p>
      <p className="md:text-lg font-medium my-3">
        Tekstur: {props.product?.nama_tekstur}
      </p>
      <p className="md:text-lg font-medium my-3">
        Motif: {props.product?.nama_motif}
      </p>
    </div>
  );
};

export default DeskripsiProduct;
