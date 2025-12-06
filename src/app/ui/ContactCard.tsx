import Image from "next/image";
import { ContactInformation } from "./contactCardType";

export default function ContactCard({
  imgSrc,
  contact,
  callToAction,
  type,
}: ContactInformation) {
  let hrefType;

  if (type === "tel") hrefType = `tel:${contact}`;
  if (type === "place") hrefType = contact[1];
  if (type === "mail") hrefType = `mailto:${contact}`;

  return (
      <a
        href={type === "place" ? contact[0] : hrefType}
        className="flex w-[420px] flex-col items-center justify-center gap-3 rounded-[20px] bg-[#ecf3f8] p-5 text-center duration-400 hover:text-[#ff4646]"
      >
        <Image
          src={imgSrc}
          width={150}
          height={150}
          alt="Footer Image"
          className="w-20"
        />
        <p className="text-2xl/[1.52] font-semibold tracking-[0.24rem] uppercase">
          {type === "place" ? contact[1] : contact[0]}
        </p>
        <h3 className="font-semibold tracking-[0.08rem] uppercase">
          {callToAction}
        </h3>
      </a>
  );
}
