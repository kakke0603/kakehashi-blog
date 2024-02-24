export const runtime = "edge";
import { getAllArticles, getArticle } from "@/libs/client";
import { Metadata, ResolvingMetadata } from "next";
import { Advertisements } from "@/components/Advertisement/Advertisements";
import { Article } from "@/components/Article/Article";
import { ImageResponse } from "next/og";

/**
 * メタデータの設定
 */
type Props = {
  params: { id: string };
};
export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const id = params.id;
  const { title, content } = await getArticle(id);
  const previousImages = (await parent).openGraph?.images || [];
  return {
    title,
    description: content,
    openGraph: {
      title,
      description: content,
      images: ["https://kakke.site/opengraph-image.png", ...previousImages],
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
