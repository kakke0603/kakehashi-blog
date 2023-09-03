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
    site: "@サイト用アカウントのTwitterID",
    creator: "@作者のTwitterID",
  },
  verification: {
    google: "サーチコンソールのやつ",
  },
  alternates: {
    canonical: url,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={inter.className}>
      <body>
        <Providers>
          <Navbar />
          <div className="max-w-[1024px] mx-auto ">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
