import type { PropsWithChildren } from "react";

import SearchBar from "@/components/Searchbar";

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <SearchBar />
      {children}
    </>
  );
}
