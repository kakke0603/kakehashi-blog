"use client"
import React from "react"
import { useState } from "react"
import { Button } from "@nextui-org/react"

import { Input } from "@nextui-org/react"
import { Timer } from "./components/Timer"
import { useTimer } from "react-timer-hook"

export type TimerMode = "stop" | "start" | "reset" | "racing"
export const EvaTimer = () => {
  const time = new Date()
  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(15)
  time.setSeconds(time.getSeconds() + min * 60 + sec)
  const [randomNum, setRandomNum] = useState(0)
  const { totalSeconds, seconds, minutes, hours, days, isRunning, start, pause, resume, restart } = useTimer({
    expiryTimestamp: time,
    onExpire: () => console.warn("onExpire called"),
    autoStart: false,
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
      // restart(time)
      setRandomNum(0)
    } else if (type === "racing") {
      return
    }
    setTimerMode("stop")
  }
  React.useEffect(() => {
    if (isRunning === false) return
    const id = setInterval(() => {
      setRandomNum(Math.floor(Math.random() * 100))
    }, 10)
    return () => clearInterval(id)
  })
  return (
    <div className="pt-10">
      <Timer time={totalSeconds} randomNum={randomNum} timerMode={timerMode} onClick={onClickTimerButton} />
      <div className="pt-[30px] flex flex-col space-y-[20px]">
        <div className="flex items-center">
          {/* <Input
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
          /> */}
        </div>
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
