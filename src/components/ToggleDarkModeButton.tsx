import { Button } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import React from 'react'
import { SunIcon } from './Icons/SunIcon'
import { MoonIcon } from './Icons/MoonIcon'

export default function ToggleDarkModeButton() {
  const { theme, setTheme } = useTheme()
  const onClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <Button isIconOnly color="default" onClick={onClick} variant="flat">
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}
