"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { I18nProvider } from "../components/I18nProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange storageKey="acme-theme">
        <I18nProvider>{children}</I18nProvider>
      </ThemeProvider>
    </NextUIProvider>
  );
}
