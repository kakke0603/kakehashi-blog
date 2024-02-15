import React from "react";
import Articles from "./Articles";
import { client } from "@/libs/client";

export default async function page() {
  const list = await client.getList({ endpoint: "articles", queries: { limit: 10, offset: 0 } });
  return (
    <div>
      <Articles {...list} />
    </div>
  );
}
