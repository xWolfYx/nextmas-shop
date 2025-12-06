import DarkButton from "../ui/DarkButton";
import { allura } from "@/app/ui/fonts";

export default function Hero() {
  return (
    <section className="flex h-[524px] flex-col items-center justify-center gap-3 rounded-t-[20px] bg-[#ff4646] bg-[url(/backgrounds/bg-snow.png),url(/backgrounds/bg-ball.png)] bg-cover bg-center *:text-white">
      <p className={`${allura.className} text-[1.5rem] tracking-[0.075rem]`}>
        Merry Christmas
      </p>
      <h1 className="text-center text-[2rem] font-semibold tracking-[0.36rem] uppercase">
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
