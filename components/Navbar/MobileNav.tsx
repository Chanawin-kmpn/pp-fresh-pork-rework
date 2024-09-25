"use client";

import React, { useCallback, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { navLink } from "@/constant";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleItemSelect = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <div className="sm:hidden">
      <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <DropdownMenuTrigger
          aria-label="เปิด/ปิดเมนูมือถือ"
          className="rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end">
          {navLink.map((link) => (
            <DropdownMenuItem
              key={link.label}
              className="focus:text-primary-foreground p-0 focus:bg-primary"
            >
              <Link
                href={link.href}
                className="hover:bg-muted text-medium block w-full p-4 transition-colors"
                onClickCapture={handleItemSelect}
              >
                {link.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileNav;
