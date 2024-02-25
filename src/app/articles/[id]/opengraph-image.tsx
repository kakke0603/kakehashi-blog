import { getArticle } from "@/libs/client";
import { ImageResponse } from "next/og";
export async function generateImageMetadata({ params }: { params: { id: string } }) {
  const images = ["/opengraph-image.png"];

  return images.map((image, idx) => ({
    id: idx,
    size: { width: 1200, height: 600 },
    alt: "kakke-blog",
    contentType: "image/png",
  }));
}

export default async function Image({ params, id }: { params: { id: string }; id: number }) {
  const { title, content } = await getArticle(params.id);

  return new ImageResponse(
    (
      <div
        style={
          {
            // ...
          }
        }
      >
        {title}
      </div>
    )
  );
}
