"use client";

import { usePathname } from "next/navigation";
import TabBar from "./TabBar";

export default function TabBarWrapper() {
  const pathname = usePathname();

  let role: "cliente" | "vendedor" | "admin" = "cliente";

  if (pathname.startsWith("/vendedor")) {
    role = "vendedor";
  } else if (pathname.startsWith("/admin")) {
    role = "admin";
  }

  return <TabBar role={role} />;
}
