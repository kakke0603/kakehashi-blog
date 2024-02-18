export const runtime = "edge";
import Articles from "@/components/Articles";
import React from "react";

export default async function page() {
  return (
    <div>
      <Articles />
    </div>
  );
}
