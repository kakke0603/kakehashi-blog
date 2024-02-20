"use client";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import ToggleDarkModeButton from "./ToggleDarkModeButton";
import ToggleLanguageButton from "./ToggleLanguageButton";
import { usePathname } from "next/navigation";

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname();
  return (
    <Navbar shouldHideOnScroll>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarContent>
        <NavbarBrand className="justify-center sm:justify-start">
          <a className="font-bold text-inherit no-underline" href="/">
            Kakke-Blog
          </a>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4">
        <NavbarItem>
          <Link href="/about" isDisabled={pathname === "/about" || pathname === "/en/about"}>
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/articles" isDisabled={pathname === "/articles" || pathname === "/en/articles"}>
            Articles
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/playground" isDisabled={pathname === "/playground" || pathname === "/en/playground"}>
            Playground
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ToggleDarkModeButton />
        </NavbarItem>
        <NavbarItem>
          <ToggleLanguageButton />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link href="/about" isDisabled={pathname === "/about" || pathname === "/en/about"}>
            About
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/articles" isDisabled={pathname === "/articles" || pathname === "/en/articles"}>
            Articles
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/playground" isDisabled={pathname === "/playground" || pathname === "/en/playground"}>
            Playground
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
