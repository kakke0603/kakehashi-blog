import { WideAdvertisements } from "@/components/Advertisement/WideAdvertisements";
import { Home } from "./Home";
export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Home />
      <div>
        <WideAdvertisements />
      </div>
    </main>
  );
}
