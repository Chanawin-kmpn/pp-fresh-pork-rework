import React from "react";
import Link from "next/link";
import { navLink } from "@/constant";

const DesktopNav = () => {
  return (
    <nav className="hidden sm:flex sm:space-x-6">
      {navLink.map((link) => (
        <div key={link.label} className="group relative overflow-hidden">
          <Link
            href={link.href}
            className="text-text-md transition-colors duration-200 hover:text-primary"
          >
            {link.label}
          </Link>
          <span className="absolute bottom-0 left-[-0.1rem] h-0.5 w-full -translate-x-full bg-primary transition-transform duration-300 ease-out group-hover:translate-x-0" />
        </div>
      ))}
    </nav>
  );
};

export default DesktopNav;
