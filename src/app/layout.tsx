import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import GsapProvider from "@/components/GsapProvider";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  weight: ["400", "600", "700", "900"]
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

export const metadata: Metadata = {
  title: "Dr. Rashmirekha Saha | Biography",
  description: "A lifetime of transformative educational leadership.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} snap-y snap-mandatory scroll-smooth`} suppressHydrationWarning>
      <body className="font-inter antialiased bg-[#030304] text-[#F8F9FA] selection:bg-[#d4af37]/30 selection:text-white">
        <GsapProvider>
          {children}
        </GsapProvider>
      </body>
    </html>
  );
}
