export const runtime = "edge"
import React from "react"
import { PlaygroundCard } from "./PlaygroundCard"
import ThumEva from "./thum-eva-timer.png"
import ThumOurGoals from "./thum-our-goals.png"

const pages = [
  {
    id: "eva-title-maker",
    image: ThumOurGoals,
    title: "Eva Title Maker",
    content: "エヴァのタイトルメーカー",
    publishedAt: "2023-12-31T11:59:34.925Z",
    revisedAt: "2023-12-31T11:59:34.925Z",
  },
  {
    id: "our-goals",
    image: ThumOurGoals,
    title: "Our Goals",
    content: "目標作成ツール",
    publishedAt: "2023-12-29T11:59:34.925Z",
    revisedAt: "2023-12-29T11:59:34.925Z",
  },
  {
    id: "eva-timer",
    image: ThumEva,
    title: "EVA-Timer",
    content: "エヴァっぽいタイマー",
    publishedAt: "2023-09-15T11:59:34.925Z",
    revisedAt: "2023-09-15T11:59:34.925Z",
  },
]
export default function page() {
  return (
    <div className="">
      <div className="flex flex-col space-y-5">
        {pages.map((page) => (
          <PlaygroundCard {...page} key={page.id} />
        ))}
      </div>
    </div>
  )
}
