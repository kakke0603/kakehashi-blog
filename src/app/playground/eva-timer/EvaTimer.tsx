"use client"
import clsx from "clsx"
import React from "react"
import { useState } from "react"
import { Button } from "@nextui-org/react"

import { Input } from "@nextui-org/react"
import { useTimer } from "use-timer"
import { Timer } from "./components/Timer"

export type TimerMode = "stop" | "start" | "reset" | "racing"
export const EvaTimer = () => {
  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(10)
  const [randomNum, setRandomNum] = useState(0)
  const { time, start, pause, reset, status } = useTimer({
    initialTime: sec + min * 60,
    timerType: "DECREMENTAL",
    endTime: 0,
    interval: 1000,
    onTimeOver: () => {
      setRandomNum(0)
      setMin(0)
      setSec(0)
      setTimeout(() => {
        alert("活動限界です！")
      }, 100)
    },
  })
  const [timerMode, setTimerMode] = useState<TimerMode>("stop")
  const onClickTimerButton = (type: TimerMode) => {
    if (type === "start") {
      start()
      setTimerMode("start")
      return
    } else if (type === "stop") {
      pause()
    } else if (type === "reset") {
      reset()
      setRandomNum(0)
    } else if (type === "racing") {
      return
    }
    setTimerMode("stop")
  }
  React.useEffect(() => {
    if (status === "STOPPED" || status === "PAUSED") return
    const id = setInterval(() => {
      setRandomNum(Math.floor(Math.random() * 100))
    }, 10)
    return () => clearInterval(id)
  })
  return (
    <div className="pt-10">
      <Timer time={time} randomNum={randomNum} timerMode={timerMode} onClick={onClickTimerButton} />
      <div className="pt-[30px] flex flex-col space-y-[20px]">
        {/* <div className="flex items-center">
          <Input
            value={min.toString()}
            onChange={(e) => setMin(e.target.valueAsNumber)}
            variant="bordered"
            size="lg"
            type="number"
            max={99}
            min={0}
            step={1}
            label="min"
          />
          ：<div className="flex items-center"></div>
          <Input
            value={sec.toString()}
            onChange={(e) => setSec(e.target.valueAsNumber)}
            variant="bordered"
            size="lg"
            type="number"
            max={59}
            min={0}
            step={1}
            label="sec"
          />
        </div> */}
        <div className="flex justify-between">
          <Button onClick={() => onClickTimerButton("start")} color={status === "RUNNING" ? "primary" : "default"}>
            START
          </Button>
          <Button onClick={() => onClickTimerButton("stop")} color={status !== "RUNNING" ? "primary" : "default"}>
            STOP
          </Button>
          <Button onClick={() => onClickTimerButton("reset")} color={"default"}>
            RESET
          </Button>
        </div>
      </div>
    </div>
  )
}
