"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

const GoogleAd = ({ slotId }: { slotId: string }) => {
  const pathname = usePathname()

  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})
    } catch (e) {
      console.error(e)
    }
  }, [pathname])

  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-adtest={process.env.NODE_ENV === "development" ? "on" : "off"}
        data-ad-client="ca-pub-1124456984547171"
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}

export default GoogleAd
