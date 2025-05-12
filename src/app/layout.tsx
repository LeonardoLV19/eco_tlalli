import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TabBar from "@/components/TabBar/TabBar";

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
        <TabBar role="admin" />
        {children}
      </body>

    </html>
  );
}