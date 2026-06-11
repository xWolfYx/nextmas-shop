"use client";

import { useEffect, useState } from "react";
import type { Gift as GiftType } from "@/app/lib/types";
import { filterGifts, shuffleArray } from "@/app/utils/helpers";
import Gift from "./Gift";
import GiftModal from "./GiftModal";
import GiftsFilter from "./GiftsFilter";

export default function Gifts() {
	const [allGifts, setAllGifts] = useState<GiftType[]>([]);
	const [activeGift, setActiveGift] = useState<string | null>(null);
	const [activeFilter, setActiveFilter] = useState<string>("all");

	const handleSetActiveGift = (name: string | null) => setActiveGift(name);

	useEffect(() => {
		async function loadData() {
			const res = await fetch("/fake-database.json");
			const data = await res.json();

			setAllGifts(shuffleArray(data));
		}

		loadData();
	}, []);

	const visibleGifts = filterGifts(allGifts, activeFilter);

	return (
		<div className="flex flex-col items-center gap-5 bg-[#ff4646] bg-[url(/backgrounds/bg-garland.png)] bg-contain bg-no-repeat py-15 rounded-[1.25rem]">
			<h1 className="font-semibold text-[2rem] text-white text-center uppercase tracking-[0.36rem]">
				Achieve health,
				<br /> harmony, and
				<br /> inner strength
			</h1>
			<GiftsFilter
				activeFilter={activeFilter}
				setActiveFilter={setActiveFilter}
			/>
			<div className="justify-center items-center gap-3 grid grid-cols-[repeat(auto-fill,19.375rem)] w-full">
				{visibleGifts.map(({ name, category }) => (
					<Gift
						key={name}
						name={name}
						category={category}
						onClick={() => handleSetActiveGift(name)}
					/>
				))}
			</div>
			<GiftModal activeGift={activeGift} onModalClose={handleSetActiveGift} />
		</div>
	);
}
