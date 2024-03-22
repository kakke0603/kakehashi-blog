"use client";
import React from "react";
import useSound from "use-sound";

export const Piano = () => {
  const [play, { stop, pause }] = useSound("https://maou.audio/se_inst_piano1_1do/");

  return (
    <div>
      <div className="flex relative">
        <button onClick={() => play()} className="w-10 h-20 bg-white border"></button>
        <button onClick={() => play()} className="w-10 h-20 bg-white border"></button>
        <button onClick={() => play()} className="w-10 h-20 bg-white border"></button>
        <button onClick={() => play()} className="w-10 h-20 bg-white border"></button>
        <button onClick={() => play()} className="w-10 h-20 bg-white border"></button>
        <button onClick={() => play()} className="w-10 h-20 bg-white border"></button>
        <button onClick={() => play()} className="w-10 h-20 bg-white border"></button>
        <button onClick={() => play()} className="w-10 h-20 bg-white border"></button>
        <button onClick={() => play()} className="absolute left-6 w-7 h-10 bg-black z-10"></button>
        <button onClick={() => play()} className="absolute left-16 w-7 h-10 bg-black z-10"></button>
        <button onClick={() => play()} className="absolute left-36 w-7 h-10 bg-black z-10"></button>
        <button onClick={() => play()} className="absolute left-48 w-7 h-10 bg-black z-10"></button>
        <button onClick={() => play()} className="absolute left-60 w-7 h-10 bg-black z-10"></button>
      </div>
    </div>
  );
};
