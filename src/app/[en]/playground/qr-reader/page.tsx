export const runtime = "edge";

import QRReader from "@/components/Playground/QRReader/QRReader";
import React, { useState } from "react";

export default async function Page() {
  return (
    <div>
      <QRReader />
    </div>
  );
}
