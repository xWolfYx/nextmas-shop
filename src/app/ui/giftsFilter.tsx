import clsx from "clsx";

export default function GiftsFilter({
	activeFilter,
	setActiveFilter,
}: {
	activeFilter: string;
	setActiveFilter: (val: string) => void;
}) {
	const filterBtns = ["all", "for work", "for health", "for harmony"];

	return (
		<div className="flex sm:flex-row flex-col gap-2">
			{filterBtns.map((filter) => (
				<button
					type="button"
					key={filter}
					className={clsx(
						"hover:bg-[#ffffff33] px-5 py-3 rounded-xl font-semibold text-[0.75rem] text-white uppercase tracking-[0.037rem] duration-400 cursor-pointer",
						activeFilter === filter && "bg-[#ffffff33] pointer-events-none",
					)}
					onClick={() => setActiveFilter(filter.toLowerCase())}
				>
					{filter}
				</button>
			))}
		</div>
	);
}
