"use client";
import { RiSearchLine } from "react-icons/ri";
import { useState } from "react";
import { GetDataApi } from "@/src/utils";
import { CardProduct } from "../../molecules";
import { Block, Notify } from "notiflix";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  const handleSearch = async (event: any) => {
    Block.hourglass("#searchResult");
    event.preventDefault();
    try {
      const response = await GetDataApi(
        `${process.env.NEXT_PUBLIC_HOST}/barang/search?query=${searchTerm}`
      );
      if (response.status === 400) {
        Notify.failure(response.message);
      }
      if (response.status === 500) {
        Notify.failure(response.message + ", Coba Lagi!");
      }
      setProducts(response.data);
      Block.remove("#searchResult");
    } catch (error) {
      console.error(error);
      Block.remove("#searchResult");
    }
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      handleSearch(event);
    }
  };

  return (
    <div>
      <form
        className="flex justify-center items-center py-8"
        onSubmit={handleSearch}
      >
        <div className="relative flex items-center w-3/4">
          <input
            type="text"
            placeholder="Cari sesuatu..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyPress}
            className="w-full px-4 py-2 rounded-md shadow-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            type="submit"
            className="absolute right-0 mr-2 p-2 rounded-md bg-transparent border-none cursor-pointer focus:outline-none"
          >
            <RiSearchLine size={20} />
          </button>
        </div>
      </form>
      {/* product result */}
      {products && products?.length > 0 && (
        <div id="searchResult" className="shadow p-2 m-2 border rounded">
          <p className="font-semibold">Hasil pencarian dari {searchTerm}</p>
          <div className="flex">
            {products?.map((product: any) => (
              <div key={product.slug}>
                <CardProduct product={product} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
