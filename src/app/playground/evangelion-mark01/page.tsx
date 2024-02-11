export const runtime = "edge";
import React from "react";

export default async function Page() {
  return (
    <div>
      <div className="">Evangelion mark0.1</div>
      <div>
        <div className="relative">
          <div className="absolute h-2 w-10 bg-purple-500 rotate-[60deg]"></div>
          <div className="absolute h-2 "></div>
        </div>
      </div>
    </div>
  );
}
