import { IconType } from "react-icons";
import {
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoTelegram,
} from "react-icons/bi";

type TContact = {
  name: string;
  link: string;
  icon: IconType;
};

export const CONTACTS: TContact[] = [

  {
    name: "Telegram",
    link: "https://t.me/nukuvv",
    icon: BiLogoTelegram,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/nukuvv",
    icon: BiLogoInstagram,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nukuvv",
    icon: BiLogoLinkedinSquare,
  },
];
