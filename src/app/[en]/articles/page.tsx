export const runtime = "edge";
import Articles from "@/components/Article/Articles";
import React from "react";

export default async function page() {
  return (
    <div>
      <Articles />
    </div>
  );
}
