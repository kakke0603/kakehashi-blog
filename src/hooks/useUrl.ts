"use client";

import { useSearchParams } from "next/navigation";

export const useUrl = () => {
  const searchParams = useSearchParams();
  const url = new URL(process.env.URL ?? "http://localhost:3000");
  const isEnglish: boolean = url.pathname.endsWith("/en") || url.pathname === "/en";
  return { url, isEnglish, searchParams };
};
