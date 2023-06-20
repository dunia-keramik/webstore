"use client";
import { RiSearchLine } from "react-icons/ri";
import { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: any) => {
    event.preventDefault();
    console.log(searchTerm);
    // Lakukan sesuatu dengan nilai searchTerm, seperti mengirim permintaan pencarian ke server
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      handleSearch(event);
    }
  };

  return (
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
  );
};

export default SearchBar;
