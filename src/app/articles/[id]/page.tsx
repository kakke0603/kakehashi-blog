export const runtime = "edge"
import { client } from "@/libs/client"
import { Article } from "./Article"
import { ArticleType } from "../ArticleCard"
import { Metadata } from "next"
/**
 * メタデータの設定
 */
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
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { title } = await client
    .get({
      endpoint: "articles",
      contentId: params.id,
    })
    .then((res) => res)
  // templateを設定しているので、サイト名は自動で付く
  return { title }
}
export default async function Page({ params }: { params: { id: string } }) {
  const data: ArticleType = await client
    .get({
      endpoint: "articles",
      contentId: params.id,
    })
    .then((res) => res)
  return (
    <div>
      <Article {...data} />
    </div>
  )
}
