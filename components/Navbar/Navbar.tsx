import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Navbar = () => {
	return (
		<div className="sticky top-0 bg-white flex justify-between items-center rounded-b-lg px-4 py-2 lg:px-20 lg:py-4">
			<div className="relative w-[125px] h-[90px] lg:w-[160px] lg:h-[115px]">
				<Link href="/">
					<Image
						src="/assets/images/logo/ppfreshpork-logo.png"
						fill
						className="object-cover"
						sizes="(max-width: 1024px) 125px, 160px"
						alt="PP Fresh pork Logo"
					/>
				</Link>
			</div>
			<MobileNav />
			<DesktopNav />
		</div>
	);
};

export default Navbar;
