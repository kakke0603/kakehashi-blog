"use client"
import { useCallback, useEffect } from "react"

export const useGoogleAdsense = () => {
  const loadAd = useCallback(() => {
    ;(window.adsbygoogle = window.adsbygoogle || []).push({})
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const nextElement = window.document.getElementById("__next")
      if (nextElement) {
        const component = nextElement.querySelector(`.adsbygoogle`)
        if (component) {
          component.addEventListener("load", loadAd)
        }
      }
    }
    return () => {
      if (typeof window !== "undefined") {
        const nextElement = window.document.getElementById("__next")
        if (nextElement) {
          const component = nextElement.querySelector(`.adsbygoogle`)
          if (component) {
            component.removeEventListener("load", loadAd)
          }
        }
      }
    }
  }, [])
}
