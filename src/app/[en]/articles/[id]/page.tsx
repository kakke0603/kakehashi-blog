export const runtime = "edge";
import { getAllArticles, getArticle } from "../../../../libs/client";

import { Metadata, ResolvingMetadata } from "next";
import { Advertisements } from "../../../../components/Advertisement/Advertisements";
import React from "react";
import { Article } from "@/components/Article/Article";

/**
 * メタデータの設定
 */
type Props = {
  params: { id: string };
};
export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const id = params.id;
  const { title_en, content_en } = await getArticle(id);
  const previousImages = (await parent).openGraph?.images || [];
  return {
    title: title_en,
    openGraph: {
      title: title_en,
      description: content_en,
      images: ["/opengraph-image.png", ...previousImages],
    },
  };
}

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
  return (
    <div>
      <Article {...data} key={data.id} />
      <Advertisements />
    </div>
  );
}
