import React from "react";

export const EvaMark01 = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute top-[100px] rotate-[50deg]">
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
          </div>
        </div>
        <div className="flex flex-col absolute top-[150px] left-[295px]">
          <div className="rotate-[80deg] w-[50px] h-[150px] bg-purple-500"></div>
        </div>
        <div className="flex flex-col absolute top-[130px] left-[350px]">
          <div className="rotate-[45deg] w-[50px] h-[50px] bg-purple-500"></div>
        </div>
        <div className="rotate-[0deg] w-[50px] h-[50px] bg-green-500"></div>
      </div>
    </div>
  );
};
