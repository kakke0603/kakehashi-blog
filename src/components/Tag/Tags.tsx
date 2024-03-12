/* eslint-disable @next/next/no-async-client-component */
"use client";
import { TagType } from "@/libs/client";
import React from "react";
import { Tag } from "../Tag";
import { Button } from "@nextui-org/react";
import twemoji from "twemoji";
import { useRouter } from "next/navigation";

export default async function Tags({ tags }: { tags: TagType[] }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const onClick = (id: string) => router.push(`/tags/${id}`);
  return (
    <div className="flex flex-col gap-3">
      <div className="font-bold underline">Tags</div>
      <div className="flex gap-2 flex-wrap">
        {tags?.map((tag) => (
          <Button key={tag.id} onClick={() => onClick(tag.id)}>
            <div dangerouslySetInnerHTML={{ __html: twemoji.parse(tag.emoji) }} className="emoji"></div>
            {tag.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
