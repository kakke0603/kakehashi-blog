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
  tags: Array<{ id: string; name: string; emoji: string }>;
  title_en?: string;
  content_en?: string;
};
