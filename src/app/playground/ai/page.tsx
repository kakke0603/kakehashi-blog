"use client";
export const runtime = "edge";
import { ask } from "@/components/Playground/AI/claude";
import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";

// eslint-disable-next-line @next/next/no-async-client-component
export default function Page() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await ask(prompt);
      const t = response ?? "";
      setResponse(t.toString());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="mt-3 p-3">
        <div className="space-y-3 px-4 py-5 sm:p-6">
          <label htmlFor="Prompt" className="block text-sm font-medium">
            質問文
          </label>
          <div>
            <Input value={prompt} onValueChange={setPrompt} placeholder="ここに質問を入れてください" onChange={(e) => setPrompt(e.target.value)} />
          </div>
          <div>
            <Button onClick={handleSubmit} className="">
              質問する
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-3 p-3 md:col-span-2 md:mt-0">
        <div className="">
          <h2 className="text-base font-semibold leading-6 text-gray-900">質問の答え</h2>
          <p className="mt-1 text-sm text-gray-600">{response}</p>
        </div>
      </div>
    </div>
  );
}
