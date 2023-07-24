"use client";
import { useEffect, useState } from "react";
import { HeaderSection } from "../../atoms";
import { CardProduct } from "../../molecules";
import { GetDataApi } from "@/src/utils";
import config from "@/config";

const CatalogProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loadedProducts, setLoadedProducts] = useState([] as any);

  useEffect(() => {
    async function fetchData() {
      const responseBarang = await GetDataApi(
        `${config.NEXT_PUBLIC_HOST}/barang?page=${currentPage}&limit=25`
      );

      setLoadedProducts((prevProducts: any) => [
        ...prevProducts,
        ...responseBarang?.data,
      ]);
    }

    fetchData();
  }, [currentPage]);

  useEffect(() => {
    function handleScroll() {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`p-2 m-2 shadow sm:border rounded ${
        loadedProducts && loadedProducts?.length > 0 ? "" : "hidden"
      }`}
    >
      <HeaderSection title="Semua Barang" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {loadedProducts?.map((product: any) => (
          <div key={product.slug}>
            <CardProduct product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogProducts;
