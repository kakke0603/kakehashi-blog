"use client";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import ToggleDarkModeButton from "./ToggleDarkModeButton";
import ToggleLanguageButton from "./ToggleLanguageButton";
import { usePathname } from "next/navigation";

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname();
  const isDisabledAbout = pathname === "/about" || pathname === "/en/about";
  const isDisabledArticles = pathname === "/articles" || pathname === "/en/articles";
  const isDisabledPlayground = pathname === "/playground" || pathname === "/en/playground";
  const isDisabledTags = pathname === "/tags" || pathname === "/en/tags";
  const isDisabledContact = pathname === "/contact" || pathname === "/en/contact";
  const isDisabledProducts = pathname === "/products" || pathname === "/en/products";
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
          <Link href="/about" isDisabled={isDisabledAbout}>
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/articles" isDisabled={isDisabledArticles}>
            Articles
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/tags" isDisabled={isDisabledTags}>
            tags
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/playground" isDisabled={isDisabledPlayground}>
            Playground
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/products" isDisabled={isDisabledProducts}>
            Products
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact" isDisabled={isDisabledContact}>
            ContactMe
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
          <Link href="/about" isDisabled={isDisabledAbout}>
            About
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/articles" isDisabled={isDisabledArticles}>
            Articles
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/tags" isDisabled={isDisabledTags}>
            tags
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/playground" isDisabled={isDisabledPlayground}>
            Playground
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/products" isDisabled={isDisabledProducts}>
            Products
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/contact" isDisabled={isDisabledContact}>
            ContactMe
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
