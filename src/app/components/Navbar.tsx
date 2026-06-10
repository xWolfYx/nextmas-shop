import Image from "next/image";
import Link from "next/link";
import BurgerMenuIcon from "../ui/BurgerMenuIcon";
import ListItems from "../ui/ListItems";

export default function Navbar({
	isOpen,
	onBurgerOpen,
}: {
	isOpen: boolean;
	onBurgerOpen: () => void;
}) {
	return (
		<nav className="flex justify-between items-center px-2 md:px-20.5 py-3">
			<Link
				href="/"
				className="flex *:content-center gap-2 px-5 py-2 cursor-pointer"
			>
				<Image
					src="/snowflake-logo.png"
					width={96}
					height={96}
					alt="Snowflake icon"
					className="self-center w-6 h-6"
				/>
				<span className="font-semibold text-[0.75rem] uppercase tracking-[0.037rem]">
					The Gifts
				</span>
			</Link>
			<ul className="hidden md:flex gap-2 font-semibold uppercase tracking-[0.037rem]">
				<ListItems classList="cursor-pointer content-center rounded-xl px-5 py-3 text-[0.75rem] duration-400 hover:bg-[#ff46461a] hover:text-[#ff4646]" />
			</ul>
			<BurgerMenuIcon isOpen={isOpen} onBurgerOpen={onBurgerOpen} />
		</nav>
	);
}
