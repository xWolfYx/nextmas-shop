import type { Gift, TimeLeft } from "../lib/types";

export function shuffleArray<T>(array: T[]): T[] {
	const shuffled = [...array];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}

export function filterGifts(array: Gift[], filterType: string): Gift[] {
	const normalizedFilter = filterType.toLocaleLowerCase();

	if (normalizedFilter === "all" || !filterType) return array;
	return array.filter(
		(item) => item.category.toLowerCase() === normalizedFilter,
	);
}

export function getRemainingTimeToNewYear(): TimeLeft {
	const targetDate = Number(
		new Date(Date.UTC(new Date().getFullYear() + 1, 0, 1, 0, 0)),
	);
	const currentTime = Date.now();
	const diff = targetDate - currentTime;

	return {
		days: Math.floor(diff / (1000 * 60 * 60 * 24)),
		hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
		minutes: Math.floor((diff / (1000 * 60)) % 60),
		seconds: Math.floor((diff / 1000) % 60),
	};
}
