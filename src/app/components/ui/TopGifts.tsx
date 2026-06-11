"use client";

import { useEffect, useState } from "react";
import type { Gift as GiftType } from "@/app/lib/types";
import { shuffleArray } from "@/app/utils/helpers";
import Gift from "./Gift";
import GiftModal from "./GiftModal";

export default function TopGifts() {
	const [bestGifts, setBestGifts] = useState<GiftType[]>([]);
	const [activeGift, setActiveGift] = useState<string | null>(null);

	const handleSetActiveGift = (name: string | null) => setActiveGift(name);

	useEffect(() => {
		async function loadData() {
			const res = await fetch("/fake-database.json");
			const data = (await res.json()) as GiftType[];

			setBestGifts(shuffleArray(data).slice(0, 4));
		}

		loadData();
	}, []);

	return (
		<div>
			<div className="justify-center items-center gap-3 grid grid-cols-[repeat(auto-fill,19.375rem)] w-full">
				{bestGifts.map(({ name, category }) => (
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
