import About from "./components/About";
import BestGifts from "./components/BestGifts";
import CTA from "./components/CTA";
import Hero from "./components/Hero";
import Slider from "./components/Slider";

export default function Page() {
	return (
		<>
			<Hero />
			<About />
			<Slider />
			<BestGifts />
			<CTA />
		</>
	);
}
