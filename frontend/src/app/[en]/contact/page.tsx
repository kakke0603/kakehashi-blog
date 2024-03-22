import Contact from "frontend/src/components/Contact/Contact";

export const runtime = "edge";
export default async function Page() {
  return (
    <div>
      <Contact />
    </div>
  );
}
