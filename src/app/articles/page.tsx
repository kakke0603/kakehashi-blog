export const runtime = 'edge'
import { client } from '@/libs/client'
import React from 'react'
import { Article, ArticleType } from './Article'

export default async function page() {
  const data = await client.getList<ArticleType>({
    endpoint: 'articles',
    customRequestInit: {
      cache: 'no-cache',
    },
  })
  // console.log(data)
  return (
    <div className="pt-10 px-2 space-y-10 max-w-2xl mx-auto">
      {data.contents.map((article) => {
        return <Article key={article.id} {...article} />
      })}
    </div>
  )
}
