import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NotifSeller from "./notif-seller/page";

export const metadata: Metadata = {
  title: "EcoTlalli",
  description: "Proyecto de EcoTlalli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >

        <TabBar role="cliente" />

        <NotifSeller role="cliente" />

        {children}
      </body>

    </html>
  );
}