import ContactCard from "../ui/ContactCard";

import { ContactInformation } from "../ui/contactCardType";
import { allura } from "../ui/fonts";
import SocialIcon from "../ui/SocialIcon";
import { TelegramSVG, FacebookSVG, InstagramSVG, XSVG } from "../ui/socialSvgs";

type SocialIcons = {
  name: string;
  link: string;
  Icon: React.FC;
};

const socialIcons: SocialIcons[] = [
  {
    name: "telegram",
    link: "https://web.telegram.org/",
    Icon: TelegramSVG,
  },
  {
    name: "facebook",
    link: "https://www.facebook.com/",
    Icon: FacebookSVG,
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/",
    Icon: InstagramSVG,
  },
  {
    name: "x",
    link: "https://x.com/",
    Icon: XSVG,
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
      className="flex flex-col gap-14 px-2 py-[60px] md:px-20 lg:px-[60px]"
    >
      <div className="flex flex-col gap-3 md:justify-center lg:flex-row">
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
      <div className="flex flex-col gap-3">
        <div className="flex justify-center gap-3 transition-colors duration-400">
          {socialIcons.map((social) => (
            <SocialIcon link={social.link} key={social.name}>
              {<social.Icon />}
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
