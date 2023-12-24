import { Metadata, ResolvingMetadata } from "next"
import { EvaTimer } from "./EvaTimer"
import GoogleAd from "@/components/GoogleAd"

export const runtime = "edge"

/**
 * メタデータの設定
 */
const siteName = "eva-timer:エヴァっぽいタイマー作ってみた"
export const metadata = {
  title: {
    default: "eva-timer:エヴァっぽいタイマー作ってみた",
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
      <EvaTimer /> 
      <GoogleAd slotId="9278854527"/>
    </div>
  )
}
