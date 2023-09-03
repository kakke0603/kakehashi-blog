export const runtime = "edge"
import { client } from "@/libs/client"
import { Article } from "./Article"
import { ArticleType } from "../ArticleCard"
import { Metadata } from "next"

const fetchArticle = async (id: string) => {
  const data: ArticleType = await client
    .get({
      endpoint: "articles",
      contentId: id,
      customRequestInit: {
        next: {
          revalidate: 10,
        },
      },
    })
    .then((res) => res)
  return data
}
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { title } = await fetchArticle(params.id)
  return { title }
}
export default async function Page({ params }: { params: { id: string } }) {
  const data = await fetchArticle(params.id)
  return (
    <div>
      <Article {...data} />
    </div>
  )
}
