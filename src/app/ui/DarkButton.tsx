import Link from "next/link";

interface DarkButtonProps {
	text: string;
}

export default function DarkButton({ text }: DarkButtonProps) {
	return (
		<button
			type="button"
			className="bg-[#191c29] hover:bg-white rounded-[20px] font-semibold text-[12px] text-white hover:text-[#191c29] uppercase tracking-[0.037rem] duration-400 cursor-pointer"
		>
			<Link href="/gifts" className="block px-8 py-5">
				{text}
			</Link>
		</button>
	);
}
