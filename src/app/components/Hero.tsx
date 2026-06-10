import { allura } from "@/app/ui/fonts";
import DarkButton from "../ui/DarkButton";

export default function Hero() {
	return (
		<section className="flex flex-col justify-center items-center gap-3 bg-[#ff4646] bg-[url(/backgrounds/bg-snow.png),url(/backgrounds/bg-ball.png)] bg-cover bg-center rounded-t-[20px] h-131 *:text-white">
			<p className={`${allura.className} text-[1.5rem] tracking-[0.075rem]`}>
				Merry Christmas
			</p>
			<h1 className="font-semibold text-[2rem] text-center uppercase tracking-[0.36rem]">
				Gift yourself
				<br /> the magic of new
				<br /> possibilities
			</h1>
			<DarkButton text={"Explore Magical Gifts"} />
			<p className={`${allura.className} text-[1.5rem] tracking-[0.075rem]`}>
				and Happy New Year
			</p>
		</section>
	);
}
