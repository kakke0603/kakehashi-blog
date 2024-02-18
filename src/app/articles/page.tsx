"use server";
import React from "react";
import Articles from "./Articles";
import { ArticleType, client } from "@/libs/client";
import { Advertisements } from "@/components/Advertisements";
import { MicroCMSListResponse } from "microcms-js-sdk";

export default async function page() {
  const list: MicroCMSListResponse<ArticleType> = await client.getList({ endpoint: "articles", queries: { limit: 10, offset: 0 } });
  return (
    <div>
      <Articles contents={list.contents} totalCount={list.totalCount} />
      <Advertisements />
    </div>
  );
}
