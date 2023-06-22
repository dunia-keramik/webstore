"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { HeaderSection } from "../../atoms";

export default function SimulasiKeramik(props: { imageUrl: string }) {
  const [backgroundColor, setBackgroundColor] = useState("#dddddd");

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBackgroundColor(event.target.value);
  };

  const gridStyles = {
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "2px",
    backgroundColor: backgroundColor,
  };

  return (
    <div className="py-4 px-4 flex md:border flex-col shadow rounded my-3 p-2">
      <HeaderSection title="Simulasi Pattern" />
      <div className="grid" style={gridStyles}>
        <ImagePattern imageUrl={props.imageUrl} />
        <ImagePattern imageUrl={props.imageUrl} />
        <ImagePattern imageUrl={props.imageUrl} />
        <ImagePattern imageUrl={props.imageUrl} />
        <ImagePattern imageUrl={props.imageUrl} />
        <ImagePattern imageUrl={props.imageUrl} />
      </div>
      <input
        type="color"
        value={backgroundColor}
        onChange={handleColorChange}
        className="mt-2"
      />
    </div>
  );
}

const ImagePattern = (props: { imageUrl: string }) => {
  return (
    <img
      src={props.imageUrl}
      onClick={(e) => {
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
