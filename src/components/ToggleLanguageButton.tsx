import { Button, Link } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

export default function ToggleLanguageButton({ params: { lang } }) {
  const url = new URL(process.env.URL ?? "http://localhost:3000");
  const isJapanese = url.pathname === "/";
  const isEnglish = url.pathname.endsWith("/en");
  return (
    <div>
      <Link href={url.toString()}>ja</Link>/<Link href={url + "/en"}>en</Link>
    </div>
  );
}
