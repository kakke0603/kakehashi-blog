import { OurGoals } from "../../../components//Playground/OurGoals/OurGoals";
import { Metadata, ResolvingMetadata } from "next";

export const runtime = "edge";

/**
 * メタデータの設定
 */
const siteName = "our-goals:目標作成ツール";
export const metadata = {
  title: {
    default: "our-goals:目標作成ツール",
  },
  metadataBase: new URL(process.env.URL ?? "http://localhost:3000"),
  openGraph: {
    title: siteName,
    siteName,
    locale: "ja_JP",
    type: "website",
    images: "/ogp-our-goals.png",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    site: "@kkhs0603",
    creator: "@kkhs0603",
  },
  verification: {
    google: "",
  },
};
export default async function Page() {
  return (
    <div>
      <OurGoals />
    </div>
  );
}
