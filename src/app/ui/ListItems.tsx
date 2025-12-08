"use client";

import Link from "next/link";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";

type ListLinks = {
  text: string;
  href: string;
};

const listLinks: ListLinks[] = [
  { text: "Gifts", href: "/gifts" },
  { text: "About", href: "/#about" },
  { text: "Best", href: "/#best" },
  { text: "Contacts", href: "#contacts" },
];

export default function ListItems({
  classList,
  callback,
}: {
  classList: string;
  callback?: () => void;
}) {
  const pathName = usePathname();
  return (
    <>
      {listLinks.map((link) => (
        <li key={link.href} onClick={callback}>
          <Link
            href={link.href}
            className={clsx(`${classList}`, {
              "pointer-events-none bg-[#ff46461a] text-[#ff4646]":
                pathName === link.href,
            })}
          >
            {link.text}
          </Link>
        </li>
      ))}
    </>
  );
}
