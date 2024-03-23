export const runtime = "edge";

import React from "react";
import { FaceDetect } from "../../../../components//Playground/FaceDetect/FaceDetect";

export default async function Page() {
  return (
    <div>
      <FaceDetect />
    </div>
  );
}
