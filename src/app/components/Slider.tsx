import Image from "next/image";
import { allura } from "../ui/fonts";
import { Fragment } from "react/jsx-runtime";
import SliderButton from "../ui/SliderButton";

type SliderImg = {
  text: string;
  src: string;
};

const slides: SliderImg[] = [
  { text: "Live", src: "/snowman.png" },
  { text: "Create", src: "/christmas-trees.png" },
  { text: "Love", src: "/christmas-tree-ball.png" },
  { text: "Dream", src: "/fairytale-house.png" },
];

export default function Slider() {
  return (
    <section className="overflow-x-hidden bg-[#ff4646] bg-[url(/backgrounds/bg-snow.png)] bg-cover bg-center py-[60px]">
      <div className="flex flex-col gap-3">
        <p
          className={`${allura.className} text-center text-2xl tracking-[0.075rem] text-white`}
        >
          Become Happier!
        </p>
        <h2 className="text-center text-2xl font-semibold tracking-[0.24rem] text-white uppercase">
          in the new 2025
        </h2>
        <div className="duration-400">
          <div className="flex items-center gap-5 lg:px-[82px]">
            {slides.map((slide, i) => (
              <Fragment key={i}>
                <p className="text-[5rem] font-semibold text-white uppercase">
                  {slide.text}
                </p>
                <Image
                  src={slide.src}
                  width={400}
                  height={400}
                  alt="Slider image"
                  key={slide.src}
                  className="size-[200px] rounded-[20px]"
                />
              </Fragment>
            ))}
          </div>
        </div>
        <div className="mr-2 flex justify-end gap-5 md:mr-[82px]">
          <SliderButton>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5 12H6M6 12L12 6M6 12L12 18"
                stroke="currentcolor"
                strokeOpacity="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-white group-hover:stroke-[#ff4646]"
              ></path>
            </svg>
          </SliderButton>
          <SliderButton>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18"
                stroke="currentcolor"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-white group-hover:stroke-[#ff4646]"
              ></path>
            </svg>
          </SliderButton>
        </div>
      </div>
    </section>
  );
}
