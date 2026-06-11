import clsx from "clsx";
import Image from "next/image";

export default function Gift({
	name,
	category,
	onClick,
}: {
	name: string;
	category: string;
	onClick: () => void;
}) {
	return (
		<div
			className="group bg-[#ecf3f8] rounded-[1.25rem] max-w-77.5 *:group-hover:text-[rgb(255,70,70)] *:transition *:duration-150 cursor-pointer"
			onClick={onClick}
		>
			<div className="rounded-[1.25rem]">
				<Image
					src={clsx(
						category === "For Work" && "/gifts/gift-for-work.png",
						category === "For Health" && "/gifts/gift-for-health.png",
						category === "For Harmony" && "/gifts/gift-for-harmony.png",
					)}
					width={400}
					height={400}
					alt={name}
					className="w-77.5 h-57.5"
				/>
			</div>
			<div className="flex flex-col gap-2 bg-white p-5 rounded-[1.25rem] h-28">
				<span
					style={{
						color: clsx(
							category === "For Work" && "#4361ff",
							category === "For Health" && "#06a44f",
							category === "For Harmony" && "#ff43f7",
						),
					}}
					className="font-semibold text-[0.75rem] uppercase tracking-[0.063rem]"
				>
					{category}
				</span>
				<span className="font-semibold uppercase tracking-[0.08rem]">
					{name}
				</span>
			</div>
		</div>
	);
}
