import { TagType, getAllTags } from "../../libs/client";
import Tags from "./Tags";

export default async function page() {
  const tags = await getAllTags();
  return (
    <div className="">
      <Tags tags={tags} />
    </div>
  );
}
