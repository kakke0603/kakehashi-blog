import { Home } from "./Home"

export const runtime = "edge"
export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Home />
    </main>
  )
}
