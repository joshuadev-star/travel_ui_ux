"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isAuthPage =
    pathname === "/login" ||
    pathname === "/signup";

  return (
    <>
      {!isAuthPage && <Navbar />}

      <div className="relative w-full overflow-x-hidden">
        {children}
      </div>

      {!isAuthPage && <Footer />}
    </>
  );
}