export const runtime = "edge";

import React from "react";
import { Piano } from "./Piano";

export default async function Page() {
  return (
    <div>
      <Piano />
    </div>
  );
}
