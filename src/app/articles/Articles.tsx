"use client";
export const runtime = "edge";
import { ArticleType, client } from "@/libs/client";
import React, { useEffect, useState } from "react";
import { ArticleCard } from "./ArticleCard";
import { Pagination } from "@nextui-org/react";
import { MicroCMSListResponse } from "microcms-js-sdk";

export default function Articles(list: { contents: ArticleType[]; totalCount: number }) {
  const [offset, setOffset] = useState(1);
  const [lists, setList] = useState({ contents: list.contents, totalCount: list.totalCount });
  return (
    <div className="pt-10 px-2 space-y-10  mx-auto justify-center">
      {lists.contents?.map((article: ArticleType) => {
        return <ArticleCard {...article} key={article.id} />;
      })}
      <div className="flex justify-center">
        <Pagination total={Math.ceil(list.totalCount / 10)} initialPage={offset} onChange={(page) => setOffset(page)} />
      </div>
    </div>
  );
}
