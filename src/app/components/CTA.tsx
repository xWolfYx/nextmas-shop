import DarkButton from "../ui/DarkButton";
import { allura } from "../ui/fonts";
import Timer from "../ui/Timer";

export default function CTA() {
  return (
    <section className="flex flex-col items-center justify-center gap-5 rounded-b-[20px] bg-[#ff4646] bg-[url(/backgrounds/bg-snow.png),url(/backgrounds/bg-forest.png)] bg-cover bg-center py-[120px]">
      <h2 className="text-center text-2xl font-semibold tracking-[0.24rem] text-white uppercase">
        Ready to start your <br />
        journey to a better <br />
        version of yourself?
      </h2>
      <DarkButton text="Explore Magical Gifts" />
      <p
        className={`${allura.className} text-center text-2xl tracking-[0.075rem] text-white`}
      >
        The New Year is Coming Soon...
      </p>
      <Timer />
    </section>
  );
}
