/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	fontSize: {
  		'heading1-bold': [
  			'36px',
  			{
  				lineHeight: '140%',
  				fontWeight: '700'
  			}
  		],
  		'heading1-semibold': [
  			'36px',
  			{
  				lineHeight: '140%',
  				fontWeight: '600'
  			}
  		],
  		'heading2-bold': [
  			'30px',
  			{
  				lineHeight: '140%',
  				fontWeight: '700'
  			}
  		],
  		'heading2-semibold': [
  			'30px',
  			{
  				lineHeight: '140%',
  				fontWeight: '600'
  			}
  		],
  		'heading3-bold': [
  			'24px',
  			{
  				lineHeight: '140%',
  				fontWeight: '700'
  			}
  		],
  		'heading4-medium': [
  			'20px',
  			{
  				lineHeight: '140%',
  				fontWeight: '500'
  			}
  		],
  		'heading4-semibold': [
  			'20px',
  			{
  				lineHeight: '140%',
  				fontWeight: '600'
  			}
  		],
  		'heading4-bold': [
  			'20px',
  			{
  				lineHeight: '140%',
  				fontWeight: '700'
  			}
  		],
  		'body-bold': [
  			'18px',
  			{
  				lineHeight: '140%',
  				fontWeight: '700'
  			}
  		],
  		'body-semibold': [
  			'18px',
  			{
  				lineHeight: '140%',
  				fontWeight: '600'
  			}
  		],
  		'body-medium': [
  			'18px',
  			{
  				lineHeight: '140%',
  				fontWeight: '500'
  			}
  		],
  		'body-normal': [
  			'18px',
  			{
  				lineHeight: '140%',
  				fontWeight: '400'
  			}
  		],
  		'body1-bold': [
  			'18px',
  			{
  				lineHeight: '140%',
  				fontWeight: '700'
  			}
  		],
  		'base-regular': [
  			'16px',
  			{
  				lineHeight: '140%',
  				fontWeight: '400'
  			}
  		],
  		'base-medium': [
  			'16px',
  			{
  				lineHeight: '140%',
  				fontWeight: '500'
  			}
  		],
  		'base-semibold': [
  			'16px',
  			{
  				lineHeight: '140%',
  				fontWeight: '600'
  			}
  		],
  		'base1-semibold': [
  			'16px',
  			{
  				lineHeight: '140%',
  				fontWeight: '600'
  			}
  		],
  		'small-regular': [
  			'14px',
  			{
  				lineHeight: '140%',
  				fontWeight: '400'
  			}
  		],
  		'small-medium': [
  			'14px',
  			{
  				lineHeight: '140%',
  				fontWeight: '500'
  			}
  		],
  		'small-semibold': [
  			'14px',
  			{
  				lineHeight: '140%',
  				fontWeight: '600'
  			}
  		],
  		'subtle-medium': [
  			'12px',
  			{
  				lineHeight: '16px',
  				fontWeight: '500'
  			}
  		],
  		'subtle-semibold': [
  			'12px',
  			{
  				lineHeight: '16px',
  				fontWeight: '600'
  			}
  		],
  		'tiny-medium': [
  			'10px',
  			{
  				lineHeight: '140%',
  				fontWeight: '500'
  			}
  		],
  		'x-small-semibold': [
  			'7px',
  			{
  				lineHeight: '9.318px',
  				fontWeight: '600'
  			}
  		]
  	},
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			white: 'rgba(255, 255, 255, 1)',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			text: 'rgba(38, 51, 61, 1)',
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			highlight: 'rgb(248, 195, 93)',
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			success: 'rgba(88, 208, 114, 1)',
  			danger: 'rgba(190, 70, 70, 1)',
  			'primary-500': '#877EFF',
  			'secondary-500': '#FFB620',
  			blue: '#0095F6',
  			'logout-btn': '#FF5A5A',
  			'navbar-menu': 'rgba(16, 16, 18, 0.6)',
  			'dark-1': '#000000',
  			'dark-2': '#121417',
  			'dark-3': '#101012',
  			'dark-4': '#1F1F22',
  			'light-1': '#FFFFFF',
  			'light-2': '#EFEFEF',
  			'light-3': '#7878A3',
  			'light-4': '#5C5C7B',
  			'gray-1': '#697C89',
  			glassmorphism: 'rgba(16, 16, 18, 0.60)',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			montserrat: [
  				'Montserrat',
  				'sans-serif'
  			]
  		},
  		screens: {
  			xs: '400px',
  			sm: '640px',
  			md: '768px',
  			lg: '1024px',
  			xl: '1280px',
  			'2xl': '1536px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
