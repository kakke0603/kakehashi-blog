"use client";
import React from "react";
import { ArticleType } from "../../libs/client";
import RelatedArticle from "./RelatedArticle";
import { useLang } from "../../hooks/useLang";

const RelatedArticles = ({ articles }: { articles: Array<ArticleType> }) => {
  const { isJapanese } = useLang();
  return (
    <div>
      <h2>{isJapanese ? "関連記事" : "Related Articles"}</h2>
      <div className="px-5 gap-5 grid sm:grid-cols-3 grid-cols-2 overflow-auto max-w-[100dvw] justify-center">
        {articles.map((article, key) => (
          <RelatedArticle key={key} article={article} />
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
