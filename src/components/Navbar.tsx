"use client";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import ToggleDarkModeButton from "./ToggleDarkModeButton";
import ToggleLanguageButton from "./ToggleLanguageButton";

export default function index() {
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
          <Link href="/about" isDisabled={window.location.href.includes("about")}>
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/articles" isDisabled={window.location.href.includes("articles")}>
            Articles
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/playground" isDisabled={window.location.href.includes("playground")}>
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
          <Link href="/about" isDisabled={window.location.href.includes("about")}>
            About
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/articles" isDisabled={window.location.href.includes("articles")}>
            Articles
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/playground" isDisabled={window.location.href.includes("playground")}>
            Playground
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
