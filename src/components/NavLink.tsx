import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={clsx("text-sm", isActive ? "text-cyan-500" : "text-normal no-underline")}>
      {children}
    </Link>
  );
}
