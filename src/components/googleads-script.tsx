import Script from "next/script"

const PUBLISHER_ID = "1124456984547171"

export const GoogleAdScript = () => {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${PUBLISHER_ID}`}
      crossOrigin="anonymous"
      strategy="lazyOnload"
    />
  )
}
