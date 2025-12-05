import type { Config } from "tailwindcss";

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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))',
					dark: 'hsl(var(--primary-dark))'
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
					foreground: 'hsl(var(--accent-foreground))',
					glow: 'hsl(var(--accent-glow))',
					secondary: 'hsl(var(--accent-secondary))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-subtle': 'var(--gradient-subtle)',
				'gradient-electric': 'var(--gradient-electric)',
				'gradient-neon': 'var(--gradient-neon)'
			},
			boxShadow: {
				'glow': 'var(--shadow-glow)',
				'accent-glow': 'var(--shadow-accent-glow)',
				'electric': 'var(--shadow-electric)',
				'card': 'var(--shadow-card)',
				'elevated': 'var(--shadow-elevated)',
				'inner': 'var(--shadow-inner)',
				'neon': 'var(--shadow-neon)'
			},
			fontFamily: {
				'heading': ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
				'display': ['Orbitron', 'Space Grotesk', 'system-ui', 'sans-serif'],
				'body': ['Inter', 'system-ui', 'sans-serif'],
				'mono': ['JetBrains Mono', 'Consolas', 'monospace']
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
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 30px hsl(240 100% 65% / 0.4)' },
					'50%': { boxShadow: '0 0 80px hsl(240 100% 65% / 0.8)' }
				},
				'electric-glow': {
					'0%': { boxShadow: '0 0 20px hsl(240 100% 65% / 0.8), 0 0 40px hsl(300 100% 65% / 0.6)' },
					'25%': { boxShadow: '0 0 40px hsl(300 100% 65% / 0.8), 0 0 80px hsl(180 100% 55% / 0.6)' },
					'50%': { boxShadow: '0 0 60px hsl(180 100% 55% / 0.8), 0 0 100px hsl(60 100% 65% / 0.6)' },
					'75%': { boxShadow: '0 0 40px hsl(60 100% 65% / 0.8), 0 0 80px hsl(240 100% 65% / 0.6)' },
					'100%': { boxShadow: '0 0 20px hsl(240 100% 65% / 0.8), 0 0 40px hsl(300 100% 65% / 0.6)' }
				},
				'rotate-glow': {
					'0%': { 
						transform: 'rotate(0deg)',
						boxShadow: '0 0 30px hsl(240 100% 65% / 0.6)'
					},
					'25%': { 
						boxShadow: '0 0 50px hsl(300 100% 65% / 0.6)'
					},
					'50%': { 
						transform: 'rotate(180deg)',
						boxShadow: '0 0 30px hsl(180 100% 55% / 0.6)'
					},
					'75%': { 
						boxShadow: '0 0 50px hsl(60 100% 65% / 0.6)'
					},
					'100%': { 
						transform: 'rotate(360deg)',
						boxShadow: '0 0 30px hsl(240 100% 65% / 0.6)'
					}
				},
				'morph-shape': {
					'0%, 100%': { borderRadius: '1rem' },
					'25%': { borderRadius: '2rem 1rem' },
					'50%': { borderRadius: '2rem' },
					'75%': { borderRadius: '1rem 2rem' }
				},
				'electric-text': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'slideInUp': {
					from: { opacity: '0', transform: 'translateY(50px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'slideInLeft': {
					from: { opacity: '0', transform: 'translateX(-50px)' },
					to: { opacity: '1', transform: 'translateX(0)' }
				},
				'slideInRight': {
					from: { opacity: '0', transform: 'translateX(50px)' },
					to: { opacity: '1', transform: 'translateX(0)' }
				},
				'scaleIn': {
					from: { opacity: '0', transform: 'scale(0.8)' },
					to: { opacity: '1', transform: 'scale(1)' }
				},
				'scaleInBounce': {
					'0%': { opacity: '0', transform: 'scale(0.3)' },
					'50%': { transform: 'scale(1.05)' },
					'70%': { transform: 'scale(0.9)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'slideInFromBottom': {
					from: { opacity: '0', transform: 'translateY(100px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'fadeInScale': {
					from: { opacity: '0', transform: 'scale(0.95)' },
					to: { opacity: '1', transform: 'scale(1)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'electric-shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'grid-pulse': {
					'0%, 100%': { opacity: '0.3' },
					'50%': { opacity: '0.6' }
				},
				'slide-right-to-left': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				'slide-left-to-right': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'bounce-subtle': {
					'0%, 20%, 53%, 80%, 100%': { transform: 'translateY(0)' },
					'40%, 43%': { transform: 'translateY(-10px)' },
					'70%': { transform: 'translateY(-5px)' },
					'90%': { transform: 'translateY(-2px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'electric-glow': 'electric-glow 3s ease-in-out infinite',
				'rotate-glow': 'rotate-glow 8s linear infinite',
				'morph-shape': 'morph-shape 4s ease-in-out infinite',
				'electric-text': 'electric-text 3s ease-in-out infinite',
				'slide-in-up': 'slideInUp 0.8s ease-out',
				'slide-in-left': 'slideInLeft 0.8s ease-out',
				'slide-in-right': 'slideInRight 0.8s ease-out',
				'slide-in-bottom': 'slideInFromBottom 0.8s ease-out',
				'scale-in': 'scaleIn 0.6s ease-out',
				'scale-in-bounce': 'scaleInBounce 0.8s ease-out',
				'fade-in-scale': 'fadeInScale 0.6s ease-out',
				'shimmer': 'shimmer 2s infinite',
				'electric-shimmer': 'electric-shimmer 1.5s infinite',
				'grid-pulse': 'grid-pulse 4s ease-in-out infinite',
				'bounce-subtle': 'bounce-subtle 2s infinite',
				'slide-right-to-left': 'slide-right-to-left 20s linear infinite',
				'slide-left-to-right': 'slide-left-to-right 20s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
