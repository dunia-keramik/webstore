"use client";
import { GetDataApi } from "@/src/utils";
import { useEffect, useState } from "react";

export default function Home() {
  const [webstore, setwebstore] = useState({} as any);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetDataApi(
          `${process.env.NEXT_PUBLIC_HOST}/webstore/domain/ikjewffi.netlify.app`
        );
        if (response.status === 500) {
          window.location.reload();
        }
        setwebstore(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div className="flex justify-center items-center bg-slate-900 text-white p-3 md:p-5">
        <p className="font-bold text-lg md:text-xl">{webstore && webstore?.nama_webstore}</p>
      </div>
    </div>
  );
}
