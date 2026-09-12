import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['"Work Sans"', 'system-ui', 'sans-serif'],
				display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
				brand: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
				body: ['"Work Sans"', 'system-ui', 'sans-serif'],
				mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				'deep-teal': 'hsl(var(--deep-teal))',
				vermilion: {
					DEFAULT: '#C42A10',
					hover: '#A8220B',
				},
				terracotta: {
					DEFAULT: '#D47229',
					hover: '#B85E1D',
				},
				cream: {
					DEFAULT: '#E6CBA6',
					soft: '#F6EFE6',
				},
				maroon: '#772B1B',
				jade: {
					DEFAULT: '#05B18B',
					hover: '#049273',
				},
				amber: {
					DEFAULT: '#D47229',
					hover: '#B85E1D',
				},
				teal: {
					DEFAULT: '#05B18B',
					light: '#5EA9AC',
					ocean: '#347986',
					spruce: '#2A5358',
					hover: '#049273',
				},
				obsidian: {
					DEFAULT: '#090909',
					surface: '#0E1317',
					card: '#12181E',
					border: 'rgba(255, 255, 255, 0.07)',
				},
			},
			boxShadow: {
				primary: '0 12px 32px -4px rgba(212, 114, 41, 0.4)',
				'glow-amber': '0 0 40px -10px rgba(212, 114, 41, 0.4)',
				'glow-teal': '0 0 40px -10px rgba(5, 177, 139, 0.35)',
				'glow-vermilion': '0 0 40px -10px rgba(196, 42, 16, 0.4)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					from: { opacity: '0', transform: 'translateY(16px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'pulse-subtle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.4' }
				},
				'spark-flow': {
					'0%': { strokeDashoffset: '100' },
					'100%': { strokeDashoffset: '0' }
				},
				'float-slow': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-6px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.4s ease-out',
				'pulse-subtle': 'pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'spark-flow': 'spark-flow 3s linear infinite',
				'float-slow': 'float-slow 4s ease-in-out infinite'
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
