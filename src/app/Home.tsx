"use client";
import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { useCurrentLocale } from "next-i18n-router/client";
import i18nConfig from "./i18nConfig";

export const Home = () => {
  const locale = useCurrentLocale(i18nConfig);
  const isJapanese = locale === "ja";
  return (
    <div>
      <div className="gap-5 grid sm:grid-cols-3 grid-cols-2 grid-rows-2 justify-center mb-5 p-5">
        <a href={"/about"}>
          <Card className="py-4 w-full h-full" isPressable>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">About</h4>
              <small className="text-default-500">{isJapanese ? <>かっけについて自己紹介</> : <>Self introduction about kakke</>}</small>
            </CardHeader>
            <CardBody className="overflow-visible py-2 flex justify-center items-center">
              <Image alt="Card background" className="object-cover rounded-xl" src="about.png" width={100} height={100} />
            </CardBody>
          </Card>
        </a>
        <a href={"/articles"}>
          <Card className="py-4 w-full h-full" isPressable>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">Articles</h4>
              <small className="text-default-500">
                {isJapanese ? <>雑記から技術記事まで</> : <>From miscellaneous articles to technical articles</>}
              </small>
            </CardHeader>
            <CardBody className="overflow-visible py-2 flex justify-center items-center">
              <Image alt="Card background" className="object-cover rounded-xl" src="articles.png" width={100} height={100} />
            </CardBody>
          </Card>
        </a>
        <a href={"/tags"}>
          <Card className="py-4 w-full h-full" isPressable>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">Tags</h4>
              <small className="text-default-500">{isJapanese ? <>記事のタグ一覧です</> : <>Here is a list of tags for the article</>}</small>
            </CardHeader>
            <CardBody className="overflow-visible py-2 flex justify-center items-center">
              <Image alt="Card background" className="object-cover rounded-xl" src="tags.png" width={100} height={100} />
            </CardBody>
          </Card>
        </a>
        <a href={"/playground"}>
          <Card className="py-4 w-full h-full" isPressable>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">Playground</h4>
              <small className="text-default-500">{isJapanese ? <>技術の実験場遊び場</> : <>A testing ground and playground for technology</>}</small>
            </CardHeader>
            <CardBody className="overflow-visible py-2 flex justify-center items-center">
              <Image alt="Card background" className="object-cover rounded-xl" src="playground.png" width={100} height={100} />
            </CardBody>
          </Card>
        </a>
        <a href={"/products"}>
          <Card className="py-4 w-full h-full" isPressable>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">Products</h4>
              <small className="text-default-500">{isJapanese ? <>プロダクト</> : <>product</>}</small>
            </CardHeader>
            <CardBody className="overflow-visible py-2 flex justify-center items-center">
              <Image alt="Card background" className="object-cover rounded-xl" src="product.png" width={100} height={100} />
            </CardBody>
          </Card>
        </a>
        <a href={"/contact"}>
          <Card className="py-4 w-full h-full" isPressable>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">Contact me</h4>
              <small className="text-default-500">{isJapanese ? <>お問い合わせ</> : <>Contact me</>}</small>
            </CardHeader>
            <CardBody className="overflow-visible py-2 flex justify-center items-center">
              <Image alt="Card background" className="object-cover rounded-xl" src="contact.png" width={100} height={100} />
            </CardBody>
          </Card>
        </a>
      </div>
    </div>
  );
};
