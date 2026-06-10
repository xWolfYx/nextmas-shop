"use client";

import { Fragment, useEffect, useState } from "react";

const labels = ["Days", "Hours", "Minutes", "Seconds"] as const;

type Label = (typeof labels)[number];
type TimeLeftKey = Lowercase<Label>;

type TimeLeft = {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
};

export default function Timer() {
	const [timeLeft, setTimeLeft] = useState<TimeLeft>(
		getRemainingTimeToNewYear(),
	);

	useEffect(() => {
		const interval = setInterval(() => {
			setTimeLeft(getRemainingTimeToNewYear());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex justify-center items-center bg-[#ffffff66] p-3 rounded-[1.25rem] font-semibold text-white uppercase">
			{labels.map((label, i) => {
				const key = label.toLowerCase() as TimeLeftKey;

				return (
					<Fragment key={label}>
						{i > 0 && <Divider />}
						<div className="flex flex-col items-center w-20">
							<span className="text-2xl tracking-[0.24rem]">
								{timeLeft[key]}
							</span>
							<span className="text-[0.75rem] tracking-[0.063rem]">
								{timeLeft[key] === 1 ? label.slice(0, -1) : label}
							</span>
						</div>
					</Fragment>
				);
			})}
		</div>
	);
}

function Divider() {
	return (
		<svg
			width="1"
			height="20"
			viewBox="0 0 1 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<line
				x1="0.5"
				y1="20"
				x2="0.500001"
				y2="-2.18557e-08"
				stroke="white"
				strokeOpacity="0.4"
			/>
		</svg>
	);
}

function getRemainingTimeToNewYear(): TimeLeft {
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
