import { createClient } from "microcms-js-sdk"; //ES6

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN ?? "",
  apiKey: process.env.MICROCMS_API_KEY ?? "",
});

export const getAllArticles = async () => {
  return await client.getList<ArticleType>({
    endpoint: "articles",
    queries: {
      limit: 1000,
      fields: "id",
      orders: "-createdAt",
    },
  });
};

export const getArticles = async (offset: number) => {
  return await client
    .getList<ArticleType[]>({
      endpoint: "articles",
      queries: {
        limit: 10,
        offset,
      },
    })
    .then((res) => res.contents);
};

export const getArticle = async (id: string) => {
  const data: ArticleType = await client
    .get({
      endpoint: "articles",
      contentId: id,
      customRequestInit: {},
    })
    .then((res) => res);
  return data;
};

export type ArticleType = {
  id: string;
  title?: string;
  content?: string;
  publishedAt: string;
  revisedAt: string;
  tags?: Array<{ id: string; name: string; emoji: string; name_en: string }>;
  title_en?: string;
  content_en?: string;
};

export function isArticleType(obj: any): obj is ArticleType {
  if (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.id === "string" &&
    typeof obj.publishedAt === "string" &&
    typeof obj.revisedAt === "string" &&
    Array.isArray(obj.tags) &&
    obj.tags.every(
      (tag) =>
        typeof tag === "object" &&
        tag !== null &&
        typeof tag.id === "string" &&
        typeof tag.name === "string" &&
        typeof tag.emoji === "string" &&
        typeof tag.name_en === "string"
    )
  ) {
    // オプションのプロパティが全て文字列であることを確認する
    if (typeof obj.title === "undefined" || typeof obj.title === "string") {
      if (typeof obj.content === "undefined" || typeof obj.content === "string") {
        if (typeof obj.title_en === "undefined" || typeof obj.title_en === "string") {
          if (typeof obj.content_en === "undefined" || typeof obj.content_en === "string") {
            return true;
          }
        }
      }
    }
  }
  return false;
}
