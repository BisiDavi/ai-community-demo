import type { PropsWithChildren } from "react";

import Header from "@/components/Header";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="relative">
      <Header />
      {children}
    </div>
  );
}
