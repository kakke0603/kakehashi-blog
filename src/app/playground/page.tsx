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
    publishedAt: "2023-9-15",
    revisedAt: "2023-9-15",
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
