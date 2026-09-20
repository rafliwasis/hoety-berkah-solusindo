import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hoetyberkah.id"),
  title: {
    default:
      "Jasa Service Cold Storage, Chiller & Compressor di Jabodetabek | Hoety Berkah Solusindo",
    template: "%s | Hoety Berkah Solusindo",
  },
  description:
    "Hoety Berkah Solusindo menyediakan spare part compressor, jasa service cold storage, chiller, freezer, preventive maintenance, instalasi cold storage dan ABF di Jakarta, Bekasi, Tangerang, Depok, Bogor.",
  keywords: [
    "jasa service cold storage",
    "service cold storage Jabodetabek",
    "service chiller",
    "service freezer",
    "service compressor",
    "spare part compressor",
    "instalasi cold storage",
    "instalasi ABF",
    "preventive maintenance cold storage",
  ],
  openGraph: {
    title: "Hoety Berkah Solusindo",
    description:
      "Spare part compressor, service cold storage, dan instalasi cold storage & ABF di Jabodetabek.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}