"use client";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import NavLink from "./NavLink";
import ToggleDarkModeButton from "./ToggleDarkModeButton";
import ToggleLanguageButton from "./ToggleLanguageButton";
import { useLang } from "../hooks/useLang";

export default function index() {
  const { isJapanese } = useLang();
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
          <NavLink href={isJapanese ? "about" : "en/about"}>About</NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink href="/articles">Articles</NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink href="/playground">Playground</NavLink>
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
          <NavLink href="/about">About</NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavLink href="/articles">Articles</NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavLink href="/playground">Playground</NavLink>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
