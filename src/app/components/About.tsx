// import Image from "next/image";
import { allura } from "@/app/ui/fonts";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#ff4646] bg-[url(/backgrounds/bg-snow.png)] bg-cover bg-center px-2 py-[60px]"
    >
      <div className="m-auto grid max-w-[1276px] grid-cols-1 grid-rows-2 rounded-[20px] bg-white md:grid-cols-2 md:grid-rows-1">
        <div className="flex flex-col items-start justify-center gap-5 px-[60px] *:max-w-[426px]">
          <p
            className={`${allura.className} text-2xl tracking-[0.075rem] text-[#ff4646]`}
          >
            About
          </p>
          <h2 className="text-2xl font-semibold tracking-[0.24rem] uppercase">
            Unleash your inner superhero!
          </h2>
          <p>
            This New Year marks the beginning of your journey to inner harmony
            and new strengths. We offer unique gifts that will help you improve
            your life.
          </p>
        </div>
        <div className="h-132 rounded-[20px] bg-[url(/santa.png)] bg-cover bg-center md:col-start-2"></div>
      </div>
    </section>
  );
}
