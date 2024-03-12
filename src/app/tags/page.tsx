import Tags from "@/components/Tag/Tags";
import { TagType, client } from "@/libs/client";
import { Spinner } from "@nextui-org/react";
import { Suspense } from "react";

export default async function page() {
  const tags = await client
    .getAllContents({
      endpoint: "tags",
      queries: { orders: "createdAt" },
    })
    .then((res) => res as TagType[]);
  return (
    <div className="">
      <Suspense fallback={<Spinner />}>
        <Tags tags={tags} />
      </Suspense>
    </div>
  );
}
