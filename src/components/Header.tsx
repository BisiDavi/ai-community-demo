import Hamburger from "@/components/Hamburger";
import Searchbar from "@/components/Searchbar";

export default function Header() {
  return (
    <header className="header absolute top-0 z-10 w-full">
      <div className="content  container z-10 mx-auto mt-5 flex items-center justify-between rounded-xl bg-none py-4 pl-10 pr-5">
        <div className="logo circle flex rounded-full p-10 "></div>
        <Searchbar />
        <Hamburger />
        <div className="right-icon ml-6 flex rounded-full p-7" />
        <style jsx>
          {`
            .content {
              background-color: #f9f3e3;
            }
            .logo,
            .right-icon {
              background-color: #d9d9d9;
            }
          `}
        </style>
      </div>
    </header>
  );
}
