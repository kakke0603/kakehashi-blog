export const runtime = "edge";

import Subscription from "frontend/src/components/Playground/Subscription/Subscription";
import React from "react";

export default async function Page() {
  return (
    <div>
      <Subscription />
    </div>
  );
}
