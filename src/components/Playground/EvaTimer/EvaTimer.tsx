"use client";
import React from "react";
import { useState } from "react";
import { Button, Link } from "@nextui-org/react";
import { useTimer } from "use-timer";
import { Timer } from "./components/Timer";

export type TimerMode = "stop" | "start" | "reset" | "racing";
export const EvaTimer = () => {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(10);
  const [randomNum, setRandomNum] = useState(0);
  const { time, start, pause, reset, status } = useTimer({
    initialTime: sec + min * 60,
    timerType: "DECREMENTAL",
    endTime: 0,
    interval: 1000,
    onTimeOver: () => {
      setRandomNum(0);
      setTimeout(() => {
        alert("活動限界です！");
      }, 100);
    },
  });
  const [timerMode, setTimerMode] = useState<TimerMode>("stop");
  const onClickTimerButton = (type: TimerMode) => {
    if (type === "start") {
      start();
      setTimerMode("start");
      return;
    } else if (type === "stop") {
      pause();
    } else if (type === "reset") {
      reset();
      setSec(10);
      setRandomNum(0);
    } else if (type === "racing") {
      return;
    }
    setTimerMode("stop");
  };
  React.useEffect(() => {
    if (status === "STOPPED" || status === "PAUSED") return;
    const id = setInterval(() => {
      setRandomNum(Math.floor(Math.random() * 100));
    }, 10);
    return () => clearInterval(id);
  });
  return (
    <div className="pt-10">
      <Timer time={time} randomNum={randomNum} timerMode={timerMode} onClick={onClickTimerButton} />
      <div className="pt-[30px] flex flex-col space-y-[20px]">
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
        <div>制作過程は以下の記事で紹介しています🥳</div>
        <Link href={"https://kakke.site/articles/phth-0wg-1a"}>https://kakke.site/articles/phth-0wg-1a</Link>
        <div></div>
      </div>
    </div>
  );
};
