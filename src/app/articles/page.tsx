export const runtime = "edge";
import React from "react";
import { Advertisements } from "@/components/Advertisement/Advertisements";
import Articles from "@/components/Articles";

export default async function page() {
  return (
    <div>
      <Articles />
      <Advertisements />
    </div>
  );
}
