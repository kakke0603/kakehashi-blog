"use client";
import { Link, User, Image } from "@nextui-org/react";
import React from "react";
import { WideAdvertisements } from "./Advertisement/WideAdvertisements";
import { useLang } from "../hooks/useLang";

export default function Profile() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isJapanese } = useLang();
  return (
    <div>
      <div className="my-10 flex justify-center">
        <User
          name={isJapanese ? "かっけ" : "Kakke"}
          description={
            <div>
              {isJapanese ? "ふるすたっくえんじにあ" : "Full stack engineer"}
              <br />
              X:
              <a href="https://twitter.com/kkhs0603" target="_blank" rel="noopener noreferrer">
                @kkhs0603
              </a>
              <br />
              GitHub:
              <a href="https://github.com/kakke0603" target="_blank" rel="noopener noreferrer">
                kakke0603
              </a>
              <br />
              instagram:
              <a href="https://www.instagram.com/kakke0603/" target="_blank" rel="noopener noreferrer">
                kakke0603
              </a>
            </div>
          }
          avatarProps={{ src: "/profile.jpg", size: "lg" }}
        />
      </div>
      <WideAdvertisements />
      <h1>{isJapanese ? "経歴" : "career"}</h1>
      <div className="p-5">
        <TimelineComponent />
      </div>
      <WideAdvertisements />
      <h1>{isJapanese ? "自己紹介" : "self-introduction"}</h1>
      <pre className="mt-10">{isJapanese ? codeJp() : codeEn()}</pre>
      <WideAdvertisements />
      <h1>{isJapanese ? "コミュニティ" : "community"}</h1>
      <Link href="https://it-takoyaki.connpass.com/" target="_blank" rel="noopener noreferrer">
        <Image src={isJapanese ? "it-takoyaki.png" : "/[en]/it-takoyaki-en.png"} alt="it-takoyaki" />
      </Link>
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
      推し){`", "`}
      {
        <a href="https://www.youtube.com/@tokumei_radio" target="_blank" rel="noopener noreferrer">
          匿名ラジオ
        </a>
      }
      {`", "`}
      {
        <a href="https://www.youtube.com/@itabasihausu" target="_blank" rel="noopener noreferrer">
          板橋ハウス
        </a>
      }
      {`", "`}
      {
        <a href="https://www.youtube.com/@nekoten_zzz" target="_blank" rel="noopener noreferrer">
          ねこてん
        </a>
      }
      {`", "`}
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
      ){`", "`}
      {
        <a href="https://www.youtube.com/@tokumei_radio" target="_blank" rel="noopener noreferrer">
          tokumei_radio
        </a>
      }
      {`", "`}
      {
        <a href="https://www.youtube.com/@itabasihausu" target="_blank" rel="noopener noreferrer">
          itabasihausu
        </a>
      }
      {`", "`}
      {
        <a href="https://www.youtube.com/@nekoten_zzz" target="_blank" rel="noopener noreferrer">
          nekoten
        </a>
      }
      {`", "`}
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

const TimelineComponent = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isJapanese } = useLang();
  return (
    <ol className="border-l border-neutral-300 dark:border-neutral-500">
      <li>
        <div className="flex-start flex items-center pt-3">
          <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
          <p className="text-sm text-neutral-500 dark:text-neutral-300">2015/04/01〜2019/03/31</p>
        </div>
        <div className="mb-6 ml-4 mt-2">
          <h4 className="mb-1.5 text-xl font-semibold">
            {isJapanese ? "ECCコンピュータ専門学校 IT開発エキスパートコース卒業" : "Graduated from ECC Computer College IT Development Expert Course"}
          </h4>
          <p className="mb-3 text-neutral-500 dark:text-neutral-300">
            {isJapanese
              ? "C言語検定3級、ITパスポート、基本情報技術者試験の取得"
              : "C Language Proficiency Test Level 3, IT Passport, and Basic Information Technology Engineer Examination"}
          </p>
        </div>
      </li>
      <li>
        <div className="flex-start flex items-center pt-2">
          <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
          <p className="text-sm text-neutral-500 dark:text-neutral-300">2019/04/01〜2021/03/31</p>
        </div>
        <div className="mb-6 ml-4 mt-2">
          <h4 className="mb-1.5 text-xl font-semibold">{isJapanese ? "医療系SIerに入社" : "Joined a medical SIer"}</h4>
          <p className="mb-3 text-neutral-500 dark:text-neutral-300">
            {isJapanese
              ? "医療系のシステムを開発。デスクトップアプリケーションをVB.net,C#などで開発"
              : "Developed medical systems. Desktop application (developed in VB.net, C#, etc.)"}
          </p>
        </div>
      </li>
      <li>
        <div className="flex-start flex items-center pt-2">
          <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-blue-300 dark:bg-blue-500"></div>
          <p className="text-sm text-blue-500 dark:text-blue-300">{isJapanese ? "2021/05/01〜現在" : "2021/05/01 - Present"}</p>
        </div>
        <div className="ml-4 mt-2 pb-5">
          <h4 className="mb-1.5 text-xl font-semibold">{isJapanese ? "HappyLifeCreators株式会社に入社" : "Joined HappyLifeCreators, Inc."}</h4>
          <p className="mb-3 text-neutral-500 dark:text-neutral-300">
            {isJapanese ? (
              <>
                SNSの開発。React,Laravelなどで開発中。AWSを使用したインフラ構築も行っています。
                <br />
                フロントがめっちゃ得意です。楽しく開発させてもらってます！
                <br />
                AWS Certified Cloud Practitionerの取得。
              </>
            ) : (
              <>
                Developing SNS, using React, Laravel, etc. Also building infrastructure using AWS.
                <br />I am very good at front-end development. I am very good at front-end development. I enjoy developing!
                <br />
                AWS Certified Cloud Practitioner.
              </>
            )}
          </p>
        </div>
      </li>
    </ol>
  );
};
