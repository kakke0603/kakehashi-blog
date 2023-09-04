export const runtime = "edge"
import { ArticleType, client, getAllArticles, getArticle } from "@/libs/client"
import { Article } from "./Article"
import { Metadata } from "next"

/**
 * パスの事前決定
 */
export async function generateStaticParams() {
  const articles = await getAllArticles()
  return articles.contents.map(({ id }) => ({
    id,
  }))
}

/**
 * メタデータの設定
 */
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { title } = await getArticle(params.id)
  return { title }
}

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getArticle(params.id)
  return (
    <div>
      <Article {...data} />
    </div>
  )
}
