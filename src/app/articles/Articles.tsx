export const runtime = "edge";
import { ArticleType, client } from "@/libs/client";
import React from "react";
import { ArticleCard } from "./ArticleCard";

export default async function Articles() {
  const ids = await client.getAllContentIds({
    endpoint: "articles",
  });
  const data = await client
    .getList({
      endpoint: "articles",
      queries: {
        ids: ids,
        limit: 10,
      },
    })
    .then((res) => res.contents);
  return (
    <div className="pt-10 px-2 space-y-10 max-w-2xl mx-auto">
      {data?.map((article: ArticleType) => {
        return <ArticleCard {...article} key={article.id} />;
      })}
    </div>
  );
}
