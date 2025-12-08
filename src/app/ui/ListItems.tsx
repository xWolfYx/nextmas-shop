import Link from "next/link";

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
  return (
    <>
      {listLinks.map((link) => (
        <li key={link.href} onClick={callback}>
          <Link href={link.href} className={classList}>
            {link.text}
          </Link>
        </li>
      ))}
    </>
  );
}
