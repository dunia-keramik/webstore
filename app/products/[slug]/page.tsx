/* eslint-disable @next/next/no-img-element */
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
    <div className="">
      <AppBar />
      <DetailProduct product={Barang} />
    </div>
  );
}

export default Product;
