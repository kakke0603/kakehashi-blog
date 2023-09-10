export const runtime = "edge"
import React from "react"
import { PlaygroundCard } from "./PlaygroundCard"

const pages = [
  {
    id: "eva-timer",
    image: "",
    title: "eva-timer",
    content: "contentcontentcontentcontentcontent",
    publishedAt: "2021-10-10",
    revisedAt: "2021-10-10",
  },
]
export default function page() {
  return (
    <div className="">
      <div className="">
        {pages.map((page) => (
          <PlaygroundCard {...page} />
        ))}
      </div>
    </div>
  )
}
