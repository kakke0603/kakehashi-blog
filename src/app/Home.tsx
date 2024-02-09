"use client";
import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { useUrl } from "@/hooks/useUrl";

export const Home = () => {
  const { url, isEnglish, searchParams } = useUrl();
  console.log("url", url.toString());
  console.log("english", isEnglish);
  console.log("searchParams", searchParams.getAll("lang"));
  return (
    <div>
      <div className="text-7xl flex justify-center items-center my-10">Kakke-Blog</div>
      <div className="flex gap-x-5">
        <a href={"/about"}>
          <Card className="py-4" isPressable>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">About</h4>
              <small className="text-default-500">{isEnglish ? <>Self introduction about kakke</> : <>kakkeについて自己紹介</>}</small>
            </CardHeader>
            <CardBody className="overflow-visible py-2 flex justify-center items-center">
              <Image alt="Card background" className="object-cover rounded-xl" src="about.png" width={80} />
            </CardBody>
          </Card>
        </a>
        <a href={"/articles"}>
          <Card className="py-4" isPressable>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">Articles</h4>
              <small className="text-default-500">雑記から技術記事まで</small>
            </CardHeader>
            <CardBody className="overflow-visible py-2 flex justify-center items-center">
              <Image alt="Card background" className="object-cover rounded-xl" src="articles.png" width={100} />
            </CardBody>
          </Card>
        </a>
        <a href={"/playground"}>
          <Card className="py-4" isPressable>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">Playground</h4>
              <small className="text-default-500">技術の実験場、遊び場</small>
            </CardHeader>
            <CardBody className="overflow-visible py-2 flex justify-center items-center">
              <Image alt="Card background" className="object-cover rounded-xl" src="playground.png" width={100} />
            </CardBody>
          </Card>
        </a>
      </div>
    </div>
  );
};
