import { EvaTimer } from "./EvaTimer"

export const runtime = "edge"

export default async function Page() {
  //3.25
  return (
    <div>
      <EvaTimer />
    </div>
  )
}
