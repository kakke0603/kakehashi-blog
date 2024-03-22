export const runtime = "edge";
import { ArticleType, client, isArticleType } from "@libs/client";
import React from "react";
import { WideAdvertisements } from "@components/Advertisement/WideAdvertisements";
import { ArticleCard } from "@components/Article/ArticleCard";

export default async function Articles() {
  const data = await client
    .getAllContents({
      endpoint: "articles",
    })
    .then((res) => res);

  const groupedItems = [];
  for (let i = 0; i < data.length; i += 3) {
    groupedItems.push(data.slice(i, i + 3));
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
    </div>
  );
}
