"use client"
import React from "react"
import { Select, SelectItem, Input } from "@nextui-org/react"

export const EvaTitleMaker = () => {
  const titles = [
    { value: "使徒、襲来", label: "第壱話 使徒、襲来" },
    { value: "見知らぬ、天井", label: "第弍話 見知らぬ、天井" },
  ]
  const [value, setValue] = React.useState(new Set([]))
  console.log(value.entries())
  return (
    <div>
      EvaTitleMaker
      <div>
        <Select label="タイトルを選択" className="w-[200px]" selectedKeys={value} onSelectionChange={(e) => console.log(e)}>
          {titles.map((title) => (
            <SelectItem key={title.value} value={title.value}>
              {title.label}
            </SelectItem>
          ))}
        </Select>
        <div className="text-5xl font-serif font-extrabold">{value}</div>
      </div>
    </div>
  )
}
