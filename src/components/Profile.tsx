"use client";
import { User } from "@nextui-org/react";
import React from "react";
import { WideAdvertisements } from "./WideAdvertisements";
import { useLang } from "../hooks/useLang";

export default function Profile() {
  const { isJapanese } = useLang();
  return (
    <div>
      <div className="mt-5 flex justify-center">
        <User
          name={isJapanese ? "かっけ" : "Kakke"}
          description={
            <div>
              {isJapanese ? "ふるすたっくえんじにあ" : "Full stack engineer"}
              <br />
              Twitter:
              <a href="https://twitter.com/kkhs0603" target="_blank" rel="noopener noreferrer">
                @kkhs0603
              </a>
              <br />
              GitHub:
              <a href="https://github.com/kakke0603" target="_blank" rel="noopener noreferrer">
                kakke0603
              </a>
              <br />
              {isJapanese ? "くるっぷ" : "crepu"}
              <a href="https://crepu.net/user/kake" target="_blank" rel="noopener noreferrer">
                @kake
              </a>
            </div>
          }
          avatarProps={{ name: "K" }}
        />
      </div>
      <pre className="mt-10">{isJapanese ? codeJp() : codeEn()}</pre>
      <WideAdvertisements />
    </div>
  );
}

const codeJp = () => {
  return (
    <code>
      {`\n  
  { \n
    Name: "かっけ", \n
    Age: 31, \n
    Like: { \n
      Music: ["back number", "Perfume", "saucy dog", "Creepy Nuts", "新しい学校のリーダーズ", "King Gnu"], \n
      Game: ["モンスターハンター", "アーマードコア", "エルデンリング"], \n
      Anime: ["新世紀エヴァンゲリオン", "僕のヒーローアカデミア", "呪術廻戦"], \n
      Movie: ["Marvel", "Star Wars", "ラ・ラ・ランド"], \n
      Technology: ["Next.js", "React", "TypeScript", "javaScript", "AWS", "Laravel", "PHP"], \n
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
  );
};

const codeEn = () => {
  return (
    <code>
      {`\n  
  { \n
    Name: "kakke", \n
    Age: 31, \n
    Like: { \n
      Music: ["back number", "Perfume", "saucy dog", "Creepy Nuts", "ATARASHII GAKKO!", "King Gnu"], \n
      Game: ["monster hunter", "ARMORED CORE", "Elden Ling"], \n
      Anime: ["Neon Genesis Evangelion", "My Hero Academia", "Jujutsu Kaisen"], \n
      Movie: ["Marvel", "Star Wars", "La La Land"], \n
      Technology: ["Next.js", "React", "TypeScript", "javaScript", "AWS", "Laravel", "PHP"], \n
      YouTube: ["`}
      <a href="https://www.youtube.com/@TokaiOnAir" target="_blank" rel="noopener noreferrer">
        TokaiOnAir
      </a>
      ({"fan of "}
      {
        <a href="https://www.youtube.com/@mushimeganeradio" target="_blank" rel="noopener noreferrer">
          Mushimegane-san
        </a>
      }
      )", "
      {
        <a href="https://www.youtube.com/@tokumei_radio" target="_blank" rel="noopener noreferrer">
          tokumei_radio
        </a>
      }
      ", "
      {
        <a href="https://www.youtube.com/@itabasihausu" target="_blank" rel="noopener noreferrer">
          itabasihausu
        </a>
      }
      ", "
      {
        <a href="https://www.youtube.com/@nekoten_zzz" target="_blank" rel="noopener noreferrer">
          nekoten
        </a>
      }
      ", "
      {
        <a href="https://www.youtube.com/@omocorochannel" target="_blank" rel="noopener noreferrer">
          omocorochannel
        </a>
      }
      {`"], \n
      Food: ["Noodles in general", "moderately spicy food", "walleye pollack roe"], \n
      Other: ["tour of Kyoto", "cafe crawl", "travel"] \n
    } \n
  } \n
  
  `}
    </code>
  );
};
