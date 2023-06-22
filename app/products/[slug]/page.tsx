/* eslint-disable @next/next/no-img-element */
import {
  DeskripsiProduct,
  KalkulatorKeramik,
  SimulasiKeramik,
  TextFooter,
} from "@/src/components/molecules";
import { AppBar, DetailProduct } from "@/src/components/oraganisms";
import { GetDataApi } from "@/src/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detail Barang - Dunia Keramik",
};

async function Product({ params }: { params: { slug: string } }) {
  const data = await GetDataApi(
    `${process.env.NEXT_PUBLIC_HOST}/barang/${params.slug}`
  );
  const Barang = data.data;

  return (
    <div>
      <AppBar backIcon={true} />
      <div className="max-w-3xl mx-auto">
        <DetailProduct product={Barang} />
        <DeskripsiProduct product={Barang} />
        <SimulasiKeramik imageUrl={Barang?.images[0]} />
        <KalkulatorKeramik
          kategoriBarang={Barang?.nama_kategori_barang}
          satuanBarang={Barang?.nama_satuan}
          hargaBarang={Barang?.harga_beli}
        />
      </div>
    </div>
  );
}

export default Product;
