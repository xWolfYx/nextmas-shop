// import Image from "next/image";
import { allura } from "@/app/ui/fonts";

export default function About() {
	return (
		<section
			id="about"
			className="bg-[#ff4646] bg-[url(/backgrounds/bg-snow.png)] bg-cover bg-center px-2 py-15"
		>
			<div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 bg-white m-auto rounded-[20px] max-w-319">
				<div className="flex flex-col justify-center items-start gap-5 px-15 *:max-w-106.5">
					<p
						className={`${allura.className} text-2xl tracking-[0.075rem] text-[#ff4646]`}
					>
						About
					</p>
					<h2 className="font-semibold text-2xl uppercase tracking-[0.24rem]">
						Unleash your inner superhero!
					</h2>
					<p>
						This New Year marks the beginning of your journey to inner harmony
						and new strengths. We offer unique gifts that will help you improve
						your life.
					</p>
				</div>
				<div className="md:col-start-2 bg-[url(/santa.png)] bg-cover bg-center rounded-[20px] h-132"></div>
			</div>
		</section>
	);
}
