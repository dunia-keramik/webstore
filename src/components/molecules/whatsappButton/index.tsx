"use client";
import { Button } from "../../atoms";

export default function WhatsappButton(props: { barang: any; phone: string }) {
  const handleWhatsAppClick = () => {
    const message = `Aku ingin bertanya tentang *${props.barang?.nama_barang}* merk *${props.barang?.merk}* dan ukuran *${props.barang?.ukuran}* dengan kualitas *${props.barang?.kualitas}* harga *${props.barang?.harga}* dan saat ini stok *${props.barang?.stok}*`;
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
