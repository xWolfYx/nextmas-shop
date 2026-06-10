export type Gift = {
	name: string;
	description: string;
	category: "For Work" | "For Health" | "For Harmony";
	superpowers: Superpowers;
};

export type Superpowers = {
	live: number;
	create: number;
	love: number;
	dream: number;
};
