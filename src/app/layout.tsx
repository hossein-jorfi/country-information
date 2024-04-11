"use client";
import { Open_Sans } from "next/font/google";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Provider } from "react-redux";
import { useRef } from "react";
import { AppStore, makeStore } from "@/lib/store";
import DataDispatcher from "@/utils/DataDispatcher";
import DataFetcher from "@/utils/DataFetcher";

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
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <html lang="en" className={`${openSans.variable} ${vazir.variable}`}>
      <body className="p-5 sm:p-10 md:p-14 lg:p-24 xl:container">
        <BackgroundGradientAnimation />
        <Provider store={storeRef.current}>
          <DataFetcher>{children}</DataFetcher>
        </Provider>
      </body>
    </html>
  );
}
