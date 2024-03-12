export const runtime = "edge";
import Tags from "@/components/Tag/Tags";
import { TagType, client } from "@/libs/client";

export default async function page() {
  const tags = await client
    .getAllContents({
      endpoint: "tags",
      queries: { orders: "createdAt" },
    })
    .then((res) => res as TagType[]);
  return (
    <div className="">
      <Tags tags={tags} />
    </div>
  );
}
