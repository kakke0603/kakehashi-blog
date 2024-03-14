export const runtime = "edge";
import { getAllArticles, getArticle } from "@/libs/client";
import { Metadata, ResolvingMetadata } from "next";
import { Advertisements } from "@/components/Advertisement/Advertisements";
import { Article } from "@/components/Article/Article";
import { ImageResponse } from "next/og";

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
  return (
    <div>
      <Article {...data} key={data.id} />
    </div>
  );
}
