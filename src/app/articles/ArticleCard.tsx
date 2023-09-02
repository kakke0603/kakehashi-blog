"use client"
import { RunIcon } from "@/components/Icons/RunIcon"
import { SmileIcon } from "@/components/Icons/SmileIcon"
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react"
import { useRouter } from "next/navigation"
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
export const ArticleCard: React.FC<ArticleType> = ({ id, title, content, publishedAt, revisedAt, eyecatch }) => {
  const router = useRouter()
  const handleClick = () => router.push(`/articles/${id}`)
  return (
    <Card className="py-4 w-full" isPressable onPress={handleClick}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <small className="text-default-500">{publishedAt}</small>
      </CardHeader>
      <CardBody className="py-2 gap-x-4 flex flex-row">
        <div className="w-[70px] h-[70px] bg-slate-700 rounded">
          <RunIcon className="w-full h-full p-2" />
        </div>
        <div className="space-y-3  w-full">
          <h4 className="font-bold text-large block">{title}</h4>
          <HtmlStringToText htmlString={content.slice(0, 180)} />
        </div>
      </CardBody>
    </Card>
  )
}

function HtmlStringToText({ htmlString }: { htmlString: string }) {
  // ダミーのdiv要素を作成してinnerHTMLを設定し、テキストを取得します。
  const dummyDiv = document.createElement("div")
  dummyDiv.innerHTML = htmlString
  const text = dummyDiv.textContent || dummyDiv.innerText

  return <span className="block  text-sm text-default-500">{text}</span>
}
