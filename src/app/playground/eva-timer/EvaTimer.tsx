"use client"
import clsx from "clsx"
import React from "react"
import { useState } from "react"
import { Line } from "./components/Line"
import { TimerButton } from "./components/TimerButton"
import { TimerNumber } from "./components/TimerNumber"

export type TimerMode = "stop" | "slow" | "normal" | "racing"
export const EvaTimer = () => {
  const createArray = (length: number) => {
    return new Array(length).fill(0)
  }
  const [timerMode, setTimerMode] = useState<TimerMode>("stop")
  const onClickTimerButton = (type: TimerMode) => {
    setTimerMode(type)
  }
  return (
    <div>
      <div className="bg-gradient-to-r from-orange-300 via-yellow-200 to-green-400 h-[200px] w-[360px] flex relative">
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
              <div className="flex text-yellow-400">
                <div className="w-[41px] -ml-[0.5px] -mt-[3.5px] h-[18px] bg-black blur-[0.5px] text-[10px] border-l border-amber-700">活動限界</div>
                <div className="w-[142px] -ml-[0.5px] mt-[2.5px] pl-[2px] h-[12px] bg-black blur-[0.5px]  text-[7px] ">ACTIVE TIME REMAIN</div>
              </div>
              <div className="flex -mt-[1px]">
                <div className="h-[83px] w-[15px] bg-black blur-[0.5px] z-10 mr-[1px]">
                  <div className="h-[14px] text-[6px] pl-[1px] text-yellow-400 border-l border-amber-700">あと</div>
                  <div className="h-full w-full flex flex-col space-y-[60px] border-t border-r border-amber-700">
                    <div className="flex space-x-[3px]">
                      <Line color="blue" />
                      <Line color="blue" />
                    </div>
                    <div className="flex space-x-[3px]">
                      <Line color="blue" />
                      <Line color="blue" />
                    </div>
                  </div>
                </div>
                <div className="h-[83px] -ml-[1.5px] w-[140px] bg-black blur-[0.5px] z-10 text-yellow-400 ">
                  <div className="h-[10px]"></div>
                  <div className="pl-[4px] flex space-x-[5px]">
                    <TimerNumber num={1} />
                    <TimerNumber num={2} />
                    <div>:</div>
                    <TimerNumber num={3} />
                    <TimerNumber num={4} />
                  </div>
                </div>
                <div className="h-[83px] -ml-[1px] w-[69px] bg-black blur-[0.5px] text-yellow-400 ">
                  <div className="h-[30px]"></div>
                  <div className="z-10 text-[32px]">:32</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[37.5px] right-[40px] flex items-end">
            <div className="w-[190px] h-[14px] bg-black blur-[0.5px]"></div>
            <div className="w-[90px] h-[94px] bg-black blur-[0.5px] flex flex-col">
              <div className="flex w-full justify-between px-[1px] pt-[1px]">
                <Line type="mini" color="blue" />
                <Line type="mini" color="blue" />
              </div>
              <div className="border border-amber-500 flex mx-[1px] rounded-[2px] space-x-[4px] text-center">
                <div className="w-[59px] p-[1px]">
                  <div className="text-yellow-400 text-[10px] font-bold tracking-widest">内部</div>
                  <div className="text-yellow-400 text-[10px] ">INTERNAL</div>
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
                <Line type="mini" color="blue" />
                <Line type="mini" color="blue" />
              </div>
              <div className="border border-amber-500 mx-[1px] rounded-[2px] text-center text-yellow-400">
                <div className="text-[9px] font-bold">主電源供給システム</div>
                <div className="text-[6px]">MAINENERGY SUPPLY SYSTEM</div>
              </div>
              <div className="flex w-full justify-between px-[1px] pt-[1px]">
                <Line type="mini" color="blue" />
                <Line type="mini" color="blue" />
              </div>
              <div className="flex w-full justify-between px-[1px] pt-[20px]">
                <Line type="mini" color="blue" />
                <Line type="mini" color="blue" />
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
                      <div className="h-[110px] mb-[2px] bg-black blur-[0.5px] border-l border-b border-yellow-200 z-10 w-[9px] relative">
                        <Line className="absolute bottom-[1px] left-[1px]" color="blue" />
                      </div>
                      <div className="h-[36px] w-[10px] bg-black -ml-[1px] blur-[0.5px] border-l border-t border-yellow-200 relative">
                        <Line className="absolute top-[1px] left-[1px]" color="blue" />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="h-[110px] mb-[2px] bg-black blur-[0.5px] -ml-[1px] border-b border-yellow-200 relative">
                        <Line className="absolute bottom-[1px] left-[2px]" color="blue" />
                        <div className="absolute bottom-0 right-[1px] h-[109px] w-[11px] bg-black  blur-[0.5px] rotate-[6deg] origin-bottom-right"></div>
                      </div>
                      <div className="flex flex-col h-[37px] w-[5px] -ml-[1px] ">
                        <div
                          className="h-[30px] w-[4px] bg-black blur-[0.5px] border-t border-yellow-200 relative"
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[132px] left-[46px] w-[179px] h-[23px] flex border-t border-yellow-200">
                <div className="w-[13px] h-full">
                  <div className="flex justify-end pt-[1px] w-full space-x-[1px]">
                    <Line type="double" />
                    <Line type="double" color="yellow" />
                  </div>
                </div>
                <div className="w-[35px] h-full flex flex-col">
                  <TimerButton type="stop" timerMode={timerMode} onClick={onClickTimerButton} />
                  <div className="h-[5px] w-full flex justify-between px-[1px]">
                    <Line />
                    <Line />
                  </div>
                </div>
                <div className="w-[6px] h-full pt-[1px] pl-[0.5px]">
                  <Line type="double" color="yellow" />
                </div>
                <div className="w-[35px] h-full flex flex-col">
                  <TimerButton type="slow" timerMode={timerMode} onClick={onClickTimerButton} />
                  <div className="h-[5px] w-full flex justify-between px-[1px]">
                    <Line />
                    <Line />
                  </div>
                </div>
                <div className="w-[6px] h-full pt-[1px] pl-[0.5px]">
                  <Line type="double" color="yellow" />
                </div>
                <div className="w-[35px] h-full flex flex-col">
                  <TimerButton type="normal" timerMode={timerMode} onClick={onClickTimerButton} />
                  <div className="h-[5px] w-full flex justify-between px-[1px]">
                    <Line />
                    <Line />
                  </div>
                </div>
                <div className="w-[6px] h-full pt-[1px] pl-[0.5px]">
                  <Line type="double" color="yellow" />
                </div>
                <div className="w-[35px] h-full flex flex-col">
                  <TimerButton type="racing" timerMode={timerMode} onClick={onClickTimerButton} />
                  <div className="h-[5px] w-full flex justify-between px-[1px]">
                    <Line />
                    <Line />
                  </div>
                </div>
                <div className="w-[12px] h-full flex flex-col pt-[1px] pr-[1px] justify-between">
                  <div className="flex space-x-[1px]">
                    <Line type="double" color="yellow" />
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
  )
}
