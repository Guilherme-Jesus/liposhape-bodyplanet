import Navbar from "@/components/shared/Navbar";
import React from "react";
import "./globals.css"; // Importa o Tailwind CSS
import Footer from "@/components/shared/Footer";

export const metadata = {
  title: "Bodyplanet",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 mt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
