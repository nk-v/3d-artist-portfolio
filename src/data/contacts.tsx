import { IconType } from "react-icons";
import { FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa6";

type TContact = {
  name: string;
  link: string;
  icon: IconType;
};

export const CONTACTS: TContact[] = [
  {
    name: "Telegram",
    link: "https://t.me/nukuvv",
    icon: FaTelegram,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/nukuvv",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nukuvv",
    icon: FaLinkedin,
  },
];
