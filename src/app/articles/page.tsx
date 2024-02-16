export const runtime = "edge";
import React from "react";
import Articles from "./Articles";
import { Advertisements } from "@/components/Advertisements";

export default async function page() {
  return (
    <div>
      <Articles />
      <Advertisements />
    </div>
  );
}
