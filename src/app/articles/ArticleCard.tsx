"use client"
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
      <CardBody className="overflow-visible py-2 flex flex-row space-x-4">
        <Image alt="Card background" className="object-cover rounded-xl w-full" src={eyecatch.url} width={220} />
        <div className="">
          <h4 className="font-bold text-large mb-2">{title}</h4>
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

  return <span className="ml-2 text-sm text-default-500">{text}</span>
}
