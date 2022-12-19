import Hamburger from "@/components/Hamburger";
import SearchBar from "@/components/Searchbar";

export default function Header() {
  return (
    <header className="container mt-10 flex rounded-lg py-10">
      <div className="logo h-20 w-20 rounded-full"></div>
      <SearchBar />
      <Hamburger />
      <div className="right-icon"></div>
    </header>
  );
}
