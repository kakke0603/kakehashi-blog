"use client";
export const runtime = "edge";
import React from "react";
import PlaygroundPages from "frontend/src/components/Playground/PlaygroundPages";

export default function page() {
  return (
    <div className="">
      <PlaygroundPages />
    </div>
  );
}
