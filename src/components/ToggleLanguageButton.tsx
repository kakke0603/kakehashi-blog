import { useLang } from "@/hooks/useLang";
import { useUrl } from "@/hooks/useUrl";
import { Button, Link } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

export default function ToggleLanguageButton({ params: { lang } }) {
  const { isJapanese } = useLang();
  const { url } = useUrl();
  return (
    <div>
      <Link href={url.href}>ja</Link>/<Link href={url.href + "/en"}>en</Link>
    </div>
  );
}
