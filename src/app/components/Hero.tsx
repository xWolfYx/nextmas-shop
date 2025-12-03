import DarkButton from "../ui/DarkButton";
import { allura } from "@/app/ui/fonts";

export default function Hero() {
  return (
    <section className="flex h-[524px] flex-col items-center justify-center rounded-t-[20px] bg-[#ff4646] bg-[url(/backgrounds/bg-snow.png),url(/backgrounds/bg-ball.png)] bg-cover bg-center *:text-white">
      <p className={`${allura.className} text-[1.5rem]`}>Merry Christmas</p>
      <h1 className="w-[426px] text-center text-[2rem] font-semibold uppercase">
        Gift yourself the magic of new possibilities
      </h1>
      <DarkButton text={"Explore Magical Gifts"} />
      <p className={`${allura.className} text-[1.5rem]`}>and Happy New Year</p>
    </section>
  );
}
