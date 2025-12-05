import Image from "next/image";
import ContactCard from "../ui/ContactCard";

import { ContactInformation } from "../ui/contactCardType";
import { allura } from "../ui/fonts";

type SocialIcons = {
  name: string;
  link: string;
};

const socialIcons: SocialIcons[] = [
  { name: "telegram", link: "https://web.telegram.org/" },
  { name: "facebook", link: "https://www.facebook.com/" },
  { name: "instagram", link: "https://www.instagram.com/" },
  { name: "x", link: "https://x.com/" },
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
    <footer className="flex flex-col p-[60px] gap-3">
      <div className="flex items-center justify-center gap-3 p-[60px]">
        {contactInformation.map((info) => (
          <ContactCard
            key={info.callToAction}
            imgSrc={info.imgSrc}
            contact={info.contact}
            callToAction={info.callToAction}
            type={info.type}
          />
        ))}
      </div>
      <div className="flex justify-center gap-3">
        {socialIcons.map((social) => (
          <a href={social.link} key={social.name} className="p-2">
            <Image
              src={`/socials-icons/icon-${social.name}.svg`}
              width={120}
              height={120}
              alt={social.name}
              className="h-5 w-5"
            />
          </a>
        ))}
      </div>
      <div className="flex flex-col items-center gap-3">
        <p>© Copyright {new Date().getFullYear()}, All Rights Reserved</p>
        <p className={`${allura.className} text-[1.5rem] tracking-[0.075rem]`}>
          Made with love
        </p>
      </div>
    </footer>
  );
}
