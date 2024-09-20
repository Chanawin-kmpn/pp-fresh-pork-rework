import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-noto-sans-thai)', 'var(--font-inter)', 'sans-serif'],
			},
			colors: {
				primary: '#4A0000',
				secondery: '#A81620',
				third: '#FFB20F',
				grey: {
					'100': '#E0E0E0',
					'200': '#BDBDBD',
					'300': '#828282',
					'400': '#4F4F4F',
					'500': '#333333',
				},
			},
			fontSize: {
				'mobile-h1': ['36px', '39.6px'],
				'mobile-h2': ['32px', '35.2px'],
				'mobile-h3': ['28px', '30.8px'],
				'mobile-h4': ['24px', '26.4px'],
				'mobile-h5': ['20px', '22px'],
				'mobile-h6': ['18px', '19.8px'],
				'mobile-text-lg': ['18px', '25.2px'],
				'mobile-text-md': ['16px', '22.4px'],
				'mobile-text-base': ['15px', '21px'],
				'mobile-text-sm': ['13px', '18.2px'],
				h1: ['56px', '61.6px'],
				h2: ['48px', '52.8px'],
				h3: ['40px', '44px'],
				h4: ['32px', '35.2px'],
				h5: ['24px', '26.4px'],
				h6: ['20px', '22px'],
				'text-lg': ['20px', '28px'],
				'text-md': ['18px', '25.2px'],
				'text-base': ['16px', '22.4px'],
				'text-sm': ['14px', '19.6px'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
		},
	},
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require('tailwindcss-animate')],
	corePlugins: {
		container: false, // Disable the default container
	},
};
export default config;
