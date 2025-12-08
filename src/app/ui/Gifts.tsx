"use client";

import { useEffect, useState } from "react";
import Gift from "./Gift";

export default function Gifts() {
  const [gifts, setGifts] = useState([]);

  useEffect(() => {
    async function loadData() {
      const res = await fetch("/fake-database.json");
      const data = await res.json();
      setGifts(data);
    }

    loadData();
  }, []);

  return (
    <div className="flex flex-col items-center gap-5 rounded-[1.25rem] bg-[#ff4646] bg-[url(/backgrounds/bg-garland.png)] bg-contain bg-no-repeat py-[60px]">
      <h1 className="text-center text-[2rem] font-semibold tracking-[0.36rem] text-white uppercase">
        Achieve health,
        <br /> harmony, and
        <br /> inner strength
      </h1>
      <GiftsFilter />
      <div className="grid w-full grid-cols-[repeat(auto-fill,19.375rem)] items-center justify-center gap-3">
        {gifts.map((gift: { name: string; category: string }) => (
          <Gift key={gift.name} name={gift.name} category={gift.category} />
        ))}
      </div>
    </div>
  );
}

function GiftsFilter() {
  return (
    <div className="flex flex-col gap-2 font-semibold text-white *:cursor-pointer *:rounded-xl *:px-5 *:py-3 *:text-[0.75rem] *:tracking-[0.037rem] *:uppercase *:duration-400 *:hover:bg-[#ffffff33] sm:flex-row">
      <button>All</button>
      <button>For work</button>
      <button>For health</button>
      <button>For harmony</button>
    </div>
  );
}
