import Link from "next/link";

interface DarkButtonProps {
  text: string;
}

export default function DarkButton({ text }: DarkButtonProps) {
  return (
    <button className="cursor-pointer rounded-[20px] bg-[#191c29] text-[12px] font-semibold tracking-[0.037rem] text-white uppercase duration-400 hover:bg-white hover:text-[#191c29]">
      <Link href="/gifts" className="block px-8 py-5">
        {text}
      </Link>
    </button>
  );
}
