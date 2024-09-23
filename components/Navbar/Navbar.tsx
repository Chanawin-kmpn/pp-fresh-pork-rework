import Image from "next/image";
import Link from "next/link";
import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <div className="sticky top-0 flex items-center justify-between rounded-b-lg bg-white px-4 py-2 lg:px-20 lg:py-4">
      <Link
        href="/"
        className="relative h-[90px] w-[125px] lg:h-[115px] lg:w-[160px]"
      >
        <Image
          src="/assets/images/logo/ppfreshpork-logo.png"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 125px, 160px"
          alt="PP Fresh pork Logo"
          priority
        />
      </Link>
      <MobileNav />
      <DesktopNav />
    </div>
  );
};

export default Navbar;
