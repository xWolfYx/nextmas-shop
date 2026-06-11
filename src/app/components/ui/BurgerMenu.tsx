import clsx from "clsx";
import ListItems from "./ListItems";

export default function BurgerMenu({
	isOpen,
	onBurgerOpen,
}: {
	isOpen: boolean;
	onBurgerOpen: () => void;
}) {
	return (
		<div
			className={clsx(
				"md:hidden fixed bg-white w-full h-full duration-400",
				!isOpen && "translate-x-full",
			)}
		>
			<ul className="md:hidden flex flex-col justify-center items-center gap-2 *:px-5 *:py-3 h-full font-semibold uppercase tracking-[0.037rem]">
				<ListItems
					classList="cursor-pointer content-center rounded-xl px-5 py-3 text-[1.5rem] tracking-[0.24rem] duration-400 hover:bg-[#ff46461a] hover:text-[#ff4646]"
					callback={onBurgerOpen}
				/>
			</ul>
		</div>
	);
}
