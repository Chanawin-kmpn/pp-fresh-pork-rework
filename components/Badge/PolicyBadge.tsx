import { cn } from "@/lib/utils";
import { Initiative } from "@/types/types";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const iconColorMap: Record<string, string> = {
  eco: "text-green-600",
  shield: "text-blue-600",
  handshake: "text-yellow-600",
  "diversity-2": "text-orange-600",
  "volunteer-activism": "text-red-600",
  "fact-check": "text-teal-600",
};

const PolicyBadge = ({ icon, title, desc }: Initiative) => {
  const iconColor = iconColorMap[icon] || "text-gray-600";
  return (
    <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 shadow-lg">
      <Icon
        icon={`material-symbols:${icon}-outline`}
        className={cn("size-10", iconColor)}
      />
      <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-center text-base text-gray-500">{desc}</p>
    </div>
  );
};

export default PolicyBadge;
