"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { CardProduct } from "../../molecules";
import { LuSquareDot } from "react-icons/lu";

export default function SwiperProduct(props: {
  products: any[];
  title: string;
}) {
  return (
    <div className="flex m-2 mt-4 flex-col rounded-xl md:rounded-3xl">
      <p className="font-semibold flex items-center">
        <LuSquareDot className="mr-1 text-gray-500" />
        {props.title}
      </p>
      <div className="cursor-grab select-none">
        <Swiper
          slidesPerView={2}
          breakpoints={{
            300: { slidesPerView: 1.2 },
            640: { slidesPerView: 2.2 },
            768: { slidesPerView: 3.2 },
            1024: { slidesPerView: 4.2 },
          }}
          spaceBetween={20}
          modules={[Pagination]}
        >
          {props.products.map((product) => (
            <SwiperSlide key={product.slug}>
              <CardProduct product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
