"use client";
import { DateTime } from "../../components//DateTime";
import { Card, CardBody } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";
import { PencilIcon } from "../../components//Icons/PencilIcon";
import { RefreshIcon } from "../../components//Icons/RefreshIcon";
import { StaticImageData } from "next/image";
import Image from "next/image";

type PlaygroundType = {
  id: string;
  image: string;
  title: string;
  content: string;
  publishedAt: string;
  revisedAt: string;
};
export const PlaygroundCard: React.FC<PlaygroundType> = ({ id, image, title, content, publishedAt, revisedAt }) => {
  const router = useRouter();
  const handleClick = () => router.push(`/playground/${id}`);
  return (
    <Card className="py-4 w-full" isPressable onPress={handleClick}>
      <CardBody>
        <div className="gap-x-4 flex flex-row gap-y-4">
          <div className="w-[70px] h-[70px] border-[4px] bg-gray-100 dark:bg-gray-700 rounded-lg">
            <Image src={image} width={70} height={70} alt="" />
          </div>
          <div className="space-y-4 w-[230px]">
            <h4 className="font-bold text-large block">{title}</h4>
            <div className="">{content}</div>
          </div>
        </div>
        <div className="mt-4 flex gap-x-4 flex-wrap gap-y-1 justify-end">
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
      </CardBody>
    </Card>
  );
};
