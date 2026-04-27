import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


const inter = Inter({ subsets: ["latin"] });

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "700", "800", "900"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Groen Inmobiliaria | Tu hogar en Sonora",
  description:
    "Desarrolladora inmobiliaria en Hermosillo y Nogales. Descubre nuestros residenciales Bilbao y Tarragona.",
  keywords: "casas hermosillo, casas nogales, inmobiliaria sonora, groen, bilbao, tarragona",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${nunito.variable}`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
