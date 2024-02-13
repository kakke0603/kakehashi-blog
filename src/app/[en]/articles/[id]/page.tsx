export const runtime = "edge";
import { getAllArticles, getArticle } from "../../../../libs/client";
import { Article } from "./Article";
import { Metadata, ResolvingMetadata } from "next";
import { Advertisements } from "../../../../components/Advertisements";
import React from "react";

/**
 * メタデータの設定
 */
type Props = {
  params: { id: string };
};
export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const id = params.id;
  const { title } = await getArticle(id);
  const previousImages = (await parent).openGraph?.images || [];
  return {
    title,
    openGraph: {
      images: [...previousImages],
    },
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getArticle(params.id);
  return (
    <div>
      <Article {...data} key={data.id} />
      <Advertisements />
    </div>
  );
}