import clsx from "clsx";
import Image from "next/image";
import type { ContactInformation } from "./contactCardType";

export default function ContactCard({
	imgSrc,
	contact,
	callToAction,
	type,
}: ContactInformation) {
	return (
		<a
			href={clsx(
				type === "tel" && `tel:${contact}`,
				type === "place" ? contact[0] : contact[1],
				type === "mail" && `mailto:${contact}`,
			)}
			className="flex flex-col flex-1 justify-center items-center gap-3 bg-[#ecf3f8] p-5 rounded-[20px] min-w-82.5 hover:text-[#ff4646] text-center duration-400"
		>
			<Image
				src={imgSrc}
				width={150}
				height={150}
				alt="Footer Image"
				className="w-20"
			/>
			<p className="font-semibold text-2xl/[1.52] uppercase tracking-[0.24rem]">
				{type === "place" ? contact[1] : contact[0]}
			</p>
			<h3 className="font-semibold uppercase tracking-[0.08rem]">
				{callToAction}
			</h3>
		</a>
	);
}
