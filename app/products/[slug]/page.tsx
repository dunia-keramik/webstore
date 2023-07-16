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
  const responseWebstore = await GetDataApi(
    `${config.NEXT_PUBLIC_HOST}/webstore/domain/${config.NEXT_PUBLIC_DOMAIN_NAME}`
  );

  const Barang = data.data;
  const webstore = responseWebstore?.data;

  const hargaModal =
    Number(Barang?.harga_beli) +
    Number((Barang?.harga_beli * webstore?.membership?.kategoriHarga?.persentase) / 100);
  const hargaJual =
    hargaModal + Number((hargaModal * webstore?.profit_percentage) / 100);

  return (
    <div>
      <AppBar backIcon={true} webstore={webstore} />
      <div className="max-w-3xl mx-auto">
        <DetailProduct
          product={Barang}
          hargaJual={hargaJual}
        />
        <DeskripsiProduct product={Barang} />
        <SimulasiKeramik imageUrl={Barang?.images[0]} />
        <KalkulatorKeramik
          kategoriBarang={Barang?.nama_kategori_barang}
          satuanBarang={Barang?.nama_satuan}
          hargaBarang={hargaJual}
        />
      </div>
    </div>
  );
}

export default Product;
