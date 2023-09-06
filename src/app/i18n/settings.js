export const fallbackLng = "ja"
export const languages = [fallbackLng, "en"]
export const defaultNS = "about"

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  }
}
