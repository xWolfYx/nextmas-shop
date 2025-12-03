export default function SliderButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="group flex size-14 cursor-pointer items-center justify-center rounded-[1.25rem] border border-white duration-400 hover:bg-white">
      {children}
    </button>
  );
}
