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
          name={isJapanese ? "かっけ(掛橋俊介)" : "Kakehashi Shunsuke(a.k.a kakke)"}
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
      <h1>YouTube</h1>
      <Link href="https://www.youtube.com/@kakke0603" target="_blank" rel="noopener noreferrer">
        <Image src="/youtube.png" alt="youtube" />
      </Link>
      <WideAdvertisements />
      <h1>{isJapanese ? "コミュニティ" : "community"}</h1>
      <Link href="https://it-takoyaki.connpass.com/" target="_blank" rel="noopener noreferrer">
        <Image src="it-takoyaki.png" alt="it-takoyaki" />
      </Link>
    </div>
  );
}

const codeJp = () => {
  return (
    <code>
      {`\n  
  { \n
    Name: "かっけ(掛橋俊介)", \n
    Age: 31, \n
    Like: { \n
      Music: ["back number", "Perfume", "saucy dog", "Creepy Nuts", "新しい学校のリーダーズ", "King Gnu", "Avicii", "マキシマム ザ ホルモン", "ARuFa", "KREVA", "Official 髭男 dism", "TK from 凛として時雨", "Vaundy", "WANIMA", "YOASOBI", "Zedd"], \n
      Game: ["モンスターハンター", "アーマードコア", "エルデンリング", "ニーアオートマタ"], \n
      Anime: ["新世紀エヴァンゲリオン", "僕のヒーローアカデミア", "呪術廻戦", "葬送のフリーレン"], \n
      Movie: ["Marvel", "Star Wars", "ラ・ラ・ランド"], \n
      Technology: ["Next.js", "React", "TypeScript", "javaScript", "tailwindcss", "AWS", "Laravel", "PHP", "Python", "C#"], \n
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
      Food: ["麺類全般", "程よく辛いもの", "明太子", "海鮮"], \n
      Other: ["京都巡り", "カフェ巡り", "旅行", "歌を歌うこと", "楽曲制作"] \n
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
    Name: "kakehashi shunsuke(a.k.a kakke)", \n
    Age: 31, \n
    Like: { \n
      Music: ["back number", "Perfume", "saucy dog", "Creepy Nuts", "ATARASHII GAKKO!", "King Gnu", "Avicii", "maximum the hormone", "ARuFa", "KREVA", "Official 髭男 dism", "TK from 凛として時雨", "Vaundy", "WANIMA", "YOASOBI", "Zedd"], \n
      Game: ["monster hunter", "ARMORED CORE", "Elden Ling", "NieR Automata"], \n
      Anime: ["Neon Genesis Evangelion", "My Hero Academia", "Jujutsu Kaisen", "Frieren :Beyond Journey's End"], \n
      Movie: ["Marvel", "Star Wars", "La La Land"], \n
      Technology: ["Next.js", "React", "TypeScript", "javaScript", "tailwindcss", "AWS", "Laravel", "PHP", "Python", "C#"], \n
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
      Food: ["Noodles in general", "moderately spicy food", "walleye pollack roe", "seafood"], \n
      Other: ["tour of Kyoto", "cafe crawl", "travel", "sing a song", "music composition"] \n
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
          <p className="text-sm text-neutral-500 dark:text-neutral-300">2012/04/01〜2013/03/31</p>
        </div>
        <div className="mb-6 ml-4 mt-2">
          <h4 className="mb-1.5 text-xl font-semibold">
            {isJapanese
              ? "同志社大学理工学部機械システム工学科入学・中退"
              : "Entered and withdrew from the Department of Mechanical Systems Engineering, Faculty of Science and Engineering, Doshisha University"}
          </h4>
          <p className="mb-3 text-neutral-500 dark:text-neutral-300">
            {isJapanese
              ? "機械設計や製図などを学ぶもITに興味を持ち、専門学校に進学することに"
              : "Studied mechanical design and drafting, but became interested in IT and decided to enter a technical college"}
          </p>
        </div>
      </li>
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
          <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
          <p className="text-sm text-neutral-500 dark:text-neutral-300">2021/05/01〜2024/04/30</p>
        </div>
        <div className="ml-4 mt-2 pb-5">
          <h4 className="mb-1.5 text-xl font-semibold">{isJapanese ? "Web系ベンチャー企業に入社" : "Joined a web-based venture company."}</h4>
          <p className="mb-3 text-neutral-500 dark:text-neutral-300">
            {isJapanese ? (
              <>
                オタク向けSNSの開発。React,Laravelなどで開発していました。AWSを使用したインフラ構築も行っていました。
                <br />
                ユーザー数を数十万人規模にまで引き上げることができました。
                <br />
                AWS Certified Cloud Practitionerの取得。
              </>
            ) : (
              <>
                I developed SNS using React, Laravel, etc. I also built infrastructure using AWS.
                <br />I was able to increase the number of users to several hundred thousand.
                <br />
                AWS Certified Cloud Practitioner.
              </>
            )}
          </p>
        </div>
      </li>
      <li>
        <div className="flex-start flex items-center pt-2">
          <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-blue-300 dark:bg-blue-500"></div>
          <p className="text-sm text-blue-500 dark:text-blue-300">2024/05/01〜</p>
        </div>
        <div className="ml-4 mt-2 pb-5">
          <h4 className="mb-1.5 text-xl font-semibold">{isJapanese ? "株式会社かけはしを設立" : "Established Kakehashi Co."}</h4>
          <p className="mb-3 text-neutral-500 dark:text-neutral-300">
            {isJapanese ? (
              <>フリーランスとして活動を開始しました。IT事業をメインにしつつ、いずれは都市開発事業に携わりたい。</>
            ) : (
              <>
                I have started working as a freelancer, mainly in the IT business, but would eventually like to be involved in the urban development
                business.
              </>
            )}
          </p>
        </div>
      </li>
    </ol>
  );
};
