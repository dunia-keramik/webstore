"use client";
import { Button } from "../../atoms";

export default function WhatsappButton(props: { barang: any; phone: string }) {
  const handleWhatsAppClick = () => {
    const message = `Aku ingin bertanya tentang ${props.barang?.nama_barang}`;
    const whatsappLink = `https://api.whatsapp.com/send?phone=${
      props.phone
    }&text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, "_blank");
  };
  return (
    <div>
      <Button onClick={handleWhatsAppClick} color="green" isFullWidth={true}>
        Pesan
      </Button>
    </div>
  );
}
