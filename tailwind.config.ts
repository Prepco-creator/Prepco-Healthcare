import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		keyframes: {
  			'fade-in': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(10px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'slide-up': {
  				'0%': {
  					transform: 'translateY(20px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			expand: {
  				'0%': {
  					width: '0'
  				},
  				'100%': {
  					width: '8rem'
  				}
  			},
  			float: {
  				'0%, 100%': {
  					transform: 'translate(50%, 50%) translateY(-20px)'
  				},
  				'50%': {
  					transform: 'translate(50%, 50%) translateY(0)'
  				}
  			},
  			'float-slow': {
  				'0%, 100%': {
  					transform: 'translate(-50%, -50%) translateY(-10px)'
  				},
  				'50%': {
  					transform: 'translate(-50%, -50%) translateY(10px)'
  				}
  			},
  			'pulse-slow': {
  				'0%, 100%': {
  					opacity: '0.4'
  				},
  				'50%': {
  					opacity: '0.2'
  				}
  			}
  		},
  		animation: {
  			'fade-in': 'fade-in 0.6s ease-out forwards',
  			'fade-in-delay': 'fade-in 0.6s ease-out 0.2s forwards',
  			'fade-in-delay-2': 'fade-in 0.6s ease-out 0.4s forwards',
  			'slide-up': 'slide-up 0.8s ease-out forwards',
  			expand: 'expand 0.8s ease-out forwards',
  			float: 'float 6s ease-in-out infinite',
  			'float-slow': 'float-slow 8s ease-in-out infinite',
  			'pulse-slow': 'pulse-slow 4s ease-in-out infinite'
  		},
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			primary1: '#00ADA9',
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				'1': '#D0F2F3',
  				'2': '#E3FFFE',
  				'3': '#F0FFFF',
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			gray: '#D9D9D9',
  			background: 'hsl(var(--background))',
  			primaryDark: '#121212',
  			secondaryDark: '#505050',
  			primaryLight: '#FAF9F6',
  			secondaryLight: '#EEEEEE',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
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
  			poppins: [
  				'Poppins',
  				'sans-serif'
  			]
  		},
  		fontWeight: {
  			thin: '100',
  			extralight: '200',
  			light: '300',
  			regular: '400',
  			medium: '500',
  			semibold: '600',
  			bold: '700',
  			extrabold: '800',
  			black: '900'
  		},
  		fontSize: {
  			'custom-48': [
  				'48px',
  				{
  					lineHeight: '72px',
  					fontWeight: '600'
  				}
  			],
  			'custom-20': [
  				'20px',
  				{
  					lineHeight: '30px',
  					fontWeight: '500'
  				}
  			],
  			'custom-28': [
  				'28px',
  				{
  					lineHeight: '42px',
  					fontWeight: '500'
  				}
  			],
  			'custom-20-bold': [
  				'20px',
  				{
  					lineHeight: '30px',
  					fontWeight: '700'
  				}
  			],
  			'custom-48-bold': [
  				'48px',
  				{
  					lineHeight: '72px',
  					fontWeight: '700'
  				}
  			],
  			'custom-40': [
  				'40px',
  				{
  					lineHeight: '60px',
  					fontWeight: '700'
  				}
  			],
  			'custom-40-2': [
  				'40px',
  				{
  					lineHeight: '48px',
  					fontWeight: '700'
  				}
  			],
  			'custom-24': [
  				'24px',
  				{
  					lineHeight: '36px',
  					fontWeight: '700'
  				}
  			],
  			'custom-32': [
  				'32px',
  				{
  					lineHeight: '48px',
  					fontWeight: '700'
  				}
  			],
  			'custom-64': [
  				'64px',
  				{
  					lineHeight: '96px',
  					fontWeight: '700'
  				}
  			],
  			'custom-16-bold': [
  				'16px',
  				{
  					lineHeight: '24px',
  					fontWeight: '700'
  				}
  			],
  			'custom-14': [
  				'14px',
  				{
  					lineHeight: '21px',
  					fontWeight: '400'
  				}
  			],
  			'custom-20-2': [
  				'20px',
  				{
  					lineHeight: '32px',
  					fontWeight: '400'
  				}
  			],
  			'custom-16': [
  				'16px',
  				{
  					lineHeight: '24px',
  					fontWeight: '400'
  				}
  			],
  			'custom-96': [
  				'96px',
  				{
  					lineHeight: '144px',
  					fontWeight: '900'
  				}
  			]
  		},
  		gradientColorStops: {
  			primary: '#00ADA9',
  			secondary: '#00807D'
  		},
  		backgroundImage: {
  			'custom-gradient': 'linear-gradient(270deg, #00ADA9 0%, #00807D 100%)',
  			'custom-gradient-1': 'linear-gradient(to right, #E0FFFF, #008080)'
  		},
  		boxShadow: {
  			'double-inset': '-12px -12px 48px 0px #022C2B inset, 16px 16px 24px 0px #00DAD4 inset',
  			'multi-layer': '`\n          0px 7px 15px 0px #0000001A,\n          0px 28px 28px 0px #00000017,\n          0px 62px 37px 0px #0000000D,\n          0px 110px 44px 0px #00000003,\n          0px 172px 48px 0px #00000000\n        `'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
