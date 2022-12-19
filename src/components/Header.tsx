import SearchBar from "./Searchbar";

export default function Header() {
  return (
    <header className="container mt-10 flex rounded-lg py-10">
      <div className="logo h-20 w-20 rounded-full"></div>
      <SearchBar />
      <div className="hamburger"></div>
      <div className="right-icon"></div>
    </header>
  );
}
