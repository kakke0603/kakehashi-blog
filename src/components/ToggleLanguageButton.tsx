import { Button, Link } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

export default function ToggleLanguageButton({ params: { lang } }) {
  return (
    <div>
      <Link href={"/"}>ja</Link>/<Link href={"/en"}>en</Link>
    </div>
  );
}
