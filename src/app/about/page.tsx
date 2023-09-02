export const runtime = "edge"
import { XIcon } from "@/components/Icons/XIcon"
import Profile from "@/components/Profile"
import React from "react"

export default function page() {
  return (
    <div className="flex flex-col items-center ">
      <Profile />
    </div>
  )
}
