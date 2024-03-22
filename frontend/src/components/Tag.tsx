import { Chip } from "@nextui-org/react"
import React from "react"

export const Tag: React.FC<{ id: string; name: string }> = ({ id, name }) => {
  return (
    <Chip key={id} size="sm" classNames={{ base: "bg-gray-100 dark:bg-gray-700 whitespace-nowrap" }}>
      {name}
    </Chip>
  )
}
