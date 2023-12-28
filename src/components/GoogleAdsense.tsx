import { useEffect } from "react"

type GoogleAdsenseProps = {
  client: string
  slot: string
  style?: React.CSSProperties
}

declare global {
  interface Window {
    adsbygoogle: { [key: string]: unknown }[]
  }
}

const GoogleAdsense = ({ client, slot, style }: GoogleAdsenseProps) => {
  useEffect(() => {
    const adsScript = document.createElement("script")
    adsScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    adsScript.async = true
    document.body.appendChild(adsScript)

    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error(err)
    }

    return () => {
      document.body.removeChild(adsScript)
    }
  }, [])

  return (
    <div className="align-center text-center">
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  )
}

export default GoogleAdsense
