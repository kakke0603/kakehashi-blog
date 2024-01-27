"use client";
export const runtime = "edge";

import React from "react";
import { Piano } from "./Piano";
import { RecoilRoot } from "recoil";

export default async function Page() {
  return (
    <div>
      <RecoilRoot>
        <Piano />
      </RecoilRoot>
    </div>
  );
}
