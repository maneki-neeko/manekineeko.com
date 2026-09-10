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
				sans: ['Inter', 'system-ui', 'sans-serif'],
				display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
				body: ['Inter', 'system-ui', 'sans-serif'],
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
				// Obsidian Amber Design System tokens
				obsidian: {
					bg: '#090A0D',
					'surface-1': '#111318',
					'surface-2': '#181B22',
					'surface-3': '#21252E',
					'container-lowest': '#0d0e11',
					'container-low': '#1b1b1f',
					container: '#1f1f23',
					'container-high': '#292a2d',
					'container-highest': '#343538',
				},
				amber: {
					DEFAULT: '#FF6A3D',
					hover: '#FF8C42',
					active: '#D9532B',
					dim: 'rgba(255, 106, 61, 0.12)',
					glow: 'rgba(255, 106, 61, 0.35)',
					light: '#FFB59F',
				},
				teal: {
					DEFAULT: '#14B8A6',
					dark: '#0D9488',
					container: '#04B4A2',
					dim: 'rgba(20, 184, 166, 0.12)',
					light: '#4FDBC8',
				},
				hairline: {
					subtle: 'rgba(255, 255, 255, 0.08)',
					interactive: 'rgba(255, 106, 61, 0.35)',
				}
			},
			boxShadow: {
				'glow-amber-sm': '0 0 16px -2px rgba(255, 106, 61, 0.25)',
				'glow-amber': '0 0 24px -4px rgba(255, 106, 61, 0.35)',
				'glow-amber-lg': '0 0 36px -2px rgba(255, 106, 61, 0.45)',
				'glow-teal': '0 0 20px -4px rgba(20, 184, 166, 0.30)',
				'inner-hairline': 'inset 0 1px 0 rgba(255, 255, 255, 0.12)',
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
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.4s ease-out',
				'pulse-subtle': 'pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'spark-flow': 'spark-flow 3s linear infinite'
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
