import React from "react";

export const EvaMark01 = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute top-[110px] rotate-[50deg]">
          <div className="flex">
            <div
              className="w-0 h-0 
                border-l-[25px] border-l-transparent 
                border-t-[40px] border-t-purple-500 
                border-r-[0px] border-r-transparent"
            ></div>
            <div className="h-[40px] w-[300px] bg-purple-500 ">
              <div className="flex justify-between">
                <div className="h-[40px] w-[10px]  bg-purple-500"></div>
                <div className="h-[40px] w-[10px]  bg-purple-500"></div>
                <div className="h-[40px] w-[10px]  bg-purple-500"></div>
                <div className="h-[40px] w-[10px]  bg-purple-500"></div>
                <div className="h-[40px] w-[10px]  bg-purple-500"></div>
                <div className="h-[40px] w-[10px]  bg-green-400"></div>
                <div className="h-[40px] w-[10px]  bg-green-400"></div>
                <div className="h-[40px] w-[10px]  bg-purple-500"></div>
              </div>
            </div>
            <div className="rotate-[30deg] w-[40px] h-[140px] bg-purple-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
