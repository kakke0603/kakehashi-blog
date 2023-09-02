"use client"
import { Image } from "@nextui-org/react"
import React from "react"

export type ArticleType = {
  id: string
  title: string
  content: string
  publishedAt: string
  revisedAt: string
  eyecatch: {
    url: string
    height: number
    width: number
  }
}
export const Article: React.FC<ArticleType> = ({ id, title, content, publishedAt, revisedAt, eyecatch }) => {
  return (
    <div>
      <div className="flex justify-center">
        <Image alt="Card background" className="object-cover rounded-xl" src={eyecatch.url} width={320} isBlurred />
      </div>
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-sm text-gray-500">{publishedAt}</p>
        <div className="">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  )
}
