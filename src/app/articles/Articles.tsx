"use client";
export const runtime = "edge";
import { ArticleType, client, isArticleType } from "@/libs/client";
import React, { useEffect, useState } from "react";
import { ArticleCard } from "./ArticleCard";
import { Pagination } from "@nextui-org/react";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { WideAdvertisements } from "@/components/WideAdvertisements";

export default async function Articles() {
  const data = await client
    .getAllContents({
      endpoint: "articles",
    })
    .then((res) => res);

  const groupedItems = [];
  for (let i = 0; i < data.length; i += 5) {
    groupedItems.push(data.slice(i, i + 5));
  }
  const listWithAdvertisements = groupedItems.flatMap((group, index) => {
    const items = [...group];
    if (index < groupedItems.length - 1) {
      items.push(<WideAdvertisements key={`advertisement-${index}`} />);
    }
    return items;
  });
  return (
    <div className="pt-10 px-2 space-y-10  mx-auto">
      {listWithAdvertisements?.map((article: any) => {
        if (isArticleType(article)) {
          return <ArticleCard key={article.id} {...article} />;
        } else {
          return <>{article}</>;
        }
      })}
      <div className="flex justify-center">
        {/* <Pagination total={Math.ceil(list.totalCount / 10)} initialPage={offset} onChange={(page) => setOffset(page)} /> */}
      </div>
    </div>
  );
}
