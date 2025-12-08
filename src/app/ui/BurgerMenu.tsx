import ListItems from "./ListItems";

export default function BurgerMenu({
  isOpen,
  onBurgerOpen,
}: {
  isOpen: boolean;
  onBurgerOpen: () => void;
}) {
  return (
    <div
      className={`fixed h-full w-full bg-white duration-400 md:hidden ${isOpen ? "" : "translate-x-full"}`}
    >
      <ul className="flex h-full flex-col items-center justify-center gap-2 font-semibold tracking-[0.037rem] uppercase *:px-5 *:py-3 md:hidden">
        <ListItems
          classList="cursor-pointer content-center rounded-xl px-5 py-3 text-[1.5rem] tracking-[0.24rem] duration-400 hover:bg-[#ff46461a] hover:text-[#ff4646]"
          callback={onBurgerOpen}
        />
      </ul>
    </div>
  );
}
