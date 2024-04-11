import type { Metadata } from "next";
import { Inter, Open_Sans, Roboto } from "next/font/google";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Filter from "@/components/modules/Filter";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
  display: "swap",
});
const vazir = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazir",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${vazir.variable}`}>
      <body className="p-5 sm:p-10 md:p-14 lg:p-24 xl:container">
        <BackgroundGradientAnimation />
        {children}
      </body>
    </html>
  );
}
