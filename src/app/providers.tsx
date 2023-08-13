// app/providers.tsx
'use client'

import { ThemeProvider } from '@/components/ThemeProvider'
import { NextUIProvider } from '@nextui-org/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme="dark">
        {children}
      </ThemeProvider>
    </NextUIProvider>
  )
}
