"use client";
import { useLang } from "../../hooks/useLang";
import React from "react";
import { PlaygroundCard } from "./PlaygroundCard";
import { WideAdvertisements } from "../Advertisement/WideAdvertisements";
import { isPlaygroundType } from "../../libs/client";
import { t } from "i18next";
import { content } from "html2canvas/dist/types/css/property-descriptors/content";

const pages = [
  {
    id: "evangelion-mark01",
    image: "/playground/thum-eva-mark01.png",
    title: "エヴァンゲリオン初号機",
    titleEn: "evangelion mark01",
    content: "tailwindcssでエヴァンゲリオン初号機を作ってみた",
    contentEn: "I made Evangelion Mark01 with tailwindcss.",
    publishedAt: "2024-03-25T02:00:34.925Z",
    revisedAt: "2024-04-01T02:00:34.925Z",
  },
  {
    id: "qr-reader",
    image: "/playground/thum-qr-reader.png",
    title: "QR Reader",
    titleEn: "QR Reader",
    content: "QRコードリーダー",
    contentEn: "QR code reader",
    publishedAt: "2024-03-21T02:00:34.925Z",
    revisedAt: "2024-03-21T02:00:34.925Z",
  },
  {
    id: "subscription",
    image: "/playground/thum-subscription.png",
    title: "サブスク！",
    titleEn: "subscribe!",
    content: "サブスクリプションの管理アプリ",
    contentEn: "Subscription Management Apps",
    publishedAt: "2024-03-17T02:00:34.925Z",
    revisedAt: "2024-03-17T02:00:34.925Z",
  },
  {
    id: "face-detect",
    image: "/playground/thum-face-detect.png",
    title: "顔認証",
    titleEn: "Face Recognition",
    content: "カメラで顔認証",
    contentEn: "Facial recognition by camera",
    publishedAt: "2024-02-05T02:00:34.925Z",
    revisedAt: "2024-02-05T02:00:34.925Z",
  },
  {
    id: "alert",
    image: "/playground/thum-alert.png",
    title: "alert",
    titleEn: "alert",
    content: "evaのアラートっぽいcss",
    contentEn: "eva alert-like css",
    publishedAt: "2024-01-30T02:00:34.925Z",
    revisedAt: "2024-01-30T02:00:34.925Z",
  },
  {
    id: "piano",
    image: "/playground/thum-piano.png",
    title: "piano",
    titleEn: "piano",
    content: "pianoのサンプル",
    contentEn: "Sample of PIANO",
    publishedAt: "2024-01-27T02:00:34.925Z",
    revisedAt: "2024-01-27T02:00:34.925Z",
  },
  {
    id: "framer-motion",
    image: "/playground/thum-framer-motion.png",
    title: "Framer Motion",
    titleEn: "Framer Motion",
    content: "Framer Motionのサンプル",
    contentEn: "Sample of Framer Motion",
    publishedAt: "2024-01-06T02:00:34.925Z",
    revisedAt: "2024-01-07T05:00:34.925Z",
  },
  {
    id: "threejs",
    image: "/playground/thum-three-js.png",
    title: "Three.js",
    titleEn: "Three.js",
    content: "Three.jsのサンプル",
    contentEn: "Three.js sample",
    publishedAt: "2023-12-31T11:59:34.925Z",
    revisedAt: "2023-12-31T11:59:34.925Z",
  },
  {
    id: "our-goals",
    image: "/playground/thum-our-goals.png",
    title: "Our Goals",
    titleEn: "Our Goals",
    content: "目標作成ツール",
    contentEn: "Goal Creation Tools",
    publishedAt: "2023-12-30T11:59:34.925Z",
    revisedAt: "2023-12-30T11:59:34.925Z",
  },
  {
    id: "eva-timer",
    image: "/playground/thum-eva-timer.png",
    title: "EVA-Timer",
    titleEn: "EVA-Timer",
    content: "エヴァっぽいタイマー",
    contentEn: "Eva-like timer",
    publishedAt: "2023-09-15T11:59:34.925Z",
    revisedAt: "2023-09-15T11:59:34.925Z",
  },
];

const PlaygroundPages = () => {
  const groupedItems = [];
  for (let i = 0; i < pages.length; i += 3) {
    groupedItems.push(pages.slice(i, i + 3));
  }
  const listWithAdvertisements = groupedItems.flatMap((group, index) => {
    const items = [...group];
    if (index < groupedItems.length - 1) {
      items.push(<WideAdvertisements key={`advertisement-${index}`} />);
    }
    return items;
  });
  return (
    <div className="">
      <div className="flex flex-col space-y-5 px-3">
        {listWithAdvertisements?.map((playground: any) => {
          if (isPlaygroundType(playground)) {
            return <PlaygroundCard key={playground.id} {...playground} />;
          } else {
            return <div key={playground.id}>{playground}</div>;
          }
        })}
      </div>
    </div>
  );
};

export default PlaygroundPages;
