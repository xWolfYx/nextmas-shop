"use client";

import { Fragment, useEffect, useState } from "react";
import { PiLineVerticalThin } from "react-icons/pi";

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
		<div className="items-center grid grid-cols-[repeat(3,4.5rem_10)4.5rem] bg-[#ffffff66] p-3 rounded-[1.25rem] font-semibold text-white uppercase">
			{labels.map((label, i) => {
				const key = label.toLowerCase() as TimeLeftKey;

				return (
					<Fragment key={label}>
						{i > 0 && (
							<div>
								<PiLineVerticalThin className="text-white scale-y-150 -translate-x-1 -translate-y-1" />
							</div>
						)}

						<div className="flex flex-col items-center">
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
