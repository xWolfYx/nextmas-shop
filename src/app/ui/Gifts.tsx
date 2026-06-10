"use client";

import { useEffect, useState } from "react";
import Gift from "./Gift";
import GiftModal from "./giftModal";

type Gifts = {
	name: string;
	category: string;
};

export default function Gifts() {
	const [gifts, setGifts] = useState<Gifts[]>([]);
	const [activeGift, setActiveGift] = useState<string | null>(null);

	const handleSetActiveGift = (name: string | null) => {
		setActiveGift(name);
	};

	useEffect(() => {
		async function loadData() {
			const res = await fetch("/fake-database.json");
			const data = await res.json();
			setGifts(data);
		}

		loadData();
	}, []);

	return (
		<div className="flex flex-col items-center gap-5 bg-[#ff4646] bg-[url(/backgrounds/bg-garland.png)] bg-contain bg-no-repeat py-15 rounded-[1.25rem]">
			<h1 className="font-semibold text-[2rem] text-white text-center uppercase tracking-[0.36rem]">
				Achieve health,
				<br /> harmony, and
				<br /> inner strength
			</h1>
			<GiftsFilter />
			<div className="justify-center items-center gap-3 grid grid-cols-[repeat(auto-fill,19.375rem)] w-full">
				{gifts.map(({ name, category }) => (
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

function GiftsFilter() {
	return (
		<div className="flex sm:flex-row flex-col gap-2 *:hover:bg-[#ffffff33] *:px-5 *:py-3 *:rounded-xl font-semibold text-white *:text-[0.75rem] *:uppercase *:tracking-[0.037rem] *:duration-400 *:cursor-pointer">
			<button type="button">All</button>
			<button type="button">For work</button>
			<button type="button">For health</button>
			<button type="button">For harmony</button>
		</div>
	);
}
