import React from "react";

import { FaDownload } from "react-icons/fa6";

import { Button } from "@/components/ui/button";

import { sendMetrika } from "@/scripts/metrika/utils";

export default function DownloadCvButton() {
  const onClick = () => {
    sendMetrika({ event: "reachGoal", goalId: "DownloadCVButton" });
    window.open("./docs/cv_nukuvv.pdf");
  };

  return (
    <Button variant="secondary" className="text-black" onClick={onClick}>
      <FaDownload className="mr-2 size-4" />
      {"Download CV".toLowerCase()}
    </Button>
  );
}
