export const runtime = "edge";

import { Piano } from "@components/Playground/Piano/Piano";
import React from "react";

export default async function Page() {
  return (
    <div>
      <Piano />
    </div>
  );
}
