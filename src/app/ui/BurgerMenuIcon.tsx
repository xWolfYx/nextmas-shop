import clsx from "clsx";

export default function BurgerMenuIcon({
	isOpen,
	onBurgerOpen,
}: {
	isOpen: boolean;
	onBurgerOpen: () => void;
}) {
	return (
		<button
			type="button"
			className="md:hidden flex flex-col justify-center items-center gap-2 size-[40] *:duration-400"
			onClick={onBurgerOpen}
		>
			<div
				className={clsx(
					"bg-[#191c29] rounded-[20px] w-5 h-px",
					isOpen && "translate-y-1.25 -rotate-45",
				)}
			></div>
			<div
				className={clsx(
					"bg-[#191c29] rounded-[20px] w-5 h-px",
					isOpen && "-translate-y-1 rotate-45",
				)}
			></div>
		</button>
	);
}
