export const runtime = "edge"
import { XIcon } from "@/components/Icons/XIcon"
import Profile from "@/components/Profile"
import React from "react"
import { useTranslation } from "react-i18next"

export default async function page({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng)
  console.log(t)
  return (
    <div className="flex flex-col items-center ">
      <Profile />
    </div>
  )
}
