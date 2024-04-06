/* eslint-disable @next/next/no-async-client-component */
"use client";
import { TagType } from "../../libs/client";
import React from "react";
import { Tag } from "../Tag";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useLang } from "../../hooks/useLang";

export default async function Tags({ tags }: { tags: TagType[] }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { isJapanese } = useLang();
  const onClick = (id: string) => {
    isJapanese ? router.push(`/tags/${id}`) : router.push(`/en/tags/${id}`);
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return (
    <div className="flex flex-col gap-3">
      <div className="font-bold underline">Tags</div>
      <div className="flex gap-2 flex-wrap">
        {tags?.map((tag) => (
          <Button key={tag.id} onClick={() => onClick(tag.id)}>
            <div className="emoji">{tag.emoji}</div>
            {isJapanese ? tag.name : tag.name_en}
          </Button>
        ))}
      </div>
    </div>
  );
}
