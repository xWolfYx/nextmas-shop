import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-2 py-3 md:px-[82px]">
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
        <li>
          <Link
            href="/gifts"
            className="cursor-pointer content-center rounded-xl px-5 py-3 text-[0.75rem] duration-400 hover:bg-[#ff46461a] hover:text-[#ff4646]"
          >
            Gifts
          </Link>
        </li>
        <li>
          <Link
            href="/#about"
            className="cursor-pointer content-center rounded-xl px-5 py-3 text-[0.75rem] duration-400 hover:bg-[#ff46461a] hover:text-[#ff4646]"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/#best"
            className="cursor-pointer content-center rounded-xl px-5 py-3 text-[0.75rem] duration-400 hover:bg-[#ff46461a] hover:text-[#ff4646]"
          >
            Best
          </Link>
        </li>
        <li>
          <Link
            href="#contacts"
            className="cursor-pointer content-center rounded-xl px-5 py-3 text-[0.75rem] duration-400 hover:bg-[#ff46461a] hover:text-[#ff4646]"
          >
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
}
