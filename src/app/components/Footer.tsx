import { FiFacebook } from "react-icons/fi";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import { SiInstagram } from "react-icons/si";
import type { ContactInformation } from "../lib/types";
import ContactCard from "./ui/ContactCard";
import { allura } from "./ui/fonts";
import SocialIcon from "./ui/SocialIcon";

type SocialIcons = {
	name: string;
	link: string;
	Icon: React.ComponentType;
};

const socialIcons: SocialIcons[] = [
	{
		name: "telegram",
		link: "https://web.telegram.org/",
		Icon: PiTelegramLogoDuotone,
	},
	{
		name: "facebook",
		link: "https://www.facebook.com/",
		Icon: FiFacebook,
	},
	{
		name: "instagram",
		link: "https://www.instagram.com/",
		Icon: SiInstagram,
	},
	{
		name: "x",
		link: "https://x.com/",
		Icon: RiTwitterXFill,
	},
];

const contactInformation: ContactInformation[] = [
	{
		imgSrc: "/footer-images/santa-claus.svg",
		contact: ["+375 (29) 111-22-33"],
		callToAction: "Call us",
		type: "tel",
	},
	{
		imgSrc: "/footer-images/christmas-tree.svg",
		contact: ["https://maps.app.goo.gl/VoN9ebeNPd9eNEd97", "Magic Forest"],
		callToAction: "Meet Us",
		type: "place",
	},
	{
		imgSrc: "/footer-images/snake.svg",
		contact: ["gifts@magic.com"],
		callToAction: "Write us",
		type: "mail",
	},
];

export default function Footer() {
	return (
		<footer
			id="contacts"
			className="flex flex-col gap-14 px-2 md:px-20 lg:px-15 py-15"
		>
			<div className="flex lg:flex-row flex-col md:justify-center gap-3">
				{contactInformation.map((info) => (
					<ContactCard key={info.callToAction} {...info} />
				))}
			</div>
			<div className="flex flex-col gap-3">
				<div className="flex justify-center gap-3 transition-colors duration-400">
					{socialIcons.map(({ name, link, Icon }) => (
						<SocialIcon link={link} key={name}>
							<Icon />
						</SocialIcon>
					))}
				</div>
				<div className="flex flex-col items-center gap-3">
					<p>© Copyright {new Date().getFullYear()}, All Rights Reserved</p>
					<p
						className={`${allura.className} text-[1.5rem] tracking-[0.075rem]`}
					>
						Made with love
					</p>
				</div>
			</div>
		</footer>
	);
}
