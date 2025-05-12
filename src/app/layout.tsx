import type { Metadata } from "next";
import "./globals.css";
import TabBarWrapper from "@/components/TabBar/TabBarWrapper";

export const metadata: Metadata = {
  title: "EcoTlalli",
  description: "Proyecto de EcoTlalli",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        <TabBarWrapper />
        {children}
      </body>
    </html>
  );
}
