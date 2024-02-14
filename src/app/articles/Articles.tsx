export const runtime = "edge";
import { ArticleType, client } from "@/libs/client";
import React from "react";
import { ArticleCard } from "./ArticleCard";
import { Pagination } from "@nextui-org/react";

export default async function Articles() {
  const list = await client.getList({ endpoint: "articles", queries: { limit: 10 } });
  const items = await client.get({
    endpoint: "articles",
    queries: {
      limit: 10,
      offset: 0,
    },
  });
  return (
    <div className="pt-10 px-2 space-y-10  mx-auto justify-center">
      {list.contents?.map((article: ArticleType) => {
        return <ArticleCard {...article} key={article.id} />;
      })}
      <div className="flex justify-center">
        <Pagination total={Math.ceil(list.totalCount / 10)} initialPage={1} />
      </div>
    </div>
  );
}
