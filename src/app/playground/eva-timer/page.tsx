import { Metadata, ResolvingMetadata } from "next"
import { EvaTimer } from "./EvaTimer"

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
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1124456984547171"
     crossorigin="anonymous"></script>
<!-- タイマー -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-1124456984547171"
     data-ad-slot="9278854527"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
    </div>
  )
}
