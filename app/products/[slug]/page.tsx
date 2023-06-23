/* eslint-disable @next/next/no-img-element */
import config from "@/config";
import {
  DeskripsiProduct,
  KalkulatorKeramik,
  SimulasiKeramik,
} from "@/src/components/molecules";
import { AppBar, DetailProduct } from "@/src/components/oraganisms";
import { GetDataApi } from "@/src/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detail Barang - Dunia Keramik",
};

async function Product({ params }: { params: { slug: string } }) {
  const data = await GetDataApi(
    `${config.NEXT_PUBLIC_API_HOST}/barang/${params.slug}`
  );
  const responseWebstore = await GetDataApi(
    `${config.NEXT_PUBLIC_API_HOST}/webstore/domain/${config.NEXT_PUBLIC_HOST}`
  );

  const Barang = data.data;
  const webstore = responseWebstore?.data;

  return (
    <div>
      <AppBar backIcon={true} webstore={webstore} />
      <div className="max-w-3xl mx-auto">
        <DetailProduct
          product={Barang}
          persentase={webstore?.membership?.kategoriHarga?.persentase}
        />
        <DeskripsiProduct product={Barang} />
        <SimulasiKeramik imageUrl={Barang?.images[0]} />
        <KalkulatorKeramik
          kategoriBarang={Barang?.nama_kategori_barang}
          satuanBarang={Barang?.nama_satuan}
          hargaBarang={
            Number(Barang?.harga_beli) +
            Number(
              (Barang?.harga_beli *
                webstore?.membership?.kategoriHarga?.persentase) /
                100
            )
          }
        />
      </div>
    </div>
  );
}

export default Product;
