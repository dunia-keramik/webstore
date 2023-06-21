"use client";
import { HeaderSection } from "../../atoms";

/* eslint-disable @next/next/no-img-element */
export default function SimulasiKeramik(props: { imageUrl: string }) {
  return (
    <div className="py-4 px-4 flex md:border flex-col shadow rounded my-3 p-2">
      <HeaderSection title="Simulasi Pattern" />
      <div className="grid w-full grid-cols-3 gap-1 bg-gray-50">
        <ImagePattern imageUrl={props.imageUrl} />
        <ImagePattern imageUrl={props.imageUrl} />
        <ImagePattern imageUrl={props.imageUrl} />
        <ImagePattern imageUrl={props.imageUrl} />
        <ImagePattern imageUrl={props.imageUrl} />
        <ImagePattern imageUrl={props.imageUrl} />
      </div>
    </div>
  );
}

const ImagePattern = (props: { imageUrl: string }) => {
  return (
    <img
      src={props.imageUrl}
      onClick={(e) => {
        // rotate image 90 degree
        const img = e.target as HTMLImageElement;
        const deg = img.style.transform
          ? parseInt(
              img.style.transform.replace("rotate(", "").replace("deg)", "")
            )
          : 0;
        img.style.transform = `rotate(${deg + 90}deg)`;
      }}
      alt="produk"
      width={300}
      height={300}
    />
  );
};
