import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
import { Providers } from "./providers";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Advertisements } from "../components/Advertisement/Advertisements";
import { SideAdvertisements } from "../components/Advertisement/SideAdvertisements";
import React from "react";
import { HorizontalAdvertisements } from "../components//Advertisement/HorizontalAdvertisements";
import { BuyMeCoffeeWidget } from "../components//BuyMeCoffeeWidget";
import { BuyMeCoffeeButton } from "../components//BuyMeCoffeeButton";
import GoogleAdsense from "../components//Advertisement/GoogleAdsense";

const inter = Noto_Sans_JP({ subsets: ["latin"], display: "swap" });

const siteName = "Kakke Blog";
const description = "This is a blog by kakke";
const url = "https://kakke.site";
export const metadata = {
  title: {
    default: siteName,
    /** `next-seo`の`titleTemplate`に相当する機能 */
    template: `%s - ${siteName}`,
  },
  metadataBase: new URL(process.env.URL ?? "http://localhost:3000"),
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: "ja_JP",
    type: "website",
    images: ["/openGraph-image-square.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    site: "@kkhs0603",
    creator: "@kkhs0603",
  },
  verification: {
    google: "",
  },
  alternates: {
    canonical: url,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={inter.className}>
      <meta property="og:image" content="<generated>" />
      <meta property="og:image:type" content="<generated>" />
      <meta property="og:image:width" content="<generated>" />
      <meta property="og:image:height" content="<generated>" />
      <meta name="theme-color" content="#b8e986" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icon.png"></link>
      <body id="output">
        <Providers>
          <GoogleAdsense pId="1124456984547171" />
          <div className="flex flex-col h-screen">
            <Navbar />
            <main>
              <div className="flex justify-between">
                <div className="hidden lg:flex flex-col fixed">{/* <BuyMeCoffeeButton /> */}</div>
                <div className="max-w-[1024px] mx-auto flex-grow">
                  {children}
                  <Advertisements />
                </div>
                <div className="hidden xl:flex fixed right-0">
                  <div className="flex flex-col">
                    <SideAdvertisements />
                    <div className=" top-[600px]">
                      <HorizontalAdvertisements />
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
