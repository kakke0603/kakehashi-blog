import clsx from "clsx"
import { TimerMode } from "../EvaTimer"

type TimerButtonProps = {
  type: TimerMode
  timerMode: TimerMode
  onClick: (type: TimerMode) => void
}
const TIMER_BUTTON_TEXTS = {
  stop: "STOP",
  slow: "SLOW",
  normal: "NORMAL",
  racing: "RACING",
}
export const TimerButton: React.FC<TimerButtonProps> = ({ type, timerMode, onClick }) => {
  const text = TIMER_BUTTON_TEXTS[type]
  const isWideText = type === "stop" || type === "slow"
  return (
    <button
      className="h-[21px] w-[33px] bg-black hover:opacity-70 blur-[0.5px] border border-amber-500 rounded-sm flex flex-col items-center hover:border-amber-300 z-10 text-yellow-400 hover:text-yellow-200"
      onClick={() => onClick(type)}
    >
      <div className={clsx("h-[8px] w-[30px] text-[7px] text-center font-bold", isWideText ? "tracking-widest" : "")}>{text}</div>
      <div className={clsx("h-[5px] w-[28px] mt-[1.5px] rounded-[1px]", type === timerMode ? "bg-red-500" : "bg-black")}></div>
    </button>
  )
}
