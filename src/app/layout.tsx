import type { Metadata } from "next";
import { Inter, Open_Sans, Roboto } from "next/font/google";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

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
      <body>
        <BackgroundGradientAnimation />
        {children}
      </body>
    </html>
  );
}
