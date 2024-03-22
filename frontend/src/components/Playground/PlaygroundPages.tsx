"use client";
import { useLang } from "@hooks/useLang";
import React from "react";
import { PlaygroundCard } from "./PlaygroundCard";

const pages = [
  {
    id: "marvel",
    image: "/playground/thum-qr-reader.png",
    title: "Marvel Characters",
    content: "マーベルのキャラクター図鑑",
    publishedAt: "2024-03-22T02:00:34.925Z",
    revisedAt: "2024-03-22T02:00:34.925Z",
  },
  {
    id: "qr-reader",
    image: "/playground/thum-qr-reader.png",
    title: "QR Reader",
    content: "QRコードリーダー",
    publishedAt: "2024-03-21T02:00:34.925Z",
    revisedAt: "2024-03-21T02:00:34.925Z",
  },
  //   {
  //     id: "ai",
  //     image: "/playground/thum-ai.png",
  //     title: "AI",
  //     content: "AIのチャット",
  //     publishedAt: "2024-03-20T02:00:34.925Z",
  //     revisedAt: "2024-03-20T02:00:34.925Z",
  //   },
  {
    id: "evangelion-mark01",
    image: "/playground/thum-eva-mark01.png",
    title: "エヴァンゲリオン初号機",
    content: "tailwindcssでエヴァンゲリオン初号機を作ってみた",
    publishedAt: "2024-03-25T02:00:34.925Z",
    revisedAt: "2024-03-25T02:00:34.925Z",
  },
  {
    id: "subscription",
    image: "/playground/thum-subscription.png",
    title: "サブスク！",
    content: "サブスクリプションの管理アプリ",
    publishedAt: "2024-03-17T02:00:34.925Z",
    revisedAt: "2024-03-17T02:00:34.925Z",
  },
  {
    id: "face-detect",
    image: "/playground/thum-face-detect.png",
    title: "顔認証",
    content: "カメラで顔認証",
    publishedAt: "2024-02-05T02:00:34.925Z",
    revisedAt: "2024-02-05T02:00:34.925Z",
  },
  {
    id: "alert",
    image: "/playground/thum-alert.png",
    title: "alert",
    content: "evaのアラートっぽいcss",
    publishedAt: "2024-01-30T02:00:34.925Z",
    revisedAt: "2024-01-30T02:00:34.925Z",
  },
  {
    id: "piano",
    image: "/playground/thum-piano.png",
    title: "piano",
    content: "pianoのサンプル",
    publishedAt: "2024-01-27T02:00:34.925Z",
    revisedAt: "2024-01-27T02:00:34.925Z",
  },
  {
    id: "framer-motion",
    image: "/playground/thum-framer-motion.png",
    title: "Framer Motion",
    content: "Framer Motionのサンプル",
    publishedAt: "2024-01-06T02:00:34.925Z",
    revisedAt: "2024-01-07T05:00:34.925Z",
  },
  {
    id: "threejs",
    image: "/playground/thum-three-js.png",
    title: "Three.js",
    content: "Three.jsのサンプル",
    publishedAt: "2023-12-31T11:59:34.925Z",
    revisedAt: "2023-12-31T11:59:34.925Z",
  },
  {
    id: "our-goals",
    image: "/playground/thum-our-goals.png",
    title: "Our Goals",
    content: "目標作成ツール",
    publishedAt: "2023-12-30T11:59:34.925Z",
    revisedAt: "2023-12-30T11:59:34.925Z",
  },
  {
    id: "eva-timer",
    image: "/playground/thum-eva-timer.png",
    title: "EVA-Timer",
    content: "エヴァっぽいタイマー",
    publishedAt: "2023-09-15T11:59:34.925Z",
    revisedAt: "2023-09-15T11:59:34.925Z",
  },
];

const pagesEn = [
  {
    id: "marvel",
    image: "/playground/thum-qr-reader.png",
    title: "Marvel Characters",
    content: "Marvel Characters",
    publishedAt: "2024-03-22T02:00:34.925Z",
    revisedAt: "2024-03-22T02:00:34.925Z",
  },
  {
    id: "qr-reader",
    image: "/playground/thum-qr-reader.png",
    title: "QR Reader",
    content: "QR code reader",
    publishedAt: "2024-03-21T02:00:34.925Z",
    revisedAt: "2024-03-21T02:00:34.925Z",
  },
  //   {
  //     id: "ai",
  //     image: "/playground/thum-ai.png",
  //     title: "AI",
  //     content: "AI Chat",
  //     publishedAt: "2024-03-20T02:00:34.925Z",
  //     revisedAt: "2024-03-20T02:00:34.925Z",
  //   },
  {
    id: "evangelion-mark01",
    image: "/playground/thum-eva-mark01.png",
    title: "evangelion mark01",
    content: "I made Evangelion Mark01 with tailwindcss.",
    publishedAt: "2024-03-25T02:00:34.925Z",
    revisedAt: "2024-03-25T02:00:34.925Z",
  },
  {
    id: "subscription",
    image: "/playground/thum-subscription.png",
    title: "subscribe!",
    content: "Subscription Management Apps",
    publishedAt: "2024-03-17T02:00:34.925Z",
    revisedAt: "2024-03-17T02:00:34.925Z",
  },
  {
    id: "face-detect",
    image: "/playground/thum-face-detect.png",
    title: "Face Recognition",
    content: "Facial recognition by camera",
    publishedAt: "2024-02-05T02:00:34.925Z",
    revisedAt: "2024-02-05T02:00:34.925Z",
  },
  {
    id: "alert",
    image: "/playground/thum-alert.png",
    title: "alert",
    content: "eva alert-like css",
    publishedAt: "2024-01-30T02:00:34.925Z",
    revisedAt: "2024-01-30T02:00:34.925Z",
  },
  {
    id: "piano",
    image: "/playground/thum-piano.png",
    title: "piano",
    content: "Sample of PIANO",
    publishedAt: "2024-01-27T02:00:34.925Z",
    revisedAt: "2024-01-27T02:00:34.925Z",
  },
  {
    id: "framer-motion",
    image: "/playground/thum-framer-motion.png",
    title: "Framer Motion",
    content: "Sample of Framer Motion",
    publishedAt: "2024-01-06T02:00:34.925Z",
    revisedAt: "2024-01-07T05:00:34.925Z",
  },
  {
    id: "threejs",
    image: "/playground/thum-three-js.png",
    title: "Three.js",
    content: "Three.js sample",
    publishedAt: "2023-12-31T11:59:34.925Z",
    revisedAt: "2023-12-31T11:59:34.925Z",
  },
  {
    id: "our-goals",
    image: "/playground/thum-our-goals.png",
    title: "Our Goals",
    content: "Goal Creation Tools",
    publishedAt: "2023-12-30T11:59:34.925Z",
    revisedAt: "2023-12-30T11:59:34.925Z",
  },
  {
    id: "eva-timer",
    image: "/playground/thum-eva-timer.png",
    title: "EVA-Timer",
    content: "Eva-like timer",
    publishedAt: "2023-09-15T11:59:34.925Z",
    revisedAt: "2023-09-15T11:59:34.925Z",
  },
];
const PlaygroundPages = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isJapanese } = useLang();
  const contents = isJapanese ? pages : pagesEn;
  return (
    <div className="">
      <div className="flex flex-col space-y-5 px-3">
        {contents.map((page) => (
          <PlaygroundCard {...page} key={page.id} />
        ))}
      </div>
    </div>
  );
};

export default PlaygroundPages;
