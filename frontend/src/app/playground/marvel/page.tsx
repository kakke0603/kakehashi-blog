export const runtime = "edge";

import Marvel from "frontend/src/components/Playground/Marvel/Marvel";
import React from "react";

export default async function Page() {
  return (
    <div>
      <Marvel />
    </div>
  );
}
