"use client";
import React from "react";
import { RecoilRoot, atom, useRecoilState } from "recoil";

export const Piano = () => {
  const audioHooks = useAudio();

  return (
    <div>
      <div className="flex relative">
        <button onClick={() => audioHooks.audio.play()} className="w-10 h-20 bg-white border"></button>
        <button className="w-10 h-20 bg-white border"></button>
        <button className="w-10 h-20 bg-white border"></button>
        <button className="w-10 h-20 bg-white border"></button>
        <button className="w-10 h-20 bg-white border"></button>
        <button className="w-10 h-20 bg-white border"></button>
        <button className="w-10 h-20 bg-white border"></button>
        <button className="w-10 h-20 bg-white border"></button>
        <button className="absolute left-6 w-7 h-10 bg-black z-10"></button>
        <button className="absolute left-16 w-7 h-10 bg-black z-10"></button>
        <button className="absolute left-36 w-7 h-10 bg-black z-10"></button>
        <button className="absolute left-48 w-7 h-10 bg-black z-10"></button>
        <button className="absolute left-60 w-7 h-10 bg-black z-10"></button>
      </div>
    </div>
  );
};

const audioState = atom<HTMLAudioElement>({
  key: "audio-state",
  default: typeof window !== "undefined" ? new Audio("./piano.mp3") : undefined,
});

export const useAudio = () => {
  const [audio, setAudio] = useRecoilState(audioState);
  return { audio };
};
