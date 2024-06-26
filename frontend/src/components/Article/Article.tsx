"use client";
import React from "react";
import { DateTime } from "../../components//DateTime";
import { Chip } from "@nextui-org/react";
import { PencilIcon } from "../../components//Icons/PencilIcon";
import { RefreshIcon } from "../../components//Icons/RefreshIcon";
import { ArticleType } from "../../libs/client";
import { Tag } from "../../components//Tag";
import { Advertisements } from "../../components//Advertisement/Advertisements";
import { useLang } from "../../hooks/useLang";
import { BuyMeCoffeeButton } from "../BuyMeCoffeeButton";

export const Article: React.FC<ArticleType> = ({ id, title, content, publishedAt, revisedAt, tags, title_en, content_en }) => {
  const emoji = tags?.[0]?.emoji ?? "📝";
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isJapanese } = useLang();
  return (
    <div className="mx-5 ">
      <div className="flex justify-center py-10 bg-gray-100 dark:bg-gray-700 my-5 rounded-lg flex-col items-center space-y-5">
        <div>{emoji}</div>
        <h1 className="text-3xl font-bold break-words border-none text-center">{isJapanese ? title : title_en}</h1>
      </div>
      <div>
        <div className="flex justify-between flex-wrap gap-y-2">
          <div className="flex gap-x-4 flex-wrap gap-y-1">
            {revisedAt !== publishedAt && (
              <div className="flex items-center">
                <RefreshIcon />
                <DateTime value={revisedAt} className="ml-2" />
              </div>
            )}
            <div className="flex items-center">
              <PencilIcon />
              <DateTime value={publishedAt} className="ml-2" />
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex gap-x-2">{tags?.map((tag) => <Tag id={tag.id} name={isJapanese ? tag.name : tag.name_en} key={tag.id} />)}</div>
          </div>
        </div>
        <div className="dark:text-slate-200 mb-[100px]" dangerouslySetInnerHTML={{ __html: isJapanese ? content : content_en }} />
        <BuyMeCoffeeButton />
      </div>
    </div>
  );
};
