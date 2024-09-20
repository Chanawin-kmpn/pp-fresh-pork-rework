import type { Metadata } from 'next';
import { Inter, Noto_Sans_Thai } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
	weight: ['400', '700'],
});

const notoSansThai = Noto_Sans_Thai({
	subsets: ['thai'],
	variable: '--font-noto-sans-thai',
	display: 'swap',
	weight: ['400', '700'],
});

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="th">
			<body
				className={`container ${inter.variable} ${notoSansThai.variable} font-sans antialiased`}
			>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
