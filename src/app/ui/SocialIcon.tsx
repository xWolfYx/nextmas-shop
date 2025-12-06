import { ReactNode } from "react";

type SocialIconProps = {
  link: string;
  children: ReactNode;
};

export default function SocialIcon({ link, children }: SocialIconProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group p-2 text-[#181C29] hover:text-[#ff4646]"
    >
      {children}
    </a>
  );
}
