import Image from "next/image";
import Link from "next/link";
import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import GlobalSearch from "../Searchbar/GlobalSearch";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 rounded-b-lg bg-white px-4 py-2 xl:px-20 xl:py-4">
      <div className="flex items-center justify-between gap-4 lg:gap-8 xl:gap-16">
        <Link
          href="/"
          className="relative block h-[90px] w-[125px] lg:h-[115px] lg:w-[160px]"
        >
          <Image
            src="/assets/images/logo/ppfreshpork-logo.webp"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 125px, 160px"
            alt="PP Fresh pork Logo"
            priority
          />
        </Link>
        <div className="hidden grow lg:block">
          <GlobalSearch />
        </div>
        <MobileNav />
        <DesktopNav />
      </div>
      <div className="mt-4 lg:hidden">
        <GlobalSearch />
      </div>
    </div>
  );
};

export default Navbar;
