export const runtime = "edge";
import { getAllArticles, getAllTags, getArticle } from "../../../libs/client";
import { Metadata, ResolvingMetadata } from "next";
import { Advertisements } from "../../../components//Advertisement/Advertisements";
import { Article } from "../../../components//Article/Article";
import { ImageResponse } from "next/og";
import { Card } from "@nextui-org/react";
import RelatedArticles from "../../../components/Article/RelatedArticles";

/**
 * メタデータの設定
 */
const siteName = "Kakke Blog";
const description = "This is a blog by kakke";
const url = "https://kakke.site";
export const metadata = {
  title: {
    default: siteName,
    /** `next-seo`の`titleTemplate`に相当する機能 */
    template: `%s - ${siteName}`,
  },
  metadataBase: new URL(process.env.URL ?? "http://localhost:3000"),
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: "ja_JP",
    type: "website",
  },
  icons: {
    icon: "/openGraph-image-square.png",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    site: "@kkhs0603",
    creator: "@kkhs0603",
    images: ["/openGraph-image-square.png"],
  },
  verification: {
    google: "",
  },
  alternates: {
    canonical: url,
  },
};

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getArticle(params.id);
  const articles = await getAllArticles();
  const tags = data.tags;
  const relatedTags = tags?.filter((tag) => articles?.filter((article) => article.tags?.some((articleTag) => articleTag.id === tag.id)));
  const relatedArticles = articles?.filter((article) => {
    return article.tags?.some((articleTag) => relatedTags?.some((relatedTag) => articleTag.id === relatedTag.id));
  });
  const filteredArticles = relatedArticles?.filter((article) => article.id !== data.id);
  return (
    <div>
      <Article {...data} key={data.id} />
      <Advertisements />
      <div>
        <RelatedArticles articles={filteredArticles} />
      </div>
    </div>
  );
}
