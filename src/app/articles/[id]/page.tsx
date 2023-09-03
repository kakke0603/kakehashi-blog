export const runtime = "edge"
import { client } from "@/libs/client"
import { Article } from "./Article"
import { ArticleType } from "../ArticleCard"
import { Metadata } from "next"

type Props = {
  params: { id: string }
}
/**
 * メタデータの設定
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
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
