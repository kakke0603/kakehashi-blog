export const runtime = "edge";

import { FaceDetect } from "../../../components//Playground/FaceDetect/FaceDetect";
import React from "react";

export default async function Page() {
  return (
    <div>
      <FaceDetect />
    </div>
  );
}
