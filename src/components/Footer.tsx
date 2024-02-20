"use client";
import { useLang } from "../hooks/useLang";
import React from "react";

export default function Footer() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isJapanese } = useLang();
  return <footer className="w-full text-center text-default-500 text-sm">© 2024 {isJapanese ? <>かっけ</> : <>kakke</>}</footer>;
}
