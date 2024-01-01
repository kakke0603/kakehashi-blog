export const runtime = "edge"

import React from "react"
import ThreeJs from "./ThreeJs"

export default async function Page() {
  return (
    <div>
      three.js
      <ThreeJs />
    </div>
  )
}
