import Image from "next/image";
import Link from "next/link";
import BurgerMenuIcon from "../ui/BurgerMenuIcon";
import ListItems from "../ui/ListItems";

export default function Navbar({
  isOpen,
  onBurgerOpen,
}: {
  isOpen: boolean;
  onBurgerOpen: () => void;
}) {
  return (
    <nav className="flex items-center justify-between px-2 py-3 md:px-[82px]">
      <Link
        href="/"
        className="flex cursor-pointer gap-2 px-5 py-2 *:content-center"
      >
        <Image
          src="/snowflake-logo.png"
          width={96}
          height={96}
          alt="Snowflake icon"
          className="h-6 w-6 self-center"
        />
        <span className="text-[0.75rem] font-semibold tracking-[0.037rem] uppercase">
          The Gifts
        </span>
      </Link>
      <ul className="hidden gap-2 font-semibold tracking-[0.037rem] uppercase md:flex">
        <ListItems classList="cursor-pointer content-center rounded-xl px-5 py-3 text-[0.75rem] duration-400 hover:bg-[#ff46461a] hover:text-[#ff4646]" />
      </ul>
      <BurgerMenuIcon isOpen={isOpen} onBurgerOpen={onBurgerOpen} />
    </nav>
  );
}
