import { Metadata, ResolvingMetadata } from "next"
import GoogleAdsense from "@/components/GoogleAdsense"
import GoogleAd from "@/components/GoogleAdsense"
import { FaceDetectPomodoroTimer } from "./FaceDetectPomodoroTimer"

export const runtime = "edge"

/**
 * メタデータの設定
 */
const siteName = "face-detect-pomodoro-timer:顔認証のポモドーロタイマー"
export const metadata = {
  title: {
    default: "face-detect-pomodoro-timer:顔認証のポモドーロタイマー",
  },
  metadataBase: new URL(process.env.URL ?? "http://localhost:3000"),
  openGraph: {
    title: siteName,
    siteName,
    locale: "ja_JP",
    type: "website",
    images: "/ogp-face-detect-pomodoro-timer.png",
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
      ポモドーロ
      <FaceDetectPomodoroTimer />
    </div>
  )
}
