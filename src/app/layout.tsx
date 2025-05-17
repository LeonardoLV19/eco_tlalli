import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NotifSeller from "./notif-seller/page";
import Footer from "@/components/Footer/Footer";

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

    

        <NotifSeller role="cliente" />

        {children}
        <Footer />
      </body>

    </html>
  );
}
