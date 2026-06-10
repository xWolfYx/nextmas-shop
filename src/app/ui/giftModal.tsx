"use client";

import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { Gift } from "../lib/types";

export default function GiftModal({
	activeGift,
	onModalClose,
}: {
	activeGift: string | null;
	onModalClose: (name: string | null) => void;
}) {
	const [gift, setGift] = useState<Gift | null>(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (!activeGift) {
			setGift(null);
			return;
		}

		async function fetchGift() {
			setLoading(true);
			try {
				const res = await fetch("/fake-database.json");
				const data = (await res.json()) as Gift[];
				const foundGift = data.find((d) => d.name === activeGift);

				setGift(foundGift || null);
			} catch (error) {
				console.log(`Error fetching gift details: ${error}`);
			} finally {
				setLoading(false);
			}
		}

		fetchGift();
	}, [activeGift]);

	return (
		activeGift && (
			<div
				className={clsx(
					"fixed inset-0 justify-center items-center bg-[rgba(24,28,41,0.8)]",
					activeGift ? "flex" : "hidden",
				)}
			>
				<div className="relative bg-[rgb(236,243,248)] rounded-[1.25rem] w-[min(95%,25rem)]">
					<button
						type="button"
						onClick={() => onModalClose(null)}
						className="top-2 right-2 absolute flex flex-col justify-center items-center gap-2 size-10"
					>
						<div className="bg-[#191c29] rounded-[20px] w-5 h-px -rotate-45 translate-y-1.25"></div>
						<div className="bg-[#191c29] rounded-[20px] w-5 h-px rotate-45 -translate-y-1"></div>
					</button>
					{gift && (
						<Image
							src={clsx(
								gift?.category === "For Work" && "/gifts/gift-for-work.png",
								gift?.category === "For Health" && "/gifts/gift-for-health.png",
								gift?.category === "For Harmony" &&
									"/gifts/gift-for-harmony.png",
							)}
							alt=""
							width={620}
							height={460}
							className="h-14.375"
						/>
					)}
					<div className="flex flex-col gap-2 bg-white p-5 rounded-[1.25rem]">
						<h4
							style={{
								color: clsx(
									gift?.category === "For Work" && "#4361ff",
									gift?.category === "For Health" && "#06a44f",
									gift?.category === "For Harmony" && "#ff43f7",
								),
							}}
							className="font-semibold text-[0.75rem] uppercase tracking-[0.063rem]"
						>
							{gift?.category}
						</h4>
						<h3 className="font-semibold uppercase leading-[1.52] tracking-[0.08rem]">
							{gift?.name}
						</h3>
						<p className="leading-[1.48]">{gift?.description} </p>
						<h4 className="font-semibold text-[0.75rem] uppercase tracking-[0.063rem]">
							Adds Powers To:
						</h4>
						<div className="*:gap-2 *:grid *:grid-cols-[1fr_auto_auto]">
							<div>
								<span className="leading-[1.48]">Live</span>
								<span className="leading-[1.48]">
									+{gift?.superpowers.live}
								</span>
								<div className="flex justify-center items-center *:size-4">
									<Snowflakes count={gift?.superpowers.live} />
								</div>
							</div>
							<div>
								<span className="leading-[1.48]">Create</span>
								<span className="leading-[1.48]">
									+{gift?.superpowers.create}
								</span>
								<div className="flex justify-center items-center *:size-4">
									<Snowflakes count={gift?.superpowers.create} />
								</div>
							</div>
							<div>
								<span className="leading-[1.48]">Love</span>
								<span className="leading-[1.48]">
									+{gift?.superpowers.love}
								</span>
								<div className="flex justify-center items-center *:size-4">
									<Snowflakes count={gift?.superpowers.love} />
								</div>
							</div>
							<div>
								<span className="leading-[1.48]">Dream</span>
								<span className="leading-[1.48]">
									+{gift?.superpowers.dream}
								</span>
								<div className="flex justify-center items-center">
									<Snowflakes count={gift?.superpowers.dream} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	);
}

function Snowflakes({ count }: { count: number }) {
	const emptyArray = Array.from({ length: 5 });
	return emptyArray.map((_, i) => (
		<Image
			src="/snowflake-logo.png"
			alt=""
			key={i}
			width={16}
			height={16}
			className={clsx("size-4", i >= count / 100 && "opacity-50")}
		/>
	));
}
