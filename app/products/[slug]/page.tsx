/* eslint-disable @next/next/no-img-element */
import config from "@/config";
import {
  // AlamatToko,
  DeskripsiProduct,
  KalkulatorKeramik,
  SimulasiKeramik,
  SwiperProduct,
  WhatsappButton,
} from "@/src/components/molecules";
import { AppBar, DetailProduct } from "@/src/components/oraganisms";
import { GetDataApi } from "@/src/utils";

async function Product({ params }: { params: { slug: string } }) {
  const data = await GetDataApi(
    `${config.NEXT_PUBLIC_HOST}/barang/${params.slug}`
  );

  const Barang = data.data;

  const response = await GetDataApi(
    `${config.NEXT_PUBLIC_HOST}/barang?page=1&limit=15&motif=${Barang.motif}&ukuran=${Barang.ukuran}&tekstur=${Barang.tekstur}`
  );

  const productSerupa = response.data;

  return (
    <div className="bg-gray-100">
      <AppBar backIcon={true} />
      <div className="max-w-3xl mx-auto">
        <DetailProduct
          product={Barang}
          hargaJual={Number(Barang?.harga)}
          whatsappMitra="+6282157758174"
        />
        <DeskripsiProduct product={Barang} />
        <SimulasiKeramik imageUrl={Barang?.images[0]} />
        <KalkulatorKeramik
          kategoriBarang={Barang?.kategori}
          hargaBarang={Number(Barang?.harga)}
        />
        <WhatsappButton barang={Barang} phone="+6282157758174" />
        {/* <AlamatToko /> */}
        <SwiperProduct products={productSerupa} title={"Rekomendasi"} />
      </div>
    </div>
  );
}

export default Product;
