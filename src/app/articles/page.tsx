export const runtime = 'edge'
import React from 'react'
import { Article, ArticleType } from './Article'
import { createClient } from "microcms-js-sdk";

async function getContents() {
  const client = createClient({
   serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN ?? '',
   apiKey:process.env.MICROCMS_API_KEY ?? '',
  });
 
  const response = await client.getList({
   customRequestInit: {
    cache: "no-store", // キャッシュを利用せずに常に新しいデータを取得する
   },
   endpoint: "articles",
  });
 
  return response.contents;
 }

export default async function page() {
  const contents = await getContents()
  return (
    <div className="pt-10 px-2 space-y-10 max-w-2xl mx-auto">
      {contents.map((article) => {
        return <Article key={article.id} {...article} />
      })}
    </div>
  )
}
