import React, { useState } from "react";

import Link from "next/link";
import { BiSolidEnvelope, BiSolidEnvelopeOpen } from "react-icons/bi";

import { WORK_EMAIL } from "@/common/constants";

export default function EmailLink() {
  const [isCopied, setIsCopied] = useState(false);

  const Icon = isCopied ? BiSolidEnvelopeOpen : BiSolidEnvelope;

  return (
    <Link
      href={""}
      onClick={(e) => {
        e.preventDefault();
        navigator.clipboard.writeText(WORK_EMAIL);
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 5000);
      }}
      className="hover:text-zinc-400 flex items-center gap-4"
    >
      <Icon className="size-8" />
      <p className="text-sm sm:text-base">{WORK_EMAIL.toLowerCase()}</p>
    </Link>
  );
}
