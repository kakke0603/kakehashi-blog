import clsx from "clsx"
import React from "react"

type Props = {
  value: string
  className?: string
}
export const DateTime: React.FC<Props> = ({ value, className }) => {
  const dateObject = new Date(value)
  const year = dateObject.getFullYear()
  const month = dateObject.getMonth() + 1
  const day = dateObject.getDate()
  const hours = dateObject.getHours()
  const minutes = dateObject.getMinutes()
  const seconds = dateObject.getSeconds()
  const formattedDate = `${year}-${month < 10 ? "0" : ""}${month}-${day < 10 ? "0" : ""}${day}`
  const formattedTime = `${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  return (
    <div className={clsx("text-default-500 text-sm", className)}>
      {formattedDate} {formattedTime}
    </div>
  )
}
