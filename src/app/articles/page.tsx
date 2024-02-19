"use server";
import React from "react";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { Advertisements } from "@/components/Advertisement/Advertisements";
import Articles from "@/components/Article/Articles";

export default async function page() {
  return (
    <div>
      <Articles />
      <Advertisements />
    </div>
  );
}
