import { CertificateProp } from "@/types/types";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const CertificationBadge = ({ icon, title, desc }: CertificateProp) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <Icon icon={`mdi:${icon}-outline`} className="size-12" />
      <p className="text-medium-bold">{title}</p>
      <p className="text-normal">{desc}</p>
    </div>
  );
};

export default CertificationBadge;
