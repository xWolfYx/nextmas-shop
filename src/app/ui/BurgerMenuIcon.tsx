export default function BurgerMenuIcon({
  isOpen,
  onBurgerOpen,
}: {
  isOpen: boolean;
  onBurgerOpen: () => void;
}) {
  return (
    <div
      className="flex size-[40] flex-col items-center justify-center gap-2 *:duration-400 md:hidden"
      onClick={onBurgerOpen}
    >
      <div
        className={`h-px w-5 rounded-[20px] bg-[#191c29] ${isOpen ? "translate-y-[5px] -rotate-45" : ""}`}
      ></div>
      <div
        className={`h-px w-5 rounded-[20px] bg-[#191c29] ${isOpen ? "-translate-y-1 rotate-45" : ""}`}
      ></div>
    </div>
  );
}
