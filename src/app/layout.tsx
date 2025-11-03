import type { Metadata } from "next";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import "./globals.css";

export const metadata = {
  title: "Mi Sitio Web",
  description: "Página institucional creada con Next.js y Tailwind CSS",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

