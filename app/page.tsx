import {
  AppBar,
  CatalogProducts,
  SearchBar,
} from "@/src/components/oraganisms";

export default function Home() {
  return (
    <div>
      <AppBar />
      <SearchBar />
      <CatalogProducts />
    </div>
  );
}
