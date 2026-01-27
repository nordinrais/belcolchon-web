import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Bel Colchón | Descanso Premium en Valencia",
  description: "Colchones, sillones relax y bases articuladas de alta calidad. Envío y montaje gratis en Valencia. Financiación sin intereses.",
  keywords: "colchones, sillones relax, bases articuladas, Valencia, descanso premium",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
