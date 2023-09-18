"use client"
import React, { useState } from "react"
import { useTimer } from "use-timer"
import { TimerMode } from "../EvaTimer"
import { Line } from "./Line"
import { TimerButton } from "./TimerButton"
import { TimerNumber } from "./TimerNumber"
import clsx from "clsx"

type Props = {
  time: number
  randomNum: number
  timerMode: TimerMode
  onClick: (type: TimerMode) => void
}
export const Timer: React.FC<Props> = ({ time, randomNum, timerMode, onClick }) => {
  const createArray = (length: number) => {
    return new Array(length).fill(0)
  }
  const sec = time
  const min = Math.floor(sec / 60)
  const secString = ("0" + (sec - min * 60).toString()).slice(-2)
  const minString = ("0" + min.toString()).slice(-2)
  const secNum = Number(secString)
  const minNum = Number(minString)
  const secNum1 = Math.floor(secNum / 10)
  const secNum2 = secNum - secNum1 * 10
  const minNum1 = Math.floor(minNum / 10)
  const minNum2 = minNum - minNum1 * 10
  const randomNum1 = Math.floor(randomNum / 10)
  const randomNum2 = randomNum - randomNum1 * 10

  const isDanger = sec <= 5

  return (
    <div>
      <div
        className={clsx(
          "md:scale-150 md:my-10  bg-gradient-to-r  h-[200px] w-[370px] flex relative",
          isDanger ? "bg-red-600" : "from-orange-300 via-yellow-200 to-green-400"
        )}
      >
        <div>
          <div className="absolute top-[30px] left-[34px] flex flex-col">
            <Line type="double" />
            <Line type="double" className="mt-[3px]" />
          </div>
          <div className="absolute top-[52px] left-[37px] flex">
            <Line type="double" />
            <Line type="double" className="ml-[3px]" />
          </div>
          <div className="absolute top-[25px] left-[40px] flex">
            <Line />
            <Line className="ml-[8px]" />
            <Line className="ml-[36px]" />
          </div>
          <div className="absolute top-[33px] left-[100px] flex">
            <Line />
            <Line className="ml-[70px]" />
            <Line className="ml-[70px]" />
            <Line className="ml-[70px]" />
          </div>
          <div className="absolute top-[30px] left-[40px] flex">
            <div className="flex flex-col">
              <div className="bg-black blur-[0.5px] w-[10px] h-[10px]"></div>
              <div className=" bg-black blur-[0.5px] w-[10px] h-[14px] -rotate-[45deg] origin-top-left"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex">
                <div className="w-[41px] -ml-[0.5px] h-[2px] bg-black blur-[0.5px] border-l border-amber-700"></div>
                <div className="w-[12px] h-[5px] bg-black blur-[0.5px] rotate-[45deg] origin-top-left"></div>
              </div>
              <div className={clsx("flex", isDanger ? "text-red-600" : "text-yellow-400")}>
                <div className="w-[41px] -ml-[0.5px] -mt-[3.5px] h-[18px] bg-black blur-[0.5px] text-[10px] border-l border-amber-700">活動限界</div>
                <div className="w-[181px] -ml-[0.5px] mt-[2.5px] pl-[2px] h-[12px] bg-black blur-[0.5px]  text-[7px] ">ACTIVE TIME REMAIN</div>
              </div>
              <div className="flex -mt-[1px]">
                <div className="h-[83px] w-[15px] bg-black blur-[0.5px] z-10 mr-[1px]">
                  <div className={clsx("h-[14px] text-[6px] pl-[1px]  border-l border-amber-700", isDanger ? "text-red-600" : "text-yellow-400")}>
                    あと
                  </div>
                  <div className="h-full w-full flex flex-col space-y-[60px] border-t border-r border-amber-700">
                    <div className="flex space-x-[3px]">
                      <Line color={isDanger ? "red" : "blue"} />
                      <Line color={isDanger ? "red" : "blue"} />
                    </div>
                    <div className="flex space-x-[3px]">
                      <Line color={isDanger ? "red" : "blue"} />
                      <Line color={isDanger ? "red" : "blue"} />
                    </div>
                  </div>
                </div>
                <div className="h-[83px] -ml-[1.5px] w-[140px] bg-black blur-[0.5px] z-10 text-yellow-400 ">
                  <div className="h-[10px]"></div>
                  <div className="pl-[4px] flex space-x-[5px]">
                    <TimerNumber num={minNum1} isDanger={isDanger} />
                    <TimerNumber num={minNum2} isDanger={isDanger} />
                    <div className=" w-[25px] h-[67px] flex flex-col justify-between py-[15px]">
                      <div className={clsx("w-[5px] h-[10px]  -skew-x-[4deg] ml-[5px]", isDanger ? "bg-red-600" : "bg-amber-400")}></div>
                      <div className={clsx("w-[5px] h-[10px]  -skew-x-[4deg] ml-[4px]", isDanger ? "bg-red-600" : "bg-amber-400")}></div>
                    </div>
                    <TimerNumber num={secNum1} isDanger={isDanger} />
                    <TimerNumber num={secNum2} isDanger={isDanger} />
                  </div>
                </div>
                <div className={clsx("h-[83px] -ml-[1px] w-[69px] bg-black blur-[0.5px] text-yellow-400 ", isDanger && "text-red-600")}>
                  <div className="h-[18px]"></div>
                  <div className="z-10 flex">
                    <div className=" w-[15px] h-[65px] flex flex-col justify-between pl-[3px] py-[16px]">
                      <div className={clsx("w-[4px] h-[8px]  -skew-x-[4deg] ml-[5px]", isDanger ? "bg-red-600" : "bg-amber-400")}></div>
                      <div className={clsx("w-[4px] h-[8px]  -skew-x-[4deg] ml-[4px]", isDanger ? "bg-red-600" : "bg-amber-400")}></div>
                    </div>
                    <TimerNumber num={randomNum1} size="mini" isDanger={isDanger} />
                    <TimerNumber num={randomNum2} size="mini" isDanger={isDanger} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[37.5px] right-[10px] flex items-end">
            <div className="w-[20px] h-[12px] bg-black blur-[0.5px]"></div>
            <div className="w-[210px] h-[4px] bg-black blur-[0.5px]"></div>
            <div className="w-[90px] h-[94px] bg-black blur-[0.5px] flex flex-col">
              <div className="flex w-full justify-between px-[1px] pt-[1px]">
                <Line type="mini" color={isDanger ? "red" : "blue"} />
                <Line type="mini" color={isDanger ? "red" : "blue"} />
              </div>
              <div
                className={clsx(
                  "border  flex mx-[1px] rounded-[2px] space-x-[4px] text-center",
                  isDanger ? "border-red-600 text-red-600" : "border-amber-500 text-yellow-400 "
                )}
              >
                <div className="w-[59px] p-[1px]">
                  <div className="text-[10px] font-bold tracking-widest">内部</div>
                  <div className="text-[10px]">INTERNAL</div>
                </div>
                <div className="w-[22px] relative mx-[1px] my-[1px]">
                  <div
                    className="w-[21px] h-[21px] blur-[0.5px] absolute top-0 left-0"
                    style={{
                      background: "linear-gradient(to bottom right, #ff3b3b 0%, #ff3b3b 50%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 100%)",
                    }}
                  ></div>
                  <div
                    className="w-[14px] h-[14px] blur-[0.5px] absolute top-0 left-0"
                    style={{
                      background: "linear-gradient(to bottom right, #000000 0%, #000000 50%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 100%)",
                    }}
                  ></div>
                  <div
                    className="w-[7px] h-[7px] blur-[0.5px] absolute top-0 left-0"
                    style={{
                      background: "linear-gradient(to bottom right, #ff3b3b 0%, #ff3b3b 50%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 100%)",
                    }}
                  ></div>
                  <div
                    className="w-[21px] h-[21px] blur-[0.5px] absolute bottom-0 right-0"
                    style={{
                      background: "linear-gradient(to bottom right,rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, #ff3b3b 50%, #ff3b3b 100%)",
                    }}
                  ></div>
                  <div
                    className="w-[14px] h-[14px] blur-[0.5px] absolute bottom-0 right-0"
                    style={{
                      background: "linear-gradient(to bottom right,rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, #000000 50%, #000000 100%)",
                    }}
                  ></div>
                  <div
                    className="w-[7px] h-[7px] blur-[0.5px] absolute bottom-0 right-0"
                    style={{
                      background: "linear-gradient(to bottom right,rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, #ff3b3b 50%, #ff3b3b 100%)",
                    }}
                  ></div>
                </div>
              </div>
              <div className="flex w-full justify-between px-[1px] pt-[1px]">
                <Line type="mini" color={isDanger ? "red" : "blue"} />
                <Line type="mini" color={isDanger ? "red" : "blue"} />
              </div>
              <div
                className={clsx(
                  "border  mx-[1px] rounded-[2px] text-center ",
                  isDanger ? "border-red-600 text-red-600" : "border-amber-500 text-yellow-400"
                )}
              >
                <div className="text-[9px] font-bold">主電源供給システム</div>
                <div className="text-[6px]">MAINENERGY SUPPLY SYSTEM</div>
              </div>
              <div className="flex w-full justify-between px-[1px] pt-[1px]">
                <Line type="mini" color={isDanger ? "red" : "blue"} />
                <Line type="mini" color={isDanger ? "red" : "blue"} />
              </div>
              <div className="flex w-full justify-between px-[1px] pt-[20px]">
                <Line type="mini" color={isDanger ? "red" : "blue"} />
                <Line type="mini" color={isDanger ? "red" : "blue"} />
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-[5px]">
          <div className="bg-black w-[4px] h-full mt-[2px] ml-[1px] blur-[0.5px]"></div>
        </div>
        <div className="w-full h-full flex flex-col">
          <div className="h-[6px] w-full pl-[4px] pr-[12px] py-[1px] flex justify-between">
            {createArray(10).map((_, i) => (
              <Line key={i} />
            ))}
          </div>
          <div className="h-full w-full">
            <div className="w-[8px] h-full flex flex-col">
              <div className="h-full flex flex-col justify-between px-[1px] pt-[1px]">
                {createArray(10).map((_, i) => (
                  <Line key={i} type="horizontal" />
                ))}
              </div>
              <div className="h-[11px]"></div>
              <div className="h-[12px] flex">
                <div className="w-[5px]"></div>
                <div className="relative flex">
                  <div className="flex absolute -bottom-[1px] rotate-[15deg] origin-bottom-left">
                    <div className="flex flex-col">
                      <div
                        className={clsx(
                          "h-[110px] mb-[2px] bg-black blur-[0.5px] border-l border-b  z-10 w-[9px] relative",
                          isDanger ? "border-red-600" : "border-yellow-200"
                        )}
                      >
                        <Line className="absolute bottom-[1px] left-[1px]" color={isDanger ? "red" : "blue"} />
                      </div>
                      <div
                        className={clsx(
                          "h-[36px] w-[10px] bg-black -ml-[1px] blur-[0.5px] border-l border-t  relative",
                          isDanger ? "border-red-600" : "border-yellow-200"
                        )}
                      >
                        <Line className="absolute top-[1px] left-[1px]" color={isDanger ? "red" : "blue"} />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div
                        className={clsx(
                          "h-[110px] mb-[2px] bg-black blur-[0.5px] -ml-[1px] border-b  relative",
                          isDanger ? "border-red-600" : "border-yellow-200"
                        )}
                      >
                        <Line className="absolute bottom-[1px] left-[2px]" color={isDanger ? "red" : "blue"} />
                        <div className="absolute bottom-0 right-[1px] h-[109px] w-[11px] bg-black  blur-[0.5px] rotate-[6deg] origin-bottom-right"></div>
                      </div>
                      <div className="flex flex-col h-[37px] w-[5px] -ml-[1px] ">
                        <div
                          className={clsx(
                            "h-[30px] w-[4px] bg-black blur-[0.5px] border-t  relative",
                            isDanger ? "border-red-600" : "border-yellow-200"
                          )}
                          style={{
                            background:
                              "linear-gradient(to bottom right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 100%)",
                          }}
                        >
                          <Line className="absolute top-[1px] left-[1px]" color={isDanger ? "red" : "blue"} />
                          <div className="absolute bottom-0 left-[1px] h-[69px] w-[2px]  rotate-[6deg] origin-bottom-left">
                            <div className={clsx("h-[37px] w-[2px] border-l  mb-[2px]", isDanger ? "border-red-600" : "border-yellow-200")}></div>
                            <div className={clsx("h-[29px] w-[2px] border-l ", isDanger ? "border-red-600" : "border-yellow-200")}></div>
                          </div>
                          <div
                            className={clsx(
                              "absolute bottom-0 h-[51px] w-[2px] bg-black rotate-[22deg] origin-bottom-right  border-l ",
                              isDanger ? "border-red-600" : "border-yellow-200"
                            )}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={clsx(
                  "absolute top-[132px] left-[46px] w-[220px] h-[23px] flex border-t ",
                  isDanger ? "border-red-600" : "border-yellow-200"
                )}
              >
                <div className="w-[13px] h-full">
                  <div className="flex justify-end pt-[1px] w-full space-x-[1px]">
                    <Line type="double" />
                    <Line type="double" color={isDanger ? "red" : "yellow"} />
                  </div>
                </div>
                <div className="w-[35px] h-full flex flex-col">
                  <TimerButton type="stop" timerMode={timerMode} onClick={onClick} isDanger={isDanger} />
                  <div className="h-[5px] w-full flex justify-between px-[1px]">
                    <Line />
                    <Line />
                  </div>
                </div>
                <div className="w-[6px] h-full pt-[1px] pl-[0.5px]">
                  <Line type="double" color={isDanger ? "red" : "yellow"} />
                </div>
                <div className="w-[35px] h-full flex flex-col">
                  <TimerButton type="start" timerMode={timerMode} onClick={onClick} isDanger={isDanger} />
                  <div className="h-[5px] w-full flex justify-between px-[1px]">
                    <Line />
                    <Line />
                  </div>
                </div>
                <div className="w-[6px] h-full pt-[1px] pl-[0.5px]">
                  <Line type="double" color={isDanger ? "red" : "yellow"} />
                </div>
                <div className="w-[35px] h-full flex flex-col">
                  <TimerButton type="reset" timerMode={timerMode} onClick={onClick} isDanger={isDanger} />
                  <div className="h-[5px] w-full flex justify-between px-[1px]">
                    <Line />
                    <Line />
                  </div>
                </div>
                <div className="w-[6px] h-full pt-[1px] pl-[0.5px]">
                  <Line type="double" color={isDanger ? "red" : "yellow"} />
                </div>
                <div className="w-[35px] h-full flex flex-col">
                  <TimerButton type="racing" timerMode={timerMode} onClick={onClick} isDanger={isDanger} />
                  <div className="h-[5px] w-full flex justify-between px-[1px]">
                    <Line />
                    <Line />
                  </div>
                </div>
                <div className="w-[67px] h-full flex flex-col pt-[1px] pr-[1px] justify-between">
                  <div className="flex space-x-[39px]">
                    <Line type="double" color={isDanger ? "red" : "yellow"} />
                    <Line type="double" />
                  </div>
                  <div className="flex justify-end w-full">
                    <Line type="double" />
                  </div>
                </div>
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
            <div className="flex w-[310px] items-end">
              <div
                className={clsx(
                  "w-[4px] -mb-[1px] h-[6px] bg-black blur-[0.5px] border-t  relative",
                  isDanger ? "border-red-600" : "border-yellow-200"
                )}
              >
                <Line className="absolute top-[1px] left-[1px]" color={isDanger ? "red" : "blue"} type="mini" />
              </div>
              <div
                className={clsx(
                  "w-[213px] -mb-[1px] -ml-[1px] h-[6px] bg-black blur-[0.5px] border-t  border-b flex",
                  isDanger ? "border-red-600" : "border-yellow-200"
                )}
              >
                <Line className="absolute top-[1px] left-[4px]" color={isDanger ? "red" : "blue"} type="mini" />
                <div className="flex pt-[1px] w-full pl-[34px] pr-[10px] justify-between">
                  {createArray(3).map((_, i) => (
                    <Line key={i} color={isDanger ? "red" : "blue"} type="double-space-mini" />
                  ))}
                  <Line className="" color={isDanger ? "red" : "blue"} type="mini" />
                </div>
              </div>
              <div
                className={clsx(
                  "w-[110px] h-[23px]  -mb-[1px] -ml-[1px] bg-black blur-[0.5px] border-t border-b border-r flex flex-col",
                  isDanger ? "border-red-600" : "border-yellow-200 "
                )}
              >
                <div className={clsx("border-l   h-[19px] w-[110px]", isDanger ? "border-red-600" : "border-yellow-200 ")}>
                  <Line className="pt-[1px] pl-[30px]" color="orange" type="double" />
                </div>
                <div className="h-[4px] w-[110px] flex">
                  <Line className="pt-[1px] pl-[3px]" color={isDanger ? "red" : "blue"} type="mini" />
                  <Line className="pt-[1px] pl-[25px]" color={isDanger ? "red" : "blue"} type="mini" />
                </div>
              </div>
            </div>
            <div
              className={clsx("w-[4px] -mb-[1px] h-[3px] bg-black blur-[0.5px] border-r ", isDanger ? "border-red-600" : "border-yellow-200 ")}
            ></div>
            <div className="w-[4px] -mb-[1px] h-[39px] bg-black blur-[0.5px]">
              <Line className="pl-[1px] pt-[2px]" color={isDanger ? "red" : "blue"} type="mini" />
            </div>
          </div>
          <div
            className={clsx(
              "h-[39px] w-[307px] -ml-[2px] -mb-[1px] bg-black blur-[0.5px] border-r border-t  flex",
              isDanger ? "border-red-600" : "border-yellow-200 "
            )}
          >
            <Line className="pl-[4px] pt-[1px]" color={isDanger ? "red" : "blue"} type="mini" />
            <div className="flex ml-[23px] pl-[10px] justify-between pr-[100px] w-full">
              {createArray(4).map((_, i) => (
                <Line key={i} className="pt-[1px]" color={isDanger ? "red" : "blue"} type="mini" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
