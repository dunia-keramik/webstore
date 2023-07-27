"use client";
import { useEffect, useState } from "react";
import { HeaderSection } from "../../atoms";
import { CardProduct } from "../../molecules";
import { GetDataApi } from "@/src/utils";
import config from "@/config";

const CatalogProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loadedProducts, setLoadedProducts] = useState([] as any);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);

  // Function untuk fetch data baru
  const fetchData = async (page: number) => {
    setIsLoading(true);
    const responseBarang = await GetDataApi(
      `${config.NEXT_PUBLIC_HOST}/barang?page=${page}&limit=30`
    );

    if (responseBarang?.data.length === 0) {
      setHasMoreData(false);
    } else {
      setLoadedProducts((prevProducts: any) => [
        ...prevProducts,
        ...responseBarang?.data,
      ]);
    }

    setIsLoading(false);
  };

  // Handle scroll
  useEffect(() => {
    function handleScroll() {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      const scrollPosition = scrollTop + clientHeight;
      const totalDataHeight = scrollHeight - clientHeight;

      // Jika user telah melakukan scroll hingga sebagian dari data terakhir yang telah dimuat
      if (
        scrollPosition >= totalDataHeight &&
        !isLoading &&
        hasMoreData &&
        currentPage <= 4 // Ubah angka 4 sesuai dengan halaman terakhir yang ingin dimuat
      ) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading, hasMoreData, currentPage]);

  // Fetch data pertama kali komponen dimuat
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

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
      {isLoading && <p className="text-center mt-2">Loading...</p>}
      {!hasMoreData && loadedProducts.length > 0 && (
        <p className="text-center mt-2">Semua data sudah dimuat.</p>
      )}
    </div>
  );
};

export default CatalogProducts;
