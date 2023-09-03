export const runtime = "edge"
import { client } from "@/libs/client"
import { Article } from "./Article"
import { ArticleType } from "../ArticleCard"
import { Metadata } from "next"

export const revalidate = 10
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { title } = await client
    .get({
      endpoint: "articles",
      contentId: params.id,
      customRequestInit: {
        next: {
          revalidate: 10,
        },
      },
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
      customRequestInit: {
        next: {
          revalidate: 10,
        },
      },
    })
    .then((res) => res)
  return (
    <div>
      <Article {...data} />
    </div>
  )
}
