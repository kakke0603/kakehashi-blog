export const runtime = "edge";
import React from "react";
import { EvaMark01 } from "@/components/Playground/EvaMark01/EvaMark01";

export default async function Page() {
  return (
    <div>
      <div className="">Evangelion mark0.1</div>
      <EvaMark01 />
    </div>
  );
}
