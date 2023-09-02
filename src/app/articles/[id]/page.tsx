export const runtime = "edge"
import { client } from "@/libs/client"
import { Article } from "./Article"
import { ArticleType } from "../ArticleCard"
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
