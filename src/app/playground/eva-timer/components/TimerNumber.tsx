import React from "react"

type Props = {
  num: number
  size?: "default" | "mini"
}
export const TimerNumber: React.FC<Props> = ({ num, size = "default" }) => {
  return (
    <div className="relative ml-[2px]">
      <div
        className="w-[25px] h-[67px] bg-amber-400 -skew-x-[4deg]"
        style={{
          borderTopLeftRadius: "4px 8px",
          borderTopRightRadius: "4px 8px",
          borderBottomLeftRadius: "4px 8px",
          borderBottomRightRadius: "4px 8px",
        }}
      ></div>
      {/* 上部 */}
      <div className="w-[11px] h-[18px] bg-black -skew-x-[4deg] absolute top-[10px] left-[8px]"></div>
      <div className="w-[11px] h-[21px] bg-black -skew-x-[4deg] absolute top-[38px] left-[6px]"></div>
      <div className="w-[1.5px] h-[11px] bg-black skew-x-[37deg] absolute top-[0px] left-[4px]"></div>
      <div className="w-[1.5px] h-[11px] bg-black -skew-x-[6deg] absolute top-[0px] left-[18.5px]"></div>
      {/* 中部 */}
      <div className="w-[1.5px] h-[11px] bg-black skew-x-[35deg] absolute top-[28px] left-[3px]"></div>
      <div className="w-[1.5px] h-[13px] bg-black -skew-x-[36deg] absolute top-[28px] left-[2px]"></div>
      <div className="w-[8px] h-[8px] bg-black -rotate-[48deg] absolute top-[30px] -left-[5px]"></div>
      <div className="w-[1.5px] h-[11px] bg-black skew-x-[35deg] absolute top-[28px] left-[21px]"></div>
      <div className="w-[1.5px] h-[13px] bg-black -skew-x-[36deg] absolute top-[27px] left-[21px]"></div>
      <div className="w-[8px] h-[11px] bg-black -rotate-[53deg] absolute top-[29px] left-[24px]"></div>
      {/* 下部 */}
      <div className="w-[6px] h-[3px] bg-black -skew-x-[78deg] absolute top-[55px] -left-[1px]"></div>
      <div className="w-[1.5px] h-[11px] bg-black skew-x-[13deg] absolute top-[58px] left-[16px]"></div>

      {/* マスク上部 */}
      {(num == 7 || num === 3 || num === 2 || num === 1) && (
        <>
          <div className="w-[6px] h-[14px] bg-black -rotate-[38deg] absolute -top-[0px] left-[0px]"></div>
          <div className="w-[8px] h-[16px] bg-black absolute rotate-[5deg] top-[11px] left-[1px]"></div>
          <div className="w-[8px] h-[10px] bg-black absolute -rotate-[55deg] top-[22px] -left-[1px]"></div>
        </>
      )}
      {(num === 4 || num === 1) && (
        <>
          <div className="w-[8px] h-[16px] bg-black -rotate-[38deg] absolute -top-[5px] left-[4px]"></div>
          <div className="w-[8px] h-[12px] bg-black absolute rotate-[6deg] -top-[1px] left-[11px]"></div>
        </>
      )}
      {(num === 6 || num === 5) && (
        <>
          <div className="w-[8px] h-[26px] bg-black rotate-[5deg] absolute top-[0px] left-[19px]"></div>
          <div className="w-[8px] h-[16px] bg-black rotate-[42deg] absolute top-[17px] left-[20px]"></div>
        </>
      )}
      {/* マスク中部 */}
      {(num === 7 || num === 1) && (
        <>
          <div className="w-[5px] h-[11px] bg-black rotate-[48deg] absolute top-[26px] left-[7px]"></div>
          <div className="w-[10px] h-[12px] bg-black absolute top-[28px] left-[7px]"></div>
          <div className="w-[11px] h-[11px] bg-black -rotate-[45deg] absolute top-[28px] left-[9px]"></div>
        </>
      )}
      {/* マスク下部 */}
      {(num === 9 || num === 7 || num === 5 || num === 4 || num === 3 || num === 1) && (
        <>
          <div className="w-[16px] h-[8px] bg-black rotate-[53deg] absolute top-[35px] -left-[6px]"></div>
          <div className="w-[15px] h-[8px] bg-black absolute top-[43px] -left-[6px]"></div>
          <div className="w-[15px] h-[8px] bg-black -rotate-[17deg] absolute top-[48px] -left-[5px]"></div>
        </>
      )}
      {(num === 7 || num === 4 || num === 1) && (
        <>
          <div className="w-[10px] h-[8px] bg-black absolute  rotate-[73deg] top-[58px] -left-[2px]"></div>
          <div className="w-[20px] h-[8px] bg-black absolute top-[59px] -left-[4px]"></div>
          <div className="w-[10px] h-[8px] bg-black absolute  rotate-[80deg] top-[60px] left-[8px]"></div>
        </>
      )}
      {num === 2 && (
        <>
          <div className="w-[8px] h-[10px] bg-black rotate-[40deg] absolute top-[35px] left-[18px]"></div>
          <div className="w-[8px] h-[20px] bg-black rotate-[4deg] absolute top-[40px] left-[16px]"></div>
          <div className="w-[8px] h-[10px] bg-black -rotate-[12deg] absolute top-[58px] left-[17px]"></div>
        </>
      )}
    </div>
  )
}
