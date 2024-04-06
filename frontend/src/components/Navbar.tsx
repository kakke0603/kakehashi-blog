"use client";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import ToggleDarkModeButton from "./ToggleDarkModeButton";
import ToggleLanguageButton from "./ToggleLanguageButton";
import { usePathname } from "next/navigation";
import { useLang } from "../hooks/useLang";

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isJapanese } = useLang();
  const isDisabledTop = pathname === "/" || pathname === "/en/";
  const isDisabledAbout = pathname === "/about" || pathname === "/en/about";
  const isDisabledArticles = pathname === "/articles" || pathname === "/en/articles";
  const isDisabledPlayground = pathname === "/playground" || pathname === "/en/playground";
  const isDisabledTags = pathname === "/tags" || pathname === "/en/tags";
  const isDisabledContact = pathname === "/contact" || pathname === "/en/contact";
  const isDisabledProducts = pathname === "/products" || pathname === "/en/products";
  const isDisabledPrivacy = pathname === "/privacy" || pathname === "/en/privacy";
  return (
    <Navbar shouldHideOnScroll>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarContent>
        <NavbarBrand className="justify-center sm:justify-start">
          <a className="font-bold text-inherit no-underline" href={isJapanese ? "/" : "/en"}>
            Kakke-Blog
          </a>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4">
        <NavbarItem>
          <Link href={isJapanese ? "/about" : "/en/about"} isDisabled={isDisabledAbout}>
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={isJapanese ? "/articles" : "/en/articles"} isDisabled={isDisabledArticles}>
            Articles
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={isJapanese ? "/tags" : "/en/tags"} isDisabled={isDisabledTags}>
            tags
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={isJapanese ? "/playground" : "/en/playground"} isDisabled={isDisabledPlayground}>
            Playground
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={isJapanese ? "/products" : "/en/products"} isDisabled={isDisabledProducts}>
            Products
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={isJapanese ? "/contact" : "/en/contact"} isDisabled={isDisabledContact}>
            ContactMe
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={isJapanese ? "/privacy" : "/en/privacy"} isDisabled={isDisabledPrivacy}>
            PrivacyPolicy
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
          <Link href={isJapanese ? "/" : "/en"} isDisabled={isDisabledTop}>
            Top
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href={isJapanese ? "/about" : "/en/about"} isDisabled={isDisabledAbout}>
            About
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href={isJapanese ? "/articles" : "/en/articles"} isDisabled={isDisabledArticles}>
            Articles
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href={isJapanese ? "/tags" : "/en/tags"} isDisabled={isDisabledTags}>
            tags
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href={isJapanese ? "/playground" : "/en/playground"} isDisabled={isDisabledPlayground}>
            Playground
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href={isJapanese ? "/products" : "/en/products"} isDisabled={isDisabledProducts}>
            Products
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href={isJapanese ? "/contact" : "/en/contact"} isDisabled={isDisabledContact}>
            ContactMe
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href={isJapanese ? "/privacy" : "/en/privacy"} isDisabled={isDisabledPrivacy}>
            PrivacyPolicy
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
