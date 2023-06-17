"use client";
import { GetDataApi } from "@/src/utils";
import { useEffect, useState } from "react";
import { CardProduct } from "../../molecules";

const CatalogProducts = () => {
  const [products, setProducts] = useState([] as any);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetDataApi(
          `${process.env.NEXT_PUBLIC_HOST}/barang`
        );
        if (response.status === 500) {
          window.location.reload();
        }
        setProducts(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex">
      {products?.map((product: any) => (
        <div key={product.slug}>
          <CardProduct product={product} />
        </div>
      ))}
    </div>
  );
};

export default CatalogProducts;
