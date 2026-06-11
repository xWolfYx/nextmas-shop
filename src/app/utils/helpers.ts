import type { Gift } from "../lib/types";

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
