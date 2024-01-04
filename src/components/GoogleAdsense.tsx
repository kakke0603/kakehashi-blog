"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

const PUBLISHER_ID = "1124456984547171"

declare global {
  interface Window {
    adsbygoogle: { [key: string]: unknown }[]
  }
}

type GoogleAdProps = {
  slot: string
  style?: any
}

const GoogleAd = ({ slot, style }: GoogleAdProps) => {
  let pathname = usePathname()
  pathname = pathname ? pathname : ""

  useEffect(() => {
    const adsScript = document.createElement("script")
    adsScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    adsScript.async = true
    document.body.appendChild(adsScript)
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error(err)
    }
    return () => {
      document.body.removeChild(adsScript)
    }
  }, [pathname])

  return (
    <div key={pathname.replace(/\//g, "-") + "-" + slot}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%", ...style }}
        data-ad-client={`ca-pub-${PUBLISHER_ID}`}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}

export default GoogleAd
