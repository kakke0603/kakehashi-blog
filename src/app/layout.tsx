import "./globals.css"
import { Noto_Sans_JP } from "next/font/google"
import { Providers } from "./providers"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={inter.className}>
      <meta property="og:image" content="<generated>" />
      <meta property="og:image:type" content="<generated>" />
      <meta property="og:image:width" content="<generated>" />
      <meta property="og:image:height" content="<generated>" />
      <body>
        <Providers>
          <Navbar />
          <div className="max-w-[1024px] mx-auto">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
