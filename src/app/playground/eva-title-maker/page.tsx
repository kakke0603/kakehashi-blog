import { Metadata, ResolvingMetadata } from "next"
import GoogleAdsense from "@/components/GoogleAdsense"
import GoogleAd from "@/components/GoogleAdsense"
import { EvaTitleMaker } from "./EvaTitleMaker"

export const runtime = "edge"

/**
 * メタデータの設定
 */
const siteName = "eva-timer:エヴァのタイトルメーカー"
export const metadata = {
  title: {
    default: "eva-timer:エヴァのタイトルメーカー",
  },
  metadataBase: new URL(process.env.URL ?? "http://localhost:3000"),
  openGraph: {
    title: siteName,
    siteName,
    locale: "ja_JP",
    type: "website",
    images: "/ogp-eva-timer.png",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    site: "@kkhs0603",
    creator: "@kkhs0603",
  },
  verification: {
    google: "",
  },
}
export default async function Page() {
  return (
    <div>
      <EvaTitleMaker />
    </div>
  )
}
