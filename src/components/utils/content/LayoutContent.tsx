"use client";

import {usePathname} from "next/navigation";
import NavBar from "@/components/layouts/NavBar";
import Footer from "@/components/layouts/Footer";
import {Box} from "@mui/system";
import {ReactNode} from "react";

export default function LayoutContent({children}: {children: ReactNode}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      {isHomePage ? <NavBar /> : null}
      <Box component={"main"}>{children}</Box>
      {isHomePage ? <Footer /> : null}
    </>
  );
}
