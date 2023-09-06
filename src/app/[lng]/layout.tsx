import "../globals.css"
import { Noto_Sans_JP } from "next/font/google"
import { Providers } from "./providers"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { dir } from "i18next"
import { languages } from "../i18n/settings"

const inter = Noto_Sans_JP({ subsets: ["latin"], display: "swap" })

const siteName = "Kakke Blog"
const description = "This is a blog by kakke"
const url = "https://kakke.site"
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
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({ children, params: { lng } }: { children: React.ReactNode; params: { lng: string } }) {
  return (
    <html lang={lng} dir={dir(lng)} className={inter.className}>
      <meta property="og:image" content="<generated>" />
      <meta property="og:image:type" content="<generated>" />
      <meta property="og:image:width" content="<generated>" />
      <meta property="og:image:height" content="<generated>" />
      <body>
        <Providers>
          <div className="flex flex-col h-screen">
            <Navbar />
            <div className="max-w-[1024px] mx-auto flex-grow">{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
