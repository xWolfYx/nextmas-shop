"use client";

import { Fragment, useEffect, useState } from "react";
import { PiLineVerticalThin } from "react-icons/pi";
import type { TimeLeft } from "@/app/lib/types";
import { getRemainingTimeToNewYear } from "@/app/utils/helpers";

const labels = ["Days", "Hours", "Minutes", "Seconds"] as const;

type Label = (typeof labels)[number];
type TimeLeftKey = Lowercase<Label>;

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
