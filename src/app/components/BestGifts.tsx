import { allura } from "./ui/fonts";
import TopGifts from "./ui/TopGifts";

export default function BestGifts() {
	return (
		<section
			id="best"
			className="bg-[#ff4646] bg-[url(/backgrounds/bg-snow.png)] bg-cover bg-center px-2 py-15"
		>
			<div>
				<div className="mb-5">
					<p
						className={`${allura.className} mb-3 text-white text-2xl text-center capitalize tracking-[0.075rem]`}
					>
						Best gifts
					</p>
					<h2 className="font-semibold text-white text-2xl text-center uppercase tracking-[0.24rem]">
						Especially for you
					</h2>
				</div>
				<TopGifts />
			</div>
		</section>
	);
}
