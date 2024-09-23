'use client';

import React, { useState } from 'react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

const MobileNav = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleLinkClick = () => {
		setIsOpen(false);
	};
	return (
		<div className="lg:hidden">
			<DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
				<DropdownMenuTrigger>
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
				<DropdownMenuContent className="">
					<DropdownMenuItem className="p-4">
						<Link
							className="text-text-md"
							onClick={handleLinkClick}
							href="/products"
						>
							ผลิตภัณฑ์
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem className="p-4">
						<Link
							className="text-text-md"
							onClick={handleLinkClick}
							href="/service"
						>
							บริการของเรา
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem className="p-4">
						<Link
							className="text-text-md"
							onClick={handleLinkClick}
							href="/about"
						>
							เกี่ยวกับเรา
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem className="p-4">
						<Link
							className="text-text-md"
							onClick={handleLinkClick}
							href="/contact"
						>
							ติดต่อเรา
						</Link>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default MobileNav;
