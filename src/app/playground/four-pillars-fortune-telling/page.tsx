export const runtime = "edge";

import FourPillarsFortuneTelling from "@/components/Playground/FourPillarsFortuneTelling/FourPillarsFortuneTelling";
import React, { useState } from "react";

export default async function Page() {
  return (
    <div>
      <FourPillarsFortuneTelling />
    </div>
  );
}
