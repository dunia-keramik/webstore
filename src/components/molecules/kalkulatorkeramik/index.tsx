"use client";
import { useState } from "react";
import { HitungKeramik } from "@/src/functions";
import { Button, HeaderSection, Input } from "../../atoms";

const KalkulatorKeramik = (props: { kategoriBarang: string }) => {
  const [panjang, setPanjang] = useState(0);
  const [lebar, setLebar] = useState(0);
  const [hasil, setHasil] = useState({} as any);

  const handleHitung = (e: any) => {
    e.preventDefault();
    const hasilHitung = HitungKeramik(props.kategoriBarang, panjang, lebar);
    setHasil(hasilHitung);
  };

  return (
    <div className="py-4 px-4 flex md:border flex-col shadow rounded my-3 p-2">
      <HeaderSection title="Kalkulator Keramik" />
      <form onSubmit={handleHitung} className="divide-transparent divide-y-8">
        <Input
          label={"Panjang Ruangan"}
          name={"panjang"}
          onChange={(event) => setPanjang(event.target.value)}
        />
        <Input
          label={"Lebar Ruangan"}
          name={"lebar"}
          onChange={(event) => setLebar(event.target.value)}
        />
        <Button isSubmit={true}>Hitung</Button>
      </form>
    </div>
  );
};

export default KalkulatorKeramik;
