import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const robotoMono = Roboto_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Essoklina Ulrich — Développeur Web Junior",
  description: "Portfolio de Essoklina Ulrich (Sul04) — Développeur web passionné par la création d'interfaces modernes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${robotoMono.variable} bg-[#0A0A0A] text-[#E0E0E0] antialiased`}>
        {children}
      </body>
    </html>
  );
}
