"use client";
import React from "react";
import twemoji from "twemoji";
import { DateTime } from "../../../../components/DateTime";
import { Chip } from "@nextui-org/react";
import { PencilIcon } from "../../../../components/Icons/PencilIcon";
import { RefreshIcon } from "../../../../components/Icons/RefreshIcon";
import { ArticleType } from "../../../../libs/client";
import { Tag } from "../../../../components/Tag";
import { Advertisements } from "../../../../components/Advertisements";
import { useLang } from "../../../../hooks/useLang";

export const Article: React.FC<ArticleType> = ({ id, title, content, publishedAt, revisedAt, tags, title_en, content_en }) => {
  const tag = tags?.[0]?.emoji ?? "📝";
  const emoji = twemoji.parse(tag);
  const { isJapanese } = useLang();
  return (
    <div className="mx-5 ">
      <div className="flex justify-center py-10 bg-gray-100 dark:bg-gray-700 my-5 rounded-lg flex-col items-center space-y-5">
        <div dangerouslySetInnerHTML={{ __html: emoji }}></div>
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
            <div className="flex gap-x-2">{tags?.map((tag) => <Tag id={tag.id} name={tag.name} key={tag.id} />)}</div>
          </div>
        </div>
        <div className="dark:text-slate-200 mb-[100px]" dangerouslySetInnerHTML={{ __html: isJapanese ? content : content_en }} />
        <Advertisements />
      </div>
    </div>
  );
};
