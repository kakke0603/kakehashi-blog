export const runtime = "edge";
import TagsPage from "frontend/src/components/Tag/TagsPage";

export default async function page() {
  return (
    <div className="">
      <TagsPage />
    </div>
  );
}
