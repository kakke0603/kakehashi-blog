export const runtime = "edge";
import React from "react";
import { ImageResponse } from "next/og";
import { getArticle } from "@/libs/client";

export const alt = "kakke-blog";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { id: string } }) {
  const { title } = await getArticle(params.id);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {title}
      </div>
    ),
    {
      ...size,
    }
  );
}
