import clsx from "clsx"

const colors = {
  black: "bg-black",
  blue: "bg-cyan-400",
  yellow: "bg-yellow-500",
  orange: "bg-orange-400",
}
type LineProps = {
  type?: "vertical" | "horizontal" | "double" | "double-space-mini" | "mini"
  color?: "black" | "blue" | "yellow" | "orange"
  className?: string
}
export const Line: React.FC<LineProps> = ({ type = "vertical", color = "black", className = "" }) => {
  const colorClass = colors[color]
  return (
    <div className={clsx(className, "z-10")}>
      {type === "vertical" && <div className={clsx(colorClass, "w-[2px] h-[3.5px] blur-[0.5px]")}></div>}
      {type === "horizontal" && <div className={clsx(colorClass, "w-[6px] h-[2px] blur-[0.5px]")}></div>}
      {type === "double" && (
        <div className="flex space-x-[1px]">
          <div className={clsx(colorClass, "w-[1.5px] h-[3.5px] blur-[0.5px]")}></div>
          <div className={clsx(colorClass, "w-[1.5px] h-[3.5px] blur-[0.5px]")}></div>
        </div>
      )}
      {type === "double-space-mini" && (
        <div className="flex space-x-[6px]">
          <div className={clsx(colorClass, "w-[1px] h-[2px]")}></div>
          <div className={clsx(colorClass, "w-[1px] h-[2px]")}></div>
        </div>
      )}
      {type === "mini" && <div className={clsx(colorClass, "w-[1px] h-[2px]")}></div>}
    </div>
  )
}
