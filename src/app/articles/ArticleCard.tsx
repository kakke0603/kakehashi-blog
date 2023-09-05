"use client"
import { DateTime } from "@/components/DateTime"
import { Card, CardBody } from "@nextui-org/react"
import { useRouter } from "next/navigation"
import React from "react"
import twemoji from "twemoji"
import { Chip } from "@nextui-org/react"
import { PencilIcon } from "@/components/Icons/PencilIcon"
import { RefreshIcon } from "@/components/Icons/RefreshIcon"
import { ArticleType } from "@/libs/client"
import { Tag } from "@/components/Tag"

export const ArticleCard: React.FC<ArticleType> = ({ id, title, content, publishedAt, revisedAt, tags }) => {
  const router = useRouter()
  const handleClick = () => router.push(`/articles/${id}`)
  const tag = tags?.[0]?.emoji ?? "📝"
  const emoji = twemoji.parse(tag)
  return (
    <Card className="py-4 w-full" isPressable onPress={handleClick}>
      <CardBody>
        <div className="gap-x-4 flex flex-row gap-y-4">
          <div className="w-[70px] h-[70px] p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <div dangerouslySetInnerHTML={{ __html: emoji }}></div>
          </div>
          <div className="space-y-4 flex-1">
            <h4 className="font-bold text-large block">{title}</h4>
            <HtmlStringToText htmlString={content.slice(0, 180)} />
            <div className="flex gap-x-2 overflow-scroll">{tags?.map((tag) => <Tag id={tag.id} name={tag.name} />)}</div>
          </div>
        </div>
        <div className="mt-4 flex gap-x-4 flex-wrap gap-y-1 justify-end">
          {revisedAt !== publishedAt && (
            <div className="flex items-center">
              <RefreshIcon />
              <DateTime value={revisedAt} className="ml-2" />
            </div>
          )}
          <div className="flex items-center">
            <PencilIcon />
            <DateTime value={publishedAt} className="ml-2" />
          </div>
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
  return <div className="block text-sm text-default-500 line-clamp-3 h-[40px]">{text}</div>
}
