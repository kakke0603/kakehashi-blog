"use client"
import React from "react"
import { ArticleType } from "../ArticleCard"
import twemoji from "twemoji"
import { DateTime } from "@/components/DateTime"

export const Article: React.FC<ArticleType> = ({ id, title, content, publishedAt, revisedAt, tags }) => {
  const tag = tags?.[0]?.emoji ?? "📝"
  const emoji = twemoji.parse(tag)
  return (
    <div className="mx-5 ">
      <div className="flex justify-center py-10 bg-gray-100 dark:bg-gray-700 my-5  rounded-lg flex-col items-center space-y-5">
        <div dangerouslySetInnerHTML={{ __html: emoji }}></div>
        <h1 className="text-3xl font-bold break-words border-none">{title}</h1>
      </div>
      <div>
        <DateTime value={publishedAt} className="mb-5" />
        <div className="dark:text-slate-200 mb-[100px]" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  )
}
