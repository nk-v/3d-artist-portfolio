import React from "react";

import Link from "next/link";
import { BiPlay } from "react-icons/bi";

import Embed from "@/components/base/embed";
import Modal from "@/components/base/modal";
import { Button } from "@/components/ui/button";

import { SHOWREEL_URL } from "@/common/constants";
import { sendMetrika } from "@/scripts/metrika/utils";

export default function ShowreelButton() {
  const renderButton = () => (
    <Button
      onClick={() =>
        sendMetrika({ event: "reachGoal", goalId: "ShowreelButton" })
      }
      variant={"secondary"}
      className="w-full mt-2"
    >
      <BiPlay />
      {"watch 2025 showreel"}
    </Button>
  );

  return (
    <>
      {/* Desktop Showreel */}
      <Modal>
        <Modal.Trigger asChild className="hidden md:flex">
          {renderButton()}
        </Modal.Trigger>
        <Modal.Content>
          <Embed />
        </Modal.Content>
      </Modal>

      {/* Mobile Showreel */}
      <Link
        href={SHOWREEL_URL}
        className="md:hidden"
        rel="noopener noreferrer"
        target="_blank"
      >
        {renderButton()}
      </Link>
    </>
  );
}
