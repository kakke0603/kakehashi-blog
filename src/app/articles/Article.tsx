'use client'
import { Card, CardBody, CardHeader, Image } from '@nextui-org/react'
import React from 'react'

export type ArticleType = {
  id: string
  title: string
  content: string
  publishedAt: string
  revisedAt: string
  eyecatch: {
    url: string
    height: number
    width: number
  }
}
export const Article: React.FC<ArticleType> = ({
  id,
  title,
  content,
  publishedAt,
  revisedAt,
  eyecatch,
}) => {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <small className="text-default-500">{publishedAt}</small>
        <h4 className="font-bold text-large">{title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={eyecatch.url}
          width={220}
        />
      </CardBody>
    </Card>
  )
}
