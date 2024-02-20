export const runtime = "edge";
import React from "react";
import { Home } from "../Home";
import { WideAdvertisements } from "@/components/Advertisement/WideAdvertisements";

export default async function Page() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Home />
      <div>
        <WideAdvertisements />
      </div>
    </main>
  );
}
