/* eslint-disable @next/next/no-img-element */
import config from "@/config";
import {
  DeskripsiProduct,
  KalkulatorKeramik,
  SimulasiKeramik,
} from "@/src/components/molecules";
import { AppBar, DetailProduct } from "@/src/components/oraganisms";
import { GetDataApi } from "@/src/utils";

async function Product({ params }: { params: { slug: string } }) {
  const data = await GetDataApi(
    `${config.NEXT_PUBLIC_HOST}/barang/${params.slug}`
  );

  const Barang = data.data;

  return (
    <div>
      <AppBar backIcon={true} />
      <div className="max-w-3xl mx-auto">
        <DetailProduct
          product={Barang}
          hargaJual={Number(Barang?.harga)}
          whatsappMitra="08123456789"
        />
        <DeskripsiProduct product={Barang} />
        <SimulasiKeramik imageUrl={Barang?.images[0]} />
        <KalkulatorKeramik
          kategoriBarang={Barang?.kategori}
          hargaBarang={Number(Barang?.harga)}
        />
      </div>
    </div>
  );
}

export default Product;
