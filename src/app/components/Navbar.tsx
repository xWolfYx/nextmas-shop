import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-2 py-3 md:px-[82px]">
      <div className="flex cursor-pointer gap-2 px-5 py-2 *:content-center">
        <Image
          src="/snowflake-logo.png"
          width={96}
          height={96}
          alt="Snowflake icon"
          className="h-6 w-6 self-center"
        />
        <span className="text-[0.75rem] font-semibold uppercase">
          The Gifts
        </span>
      </div>
      <ul className="hidden gap-2 font-semibold uppercase *:cursor-pointer *:content-center *:rounded-xl *:px-5 *:py-3 *:text-[0.75rem] *:duration-400 *:hover:bg-[#ff46461a] *:hover:text-[#ff4646] md:flex">
        <li>Gifts</li>
        <li>About</li>
        <li>Best</li>
        <li>Contacts</li>
      </ul>
    </nav>
  );
}
