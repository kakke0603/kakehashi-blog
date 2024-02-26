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
                <div className="h-[40px] w-[20px]  bg-green-400"></div>
                <div className="h-[40px] w-[10px]  bg-purple-500"></div>
                <div className="h-[40px] w-[10px]  bg-purple-500"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col absolute top-[150px] left-[295px]">
          <div className="rotate-[80deg] w-[50px] h-[150px] bg-purple-500"></div>
        </div>
        <div className="flex flex-col absolute top-[190px] left-[345px]">
          <div className="rotate-[45deg] w-[100px] h-[50px] bg-purple-500"></div>
        </div>
        <div className="absolute rotate-[270deg] top-[135px] left-[405px]">
          <div className="rotate-[0deg] w-[50px] h-[80px] bg-purple-500"></div>
          <div
            className="w-0 h-0 
                border-l-[50px] border-l-transparent 
                border-t-[20px] border-t-purple-500 
                border-r-[0px] border-r-transparent"
          ></div>
        </div>
        <div className="absolute rotate-[115deg] top-[228px] left-[260px] w-[50px] h-[50px] bg-purple-500"></div>
        <div className="absolute rotate-[115deg] top-[258px] left-[291px] w-[50px] h-[20px] bg-purple-800"></div>
        <div className="absolute rotate-[-15deg] top-[233px] left-[320px] w-[60px] h-[20px] bg-purple-800"></div>
        <div
          className="w-0 h-0 absolute rotate-[45deg] top-[260px] left-[320px]
                border-l-[10px] border-l-transparent 
                border-t-[30px] border-t-yellow-500 
                border-r-[10px] border-r-transparent"
        ></div>
        <div
          className="w-0 h-0 absolute rotate-[225deg] top-[240px] left-[340px]
                border-l-[10px] border-l-transparent 
                border-t-[30px] border-t-yellow-500 
                border-r-[10px] border-r-transparent"
        ></div>
      </div>
    </div>
  );
};
