export const runtime = "edge";

import React from "react";
import { Timer } from "./Timer";

export default async function Page() {
  return (
    <div>
      <Timer />
    </div>
  );
}
