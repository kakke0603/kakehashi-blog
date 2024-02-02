export const runtime = "edge";
import { XIcon } from "@/components/Icons/XIcon";
import Profile from "@/components/Profile";
import Script from "next/script";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col items-center ">
      <Profile />
      <Script type="text/javascript" src="//rot0.a8.net/jsa/4305c2b897d9a753abb4b96ef677d644/c6f057b86584942e415435ffb1fa93d4.js"></Script>
    </div>
  );
}
