"use client";
import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { ArticleType, client, getArticle } from "../../libs/client";
import { Tag } from "../Tag";
import { useLang } from "../../hooks/useLang";
import { useRouter } from "next/navigation";

export default function RelatedArticle({ article }: { article: ArticleType }) {
  const { isJapanese } = useLang();
  const router = useRouter();
  const handleClick = () => {
    isJapanese ? router.push(`/articles/${article.id}`) : router.push(`/en/articles/${article.id}`);
  };
  return (
    <Card isPressable className="w-[150px] h-[90px] sm:w-[200px]" onClick={handleClick}>
      <CardBody>
        <pre>{isJapanese ? article?.title : article.content_en}</pre>
        <div className="mt-2 flex gap-x-2">
          {article.tags?.map((tag) => <Tag id={tag.id} name={isJapanese ? tag.name : tag.name_en} key={tag.id} />)}
        </div>
      </CardBody>
    </Card>
  );
}
