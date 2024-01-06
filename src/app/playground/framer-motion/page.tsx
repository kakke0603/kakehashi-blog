export const runtime = "edge";

import React from "react";
import { FramerMotion } from "./FramerMotion";

export default async function Page() {
  return (
    <div>
      <FramerMotion />
    </div>
  );
}
