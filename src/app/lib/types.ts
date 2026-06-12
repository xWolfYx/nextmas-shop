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

export type ContactInformation = {
	imgSrc: string;
	contact: string[];
	callToAction: string;
	type: string;
};

export type TimeLeft = {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
};
