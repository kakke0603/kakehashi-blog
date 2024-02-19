export const runtime = "edge";
import React from "react";
import { PlaygroundCard } from "./PlaygroundCard";
import ThumOurGoals from "./thum-our-goals.png";
import ThumThreeJs from "./thum-three-js.png";
import ThumFramerMotion from "./thum-framer-motion.png";
import ThumPiano from "./thum-piano.png";
import ThumAlert from "./thum-alert.png";
import ThumFaceDetect from "./thum-face-detect.png";
import ThumEva from "./thum-eva-timer.png";
import { Advertisements } from "@/components/Advertisement/Advertisements";

const pages = [
  {
    id: "evangelion-mark01",
    image: ThumFaceDetect,
    title: "エヴァンゲリオン初号機",
    content: "tailwindcssでエヴァンゲリオン初号機を作ってみた",
    publishedAt: "2024-02-21T02:00:34.925Z",
    revisedAt: "2024-02-21T02:00:34.925Z",
  },
  {
    id: "face-detect",
    image: ThumFaceDetect,
    title: "顔認証",
    content: "カメラで顔認証",
    publishedAt: "2024-02-05T02:00:34.925Z",
    revisedAt: "2024-02-05T02:00:34.925Z",
  },
  {
    id: "alert",
    image: ThumAlert,
    title: "alert",
    content: "evaのアラートっぽいcss",
    publishedAt: "2024-01-30T02:00:34.925Z",
    revisedAt: "2024-01-30T02:00:34.925Z",
  },
  {
    id: "piano",
    image: ThumPiano,
    title: "piano",
    content: "pianoのサンプル",
    publishedAt: "2024-01-27T02:00:34.925Z",
    revisedAt: "2024-01-27T02:00:34.925Z",
  },
  {
    id: "framer-motion",
    image: ThumFramerMotion,
    title: "Framer Motion",
    content: "Framer Motionのサンプル",
    publishedAt: "2024-01-06T02:00:34.925Z",
    revisedAt: "2024-01-07T05:00:34.925Z",
  },
  {
    id: "threejs",
    image: ThumThreeJs,
    title: "Three.js",
    content: "Three.jsのサンプル",
    publishedAt: "2023-12-31T11:59:34.925Z",
    revisedAt: "2023-12-31T11:59:34.925Z",
  },
  {
    id: "our-goals",
    image: ThumOurGoals,
    title: "Our Goals",
    content: "目標作成ツール",
    publishedAt: "2023-12-30T11:59:34.925Z",
    revisedAt: "2023-12-30T11:59:34.925Z",
  },
  {
    id: "eva-timer",
    image: ThumEva,
    title: "EVA-Timer",
    content: "エヴァっぽいタイマー",
    publishedAt: "2023-09-15T11:59:34.925Z",
    revisedAt: "2023-09-15T11:59:34.925Z",
  },
];
export default function page() {
  return (
    <div className="">
      <div className="flex flex-col space-y-5">
        {pages.map((page) => (
          <PlaygroundCard {...page} key={page.id} />
        ))}
      </div>
      <Advertisements />
    </div>
  );
}
