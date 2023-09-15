import { Metadata, ResolvingMetadata } from "next"
import { EvaTimer } from "./EvaTimer"

export const runtime = "edge"

/**
 * メタデータの設定
 */
export async function generateMetadata({}: any, parent: ResolvingMetadata): Promise<Metadata> {
  const previousImages = (await parent).openGraph?.images || []
  return {
    title: "eva-timer:エヴァっぽいタイマー作ってみた",
    openGraph: {
      images: ["/ogp-eva-timer.png", ...previousImages],
    },
  }
}
export default async function Page() {
  //3.25
  return (
    <div>
      <EvaTimer />
    </div>
  )
}
