export const runtime = "edge"
import { client } from "@/libs/client"
import React from "react"
import { ArticleCard, ArticleType } from "./ArticleCard"

export default async function page() {
  const data = await client
    .getList({
      endpoint: "articles",
    })
    .then((res) => res.contents)
  return (
    <div className="pt-10 px-2 space-y-10 max-w-2xl mx-auto">
      {data?.map((article: ArticleType) => {
        return <ArticleCard key={article.id} {...article} />
      })}
    </div>
  )
}
