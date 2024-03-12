export const revalidate = 0;
import { ArticleType, client, getArticles, isArticleType } from "@/libs/client";
import React, { use, useEffect, useState } from "react";
import { WideAdvertisements } from "@/components/Advertisement/WideAdvertisements";
import { ArticleCard } from "@/components/Article/ArticleCard";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { MicroCMSContentId, MicroCMSDate, MicroCMSListResponse, createClient } from "microcms-js-sdk";

interface IProps {
  url: string;
  params: object;
}
const fetcher = async (props: IProps): Promise<(ArticleType[] & MicroCMSContentId & MicroCMSDate)[]> =>
  await client
    .getList({
      endpoint: props.url,
      queries: {
        limit: 10,
        ...props.params,
      },
    })
    .then((res: MicroCMSListResponse<ArticleType[]>) => res.contents);

export const Articles = ({ offset = 0 }: { offset: number }) => {
  const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN ?? "",
    apiKey: process.env.MICROCMS_API_KEY ?? "",
    retry: true,
  });
  const { data } = useSWR({ url: "articles", params: { offset } }, fetcher);

  return (
    <div className="pt-10 px-2 space-y-10  mx-auto">
      {data?.map((article: any) => {
        if (isArticleType(article)) {
          return <ArticleCard key={article.id} {...article} />;
        } else {
          return <>{article}</>;
        }
      })}
    </div>
  );
};
