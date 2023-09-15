export const runtime = "edge"
import React from "react"
import { PlaygroundCard } from "./PlaygroundCard"
import ThumEva from "./thum-eva-timer.png"

const pages = [
  {
    id: "eva-timer",
    image: ThumEva,
    title: "EVA-Timer",
    content: "エヴァっぽいタイマー作ってみた",
    publishedAt: "2023-09-15T11:59:34.925Z",
    revisedAt: "2023-09-15T11:59:34.925Z",
  },
]
export default function page() {
  return (
    <div className="">
      <div className="">
        {pages.map((page) => (
          <PlaygroundCard {...page} key={page.id} />
        ))}
      </div>
    </div>
  )
}
