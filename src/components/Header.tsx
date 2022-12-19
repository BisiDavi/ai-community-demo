import Hamburger from "@/components/Hamburger";
import SearchBar from "@/components/Searchbar";

export default function Header() {
  return (
    <header className="header absolut container top-0 z-10 pl-20 py-5 pr-10 mx-auto mt-10 flex items-center justify-between rounded-lg bg-none">
      <div className="logo h-20 w-20 rounded-full "></div>
      <SearchBar />
      <Hamburger />
      <div className="right-icon h-14 w-14 rounded-full"></div>
      <style jsx>
        {`
          .header {
            background-color: #f9f3e3;
          }
          .logo,
          .right-icon {
            background-color: #d9d9d9;
          }
        `}
      </style>
    </header>
  );
}
