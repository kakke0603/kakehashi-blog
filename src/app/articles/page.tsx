// export const runtime = 'edge'
import { client } from '@/libs/client'
import React from 'react'
import { Article, ArticleType } from './Article'

export default async function page() {
  const data = await client.getList({
    endpoint: 'articles',
    customRequestInit: {
      cache: 'no-store',
    },
  }).then((res) => res.contents)
  return (
    <div className="pt-10 px-2 space-y-10 max-w-2xl mx-auto">
      {data?.map((article:ArticleType) => {
        return <Article key={article.id} {...article} />
      })}
    </div>
  )
}
