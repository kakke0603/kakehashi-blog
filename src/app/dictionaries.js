import "server-only";
import { i18n } from "./i18n-config";

const dictionaries = {
  en: () => import("./[en]/en.json").then((module) => module.default),
  ja: () => import("./[ja]/ja.json").then((module) => module.default),
};

export const getDictionary = async (locale) => dictionaries[i18n.locales.includes(locale) ? locale : i18n.defaultLocale]();
