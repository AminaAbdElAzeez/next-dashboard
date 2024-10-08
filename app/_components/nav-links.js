"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks({ children, href }) {
  const path = usePathname();

  return (
    <Link href={href} className={path === href ? "nav active" : "nav"}>
      {children}
    </Link>
  );
}
