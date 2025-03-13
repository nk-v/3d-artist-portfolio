import React from "react";
import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa6";

export default function DownloadCvButton() {
  const onClick = () => {
    window.open("./docs/cv_nukuvv.pdf");
  };

  return (
    <Button variant="secondary" className="text-black" onClick={onClick}>
      <FaDownload className="mr-2 size-4" />
      {"Download CV".toLowerCase()}
    </Button>
  );
}
