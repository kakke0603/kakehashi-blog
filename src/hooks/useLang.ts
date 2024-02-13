import i18nConfig from "../app/i18nConfig";
import { useCurrentLocale } from "next-i18n-router/client";

export const useLang = () => {
  const locale = useCurrentLocale(i18nConfig);
  const isJapanese = locale === "ja";
  return { isJapanese };
};
