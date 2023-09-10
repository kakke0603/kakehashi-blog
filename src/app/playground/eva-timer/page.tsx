import clsx from "clsx"
import { type } from "os"

export const runtime = "edge"

export default async function Page() {
  const createArray = (length: number) => {
    return new Array(length).fill(0)
  }
  //3.25
  return (
    <div>
      <div>
        <div className="bg-gradient-to-r from-orange-300 via-yellow-200 to-green-400 h-[200px] w-[360px] flex relative">
          <div className="h-full w-[5px]">
            <div className="bg-black w-[4px] h-full mt-[2px] ml-[1px] blur-[0.5px]"></div>
          </div>
          <div className="w-full h-full flex flex-col">
            <div className="h-[6px] w-full pl-[4px] pr-[12px] py-[1px] flex justify-between">
              {createArray(10).map((_, i) => (
                <Line key={i} />
              ))}
            </div>
            <div className="h-full w-full ">
              <div className="w-[8px] h-full flex flex-col">
                <div className="h-full flex flex-col justify-between px-[1px] pt-[1px]">
                  {createArray(10).map((_, i) => (
                    <Line key={i} type="horizontal" />
                  ))}
                </div>
                <div className="h-[11px]"></div>
                <div className="h-[12px] flex">
                  <div className="w-[5px]"></div>
                  {/* <div className="w-[3px]">
                    <div className="relative w-[3px] h-[12px]">
                      <div className="top-0 absolute w-full h-full"></div>
                      <div
                        className="absolute top-0 w-full h-full z-10 blur-[0.5px]"
                        style={{
                          background:
                            "linear-gradient(to bottom right, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 50%, rgba(245,218,64,1) 50%, rgba(245,218,64,1) 100%)",
                        }}
                      ></div>
                      <div
                        className="absolute top-[4px] left-[1px] z-10 h-[10px] w-[2px] blur-[0.5px]"
                        style={{
                          background:
                            "linear-gradient(to bottom right, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)",
                        }}
                      ></div>
                    </div>
                  </div> */}
                  <div className="relative flex">
                    <div className="flex absolute -bottom-[1px] rotate-[15deg] origin-bottom-left">
                      <div className="flex flex-col">
                        <div className="h-[110px] mb-[2px] bg-black blur-[0.5px] border-l border-b border-yellow-200 z-10 w-[9px]">
                          <Line className="absolute bottom-[1px] left-[1px]" color="blue" />
                        </div>
                        <div className="h-[36px] w-[10px] bg-black -ml-[1px] blur-[0.5px] border-l border-t border-yellow-200">
                          <Line className="absolute top-[1px] left-[1px]" color="blue" />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="h-[110px] mb-[2px] bg-black blur-[0.5px] -ml-[1px] border-b border-yellow-200">
                          <Line className="absolute bottom-[1px] left-[2px]" color="blue" />
                          <div className="absolute bottom-0 right-[1px] h-[109px] w-[11px] bg-black  blur-[0.5px] rotate-[6deg] origin-bottom-right"></div>
                        </div>
                        <div className="flex flex-col h-[37px] w-[5px] -ml-[1px] ">
                          <div
                            className="h-[30px] w-[4px] bg-black blur-[0.5px] border-t border-yellow-200"
                            style={{
                              background:
                                "linear-gradient(to bottom right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 100%)",
                            }}
                          >
                            <Line className="absolute top-[1px] left-[1px]" color="blue" />
                            <div className="absolute bottom-0 left-[1px] h-[69px] w-[2px]  rotate-[6deg] origin-bottom-left">
                              <div className="h-[37px] w-[2px] border-l border-yellow-200 mb-[2px]"></div>
                              <div className="h-[29px] w-[2px] border-l border-yellow-200"></div>
                            </div>
                            <div className="absolute bottom-0 h-[51px] w-[2px] bg-black rotate-[22deg] origin-bottom-right  border-l border-yellow-200"></div>
                          </div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[132px] left-[46px] w-[179px] h-[23px]  flex">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex absolute bottom-0 items-end">
            <div className="w-[17px] h-[10px]"></div>
            <div
              className="w-[35px] -mb-[1px] h-[45px] bg-black blur-[0.5px]"
              style={{
                background: "linear-gradient(to bottom right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)",
              }}
            ></div>
            <div className="flex flex-col w-[5px] -ml-[1px]">
              <div className="flex w-[269px] items-end">
                <div className="w-[4px] -mb-[1px] h-[6px] bg-black blur-[0.5px] border-t border-yellow-200 relative">
                  <Line className="absolute top-[1px] left-[1px]" color="blue" type="mini" />
                </div>
                <div className="w-[173px] -mb-[1px] -ml-[1px] h-[6px] bg-black blur-[0.5px] border-t border-yellow-200 border-b flex">
                  <Line className="absolute top-[1px] left-[4px]" color="blue" type="mini" />
                  <div className="flex pt-[1px] w-full pl-[34px] pr-[10px] justify-between">
                    {createArray(3).map((_, i) => (
                      <Line key={i} color="blue" type="double-space-mini" />
                    ))}
                    <Line className="" color="blue" type="mini" />
                  </div>
                </div>
                <div className="w-[95px] h-[23px]  -mb-[1px] -ml-[1px] bg-black blur-[0.5px] border-t border-b border-r border-yellow-200 flex flex-col">
                  <div className="border-l border-yellow-200  h-[19px] w-[95px]">
                    <Line className="pt-[1px] pl-[30px]" color="orange" type="double" />
                  </div>
                  <div className="h-[4px] w-[95px] flex">
                    <Line className="pt-[1px] pl-[3px]" color="blue" type="mini" />
                    <Line className="pt-[1px] pl-[25px]" color="blue" type="mini" />
                  </div>
                </div>
              </div>
              <div className="w-[4px] -mb-[1px] h-[3px] bg-black blur-[0.5px] border-r border-yellow-200"></div>
              <div className="w-[4px] -mb-[1px] h-[39px] bg-black blur-[0.5px]">
                <Line className="pl-[1px] pt-[2px]" color="blue" type="mini" />
              </div>
            </div>
            <div className="h-[39px] w-[266px] -ml-[2px] -mb-[1px] bg-black blur-[0.5px] border-r border-t border-yellow-200 flex">
              <Line className="pl-[4px] pt-[1px]" color="blue" type="mini" />
              <div className="flex ml-[23px] pl-[10px] justify-between pr-[100px] w-full">
                {createArray(4).map((_, i) => (
                  <Line key={i} className="pt-[1px]" color="blue" type="mini" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const colors = {
  black: "bg-black",
  blue: "bg-cyan-400",
  yellow: "bg-yellow-400",
  orange: "bg-orange-400",
}
type LineProps = {
  type?: "vertical" | "horizontal" | "double" | "double-space-mini" | "mini"
  color?: "black" | "blue" | "yellow" | "orange"
  className?: string
}
const Line: React.FC<LineProps> = ({ type = "vertical", color = "black", className = "" }) => {
  const colorClass = colors[color]
  return (
    <div className={clsx(className, "z-10")}>
      {type === "vertical" && <div className={clsx(colorClass, "w-[2px] h-[4px] blur-[0.5px]")}></div>}
      {type === "horizontal" && <div className={clsx(colorClass, "w-[6px] h-[2px] blur-[0.5px]")}></div>}
      {type === "double" && (
        <div className="flex space-x-[1px]">
          <div className={clsx(colorClass, "w-[2px] h-[4px] blur-[0.5px]")}></div>
          <div className={clsx(colorClass, "w-[2px] h-[4px] blur-[0.5px]")}></div>
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
