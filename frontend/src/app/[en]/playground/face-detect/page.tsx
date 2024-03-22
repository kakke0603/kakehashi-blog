export const runtime = "edge";

import React from "react";
import { FaceDetect } from "frontend/src/components/Playground/FaceDetect/FaceDetect";

export default async function Page() {
  return (
    <div>
      <FaceDetect />
    </div>
  );
}
