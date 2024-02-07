import { Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function ToggleLanguageButton({ params: { lang } }) {
  const onClick = () => {};
  const url = new URL(process.env.URL ?? "http://localhost:3000");

  return (
    <Button isIconOnly color="default" onClick={onClick} variant="flat">
      {lang === "ja" ? <Link href={url}>ja</Link> : <Link href={url + "/en"}>en</Link>}
    </Button>
  );
}
