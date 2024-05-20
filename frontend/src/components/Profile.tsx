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
                <br />
                オタク向けSNS「くるっぷ」（
                <a href="https://crepu.net" target="_blank" rel="noopener noreferrer">
                  https://crepu.net
                </a>
                ）の開発において、エンジニア兼マネージャーを担ってきました。
                <br />
                技術スタックにはReact、TailwindCSS、Laravelなどを使用し、さらにAWSを用いたインフラ構築も手掛けました。
                <br />
                UIの一新を行なった結果、ユーザー数を数千人から数十万人規模にまで飛躍的に増加させることに成功しました。
                <br />
                ユーザーやプロダクトオーナーの要望に応じて、柔軟かつ迅速に新機能を実装し、サービスの向上に努めました。
                <br />
                具体的には、SNSの設計から開発、保守運用までを一手に引き受け、多岐にわたる機能を提供しました。
                <br />
                　投稿機能や画像投稿、フォローフォロワー機能、ミュート・ブロック機能、いいね機能、クリップボード機能、ユーザー追加機能、サブスクリプション型の課金システムの構築、タイムラインの実装、そして通報機能など、ユーザーエクスペリエンスを向上させるための幅広い機能を開発しました。
                <br />
                　また、運用側のシステムも構築し、不正利用ユーザーのBANや通報された投稿の管理など、サービスの健全性を維持するための管理体制を整えました。これにより、安全で快適なSNS環境の提供に貢献しました。
                <br />
                　このような経験を通じて、技術力だけでなく、ユーザー目線でのサービス改善や運用管理のスキルも培ってきました。
                <br />
                今後も、これらのスキルを活かしてさらなるチャレンジをしていきたいと考えています。
                <br />
                資格はAWS Certified Cloud Practitionerを取得。
              </>
            ) : (
              <>
                I have been an engineer and manager in the development of "Kuruppu" (
                <a href="https://crepu.net" target="_blank" rel="noopener noreferrer">
                  https://crepu.net
                </a>
                ), a social networking service for otaku. The technology stack included React, TailwindCSS, and Laravel, and we also built the
                infrastructure using AWS. <br />
                As a result of the UI overhaul, we were able to dramatically increase the number of users from a few thousand to several hundred
                thousand.
                <br />
                In response to requests from users and product owners, we flexibly and quickly implemented new features to improve the service.
                Specifically, we took on the entire process of SNS design, development, maintenance, and operation, providing a wide range of
                functions.
                <br />
                　We developed a wide range of functions to improve the user experience, including posting functions, image posting, follow/follow
                functions, mute/block functions, like functions, clipboard functions, user addition functions, building a subscription-based billing
                system, implementing a timeline, and a reporting function. The company also built the operational side of the system.
                <br />
                　We also built an operational system and established a management system to maintain the health of the service, including banning of
                abusive users and management of reported posts. This contributed to the provision of a safe and comfortable SNS environment.
                <br />
                　Through these experiences, we have developed not only technical skills but also skills in service improvement and operational
                management from the user's perspective. I would like to continue to utilize these skills to take on further challenges in the future.
                <br />I have earned the AWS Certified Cloud Practitioner certification.
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
          <h4 className="mb-1.5 text-xl font-semibold">{isJapanese ? "フリーランスエンジニア" : "freelance engineer"}</h4>
          <p className="mb-3 text-neutral-500 dark:text-neutral-300">
            {isJapanese ? (
              <>
                フリーランスとして活動を開始。
                <br />
                ReactやNext.jsなど最新の技術をキャッチアップしつつみんなが知っているようなサービスを開発したり、誰も傷つかないSNSを開発したい。
              </>
            ) : (
              <>
                Started working as a freelancer. <br />I want to develop services that everyone knows while catching up with the latest technologies
                such as React and Next.js, and develop social networking services that won't hurt anyone.
              </>
            )}
          </p>
        </div>
      </li>
    </ol>
  );
};
