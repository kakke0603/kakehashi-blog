"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const PUBLISHER_ID = "1124456984547171";

declare global {
  interface Window {
    adsbygoogle: { [key: string]: unknown }[];
  }
}

type GoogleAdProps = {
  slot: string;
  responsive?: string;
  style?: any;
};

const GoogleAd = ({ slot, style, responsive = "true" }: GoogleAdProps) => {
  let pathname = usePathname();
  pathname = pathname ? pathname : "";

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      console.log("adsbygoogle.push");
    } catch (err) {
      console.error(err);
    }
  }, [pathname]);

  return (
    <div key={pathname.replace(/\//g, "-") + "-" + slot}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%", ...style }}
        data-ad-client={`ca-pub-${PUBLISHER_ID}`}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive={responsive}
      />
    </div>
  );
};

export default GoogleAd;
