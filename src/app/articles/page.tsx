/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import { Advertisements } from "@/components/Advertisement/Advertisements";
import Articles from "@/components/Article/Articles";
import { Pagination } from "@nextui-org/react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { ArticleType, client } from "@/libs/client";
import { Article } from "@/components/Article/Article";
import { createClient } from "microcms-js-sdk";

export const revalidate = 0;

export default async function page() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set("page", "1");
    router.push(`${pathname}?${current.toString()}`);
    // createClient({ serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN ?? "", apiKey: process.env.MICROCMS_API_KEY ?? "" });
  }, []);
  const handlePageChange = (page: number) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set("page", page.toString());
    router.push(`${pathname}?${current.toString()}`);
  };
  return (
    <div>
      <Articles offset={Number(searchParams.get("page")) ?? 0} />
      <Pagination total={10} initialPage={1} onChange={handlePageChange} />
      <Advertisements />
    </div>
  );
}
