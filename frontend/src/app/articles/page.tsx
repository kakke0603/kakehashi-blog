export const runtime = "edge";
import React from "react";
import { Advertisements } from "frontend/src/components/Advertisement/Advertisements";
import Articles from "frontend/src/components/Article/Articles";

export default async function page() {
  return (
    <div>
      <Articles />
    </div>
  );
}
