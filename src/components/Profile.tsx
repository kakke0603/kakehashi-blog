"use client";
import { Link, User } from "@nextui-org/react";
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
              <Link href="https://twitter.com/kkhs0603" size="sm" isExternal>
                @kkhs0603
              </Link>
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
      YouTube: ["東海オンエア(虫眼鏡さん推し)", "匿名ラジオ", "板橋ハウス", "ねこてん", "オモコロチャンネル"], \n
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
