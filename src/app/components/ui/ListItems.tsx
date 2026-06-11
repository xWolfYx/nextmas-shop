"use client";

import { clsx } from "clsx";
import Link from "next/link";
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
				<li key={link.href}>
					<Link
						href={link.href}
						onClick={callback}
						className={clsx(
							`${classList}`,
							pathName === link.href &&
								"pointer-events-none bg-[#ff46461a] text-[#ff4646]",
						)}
					>
						{link.text}
					</Link>
				</li>
			))}
		</>
	);
}
