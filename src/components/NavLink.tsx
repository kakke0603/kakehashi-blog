import { Link } from "@nextui-org/react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} isDisabled={isActive}>
      {children}
    </Link>
  );
}
