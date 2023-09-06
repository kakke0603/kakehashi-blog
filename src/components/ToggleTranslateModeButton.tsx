import React, { useState } from "react"
import { TranslateIcon } from "./Icons/TranslateIcon"
import { Button } from "@nextui-org/react"

export const ToggleTranslateModeButton = () => {
  const [isEnglish, setIsEnglish] = useState(false)
  const onClick = () => setIsEnglish((v) => !v)
  return (
    <Button isIconOnly color="default" onClick={onClick} variant={isEnglish ? "faded" : "flat"}>
      <div className="">
        <TranslateIcon />
      </div>
    </Button>
  )
}
