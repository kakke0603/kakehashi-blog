"use client";
import React from "react";
import twemoji from "twemoji";
import { DateTime } from "@/components/DateTime";
import { Chip } from "@nextui-org/react";
import { PencilIcon } from "@/components/Icons/PencilIcon";
import { RefreshIcon } from "@/components/Icons/RefreshIcon";
import { ArticleType } from "@/libs/client";
import { Tag } from "@/components/Tag";

export const Article: React.FC<ArticleType> = ({ id, title, content, publishedAt, revisedAt, tags }) => {
  const tag = tags?.[0]?.emoji ?? "📝";
  const emoji = twemoji.parse(tag);
  return (
    <div className="mx-5 ">
      <div className="flex justify-center py-10 bg-gray-100 dark:bg-gray-700 my-5 rounded-lg flex-col items-center space-y-5">
        <div dangerouslySetInnerHTML={{ __html: emoji }}></div>
        <h1 className="text-3xl font-bold break-words border-none text-center">{title}</h1>
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
        <div className="dark:text-slate-200 mb-[100px]" dangerouslySetInnerHTML={{ __html: content }} />
        <a href="https://px.a8.net/svt/ejp?a8mat=3Z0CMV+2Z6SY+5GDG+ZTNGX" rel="nofollow">
          <img width="300" height="250" alt="" src="https://www23.a8.net/svt/bgt?aid=240201463005&wid=001&eno=01&mid=s00000025450006017000&mc=1" />
        </a>
        <img width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=3Z0CMV+2Z6SY+5GDG+ZTNGX" alt="" />
      </div>
    </div>
  );
};
