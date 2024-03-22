import { TagType, client } from "frontend/src/libs/client";
import Tags from "./Tags";

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
