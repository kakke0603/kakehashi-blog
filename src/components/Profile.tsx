"use client";
import { User } from "@nextui-org/react";
import React from "react";
import GoogleAd from "./GoogleAdsense";

export default function Profile() {
  return (
    <div>
      <div className="mt-5 flex justify-center">
        <User
          name="かっけ"
          description={
            <div>
              ふるすたっくえんじにあ(仮)
              <br />
              <a href="https://twitter.com/kkhs0603" target="_blank" rel="noopener noreferrer">
                @kkhs0603
              </a>
            </div>
          }
          avatarProps={{ name: "K" }}
        />
      </div>
      <GoogleAd slot={"4735525151"} />
      <pre className="mt-10">
        <code>
          {`\n  
  { \n
    Name: "かっけ", \n
    Age: 31, \n
    Like: { \n
      Music: ["back number", "Perfume", "saucy dog", "Creepy Nuts", "新しい学校のリーダーズ"], \n
      Game: ["モンスターハンター"], \n
      Anime: ["新世紀エヴァンゲリオン", "僕のヒーローアカデミア", "呪術廻戦"], \n
      Movie: ["Marvel", "Star Wars"], \n
      Technology: ["React", "TypeScript", "javaScript", "AWS", "Laravel", "PHP"], \n
      YouTube: ["`}
          <a href="https://www.youtube.com/@TokaiOnAir" target="_blank" rel="noopener noreferrer">
            東海オンエア
          </a>
          (
          {
            <a href="https://www.youtube.com/@mushimeganeradio" target="_blank" rel="noopener noreferrer">
              虫眼鏡さん
            </a>
          }
          推し)", "
          {
            <a href="https://www.youtube.com/@tokumei_radio" target="_blank" rel="noopener noreferrer">
              匿名ラジオ
            </a>
          }
          ", "
          {
            <a href="https://www.youtube.com/@itabasihausu" target="_blank" rel="noopener noreferrer">
              板橋ハウス
            </a>
          }
          ", "
          {
            <a href="https://www.youtube.com/@nekoten_zzz" target="_blank" rel="noopener noreferrer">
              ねこてん
            </a>
          }
          ", "
          {
            <a href="https://www.youtube.com/@omocorochannel" target="_blank" rel="noopener noreferrer">
              オモコロチャンネル
            </a>
          }
          {`"], \n
      Food: ["麺類全般", "程よく辛いもの", "明太子"], \n
      Other: ["京都巡り", "カフェ巡り", "旅行"] \n
    } \n
  } \n
  
  `}
        </code>
      </pre>
    </div>
  );
}
