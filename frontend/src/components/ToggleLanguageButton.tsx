"use client";
import { Button, Link } from "@nextui-org/react";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useLang } from "../hooks/useLang";

export default function ToggleLanguageButton() {
  const pathname = usePathname();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isJapanese } = useLang();
  const router = useRouter();
  const url = isJapanese ? pathname.replace("/", "/en/") : pathname.includes("/en") ? pathname.replace("/en", "/") : pathname;
  return (
    <div>
      {isJapanese ? (
        <Button isIconOnly color="default" onClick={() => router.push(window.location.origin + url)} variant="flat">
          en
        </Button>
      ) : (
        <Button isIconOnly color="default" onClick={() => router.push(window.location.origin + url)} variant="flat">
          ja
        </Button>
      )}
    </div>
  );
}
