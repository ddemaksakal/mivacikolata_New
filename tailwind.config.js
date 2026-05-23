/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        chocolate: {
          950: '#0F0905',
          900: '#1A0E08',
          800: '#2D1F17',
          700: '#3D2817',
        },
        gold: {
          300: '#D4AF37',
          400: '#C9A84C',
          500: '#B8943F',
        },
        cream: {
          50: '#FAF7F2',
          100: '#F5EFE6',
        },
        charcoal: '#1A1A1A',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        xs: '2px',
        sm: '4px',
        base: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '20px',
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        base: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        md: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        lg: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        xl: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        luxury: '0 20px 40px -15px rgba(201, 168, 76, 0.15)',
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '48px',
        '4xl': '64px',
        '5xl': '80px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'luxury-hover': 'luxuryHover 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        luxuryHover: {
          '0%': { transform: 'translateY(0)', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' },
          '100%': { transform: 'translateY(-2px)', boxShadow: '0 20px 40px rgba(201, 168, 76, 0.15)' },
        },
      },
    },
  },
  plugins: [],
};
