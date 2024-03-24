"use client";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

const GoogleAnalytics: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    const url = pathname + searchParams.toString();
    if (process.env.NODE_ENV == "production") {
      window.gtag("config", "G-NKPFTZEMEG", {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);
  if (process.env.NODE_ENV !== "production") {
    return null;
  }
  return (
    <>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=G-NKPFTZEMEG`} crossOrigin="anonymous" strategy="afterInteractive" />;
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NKPFTZEMEG', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
