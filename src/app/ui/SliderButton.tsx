export default function SliderButton({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<button
			type="button"
			className="group flex justify-center items-center hover:bg-white border border-white rounded-[1.25rem] size-14 duration-400 cursor-pointer"
		>
			{children}
		</button>
	);
}
