export const runtime = "edge";
import { Home } from "./Home";
export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Home />
    </main>
  );
}
