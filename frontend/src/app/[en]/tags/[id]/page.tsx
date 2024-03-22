export const runtime = "edge";
import { ArticleCard } from "frontend/src/components/Article/ArticleCard";
import { ArticleType, client } from "frontend/src/libs/client";
import { BreadcrumbItem, Breadcrumbs, Spinner } from "@nextui-org/react";
import { Suspense } from "react";

export default async function page({ params }: { params: { id: string } }) {
  const articles = await client
    .getAllContents({
      endpoint: "articles",
      queries: { orders: "-createdAt" },
    })
    .then((res) => res as ArticleType[]);
  const filteredArticles = articles.filter((article) => article.tags.some((tag) => tag.id === params.id));
  const tag = await client.get({ endpoint: "tags", contentId: params.id }).then((res) => res);

  return (
    <div>
      <div>
        <div className="font-bold">{tag.name}</div>
      </div>
      <div className="flex flex-col gap-3">{filteredArticles?.map((article) => <ArticleCard key={article.id} {...article} />)}</div>
      {filteredArticles.length === 0 && <div>記事がありません</div>}
    </div>
  );
}
