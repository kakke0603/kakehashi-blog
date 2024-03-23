export const runtime = "edge";

import ThreeJs from "../../../../components//Playground/ThreeJs/ThreeJs";
import React from "react";

export default async function Page() {
  return (
    <div>
      three.js
      <ThreeJs />
    </div>
  );
}
