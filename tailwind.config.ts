import type { Config } from 'tailwindcss'

// Colors are CSS variables (see styles.css) so light and dark mode swap in one
// place. Shape system: cards rounded-2xl, inputs rounded-xl, buttons/pills full.
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`

const config: Config = {
  // dark: variants follow data-theme on <html> (set by the theme script / toggle).
  darkMode: ['selector', '[data-theme="dark"]'],
  content: ['./app/index.html', './app/src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // One typeface for everything (brand guide). Mono only for code and logs.
        sans: ['"Plus Jakarta Sans Variable"', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono Variable"', 'ui-monospace', 'monospace'],
      },
      colors: {
        bg: token('bg'),
        surface: token('surface'),
        raised: token('raised'),
        ink: token('ink'),
        muted: token('muted'),
        faint: token('faint'),
        line: token('line'),
        accent: token('accent'),
        'accent-ink': token('accent-ink'),
        'accent-soft': token('accent-soft'),
        teal: token('teal'),
        'teal-soft': token('teal-soft'),
        primary: token('primary'),
        'primary-ink': token('primary-ink'),
        // Exact brand values, for fills, the mark, and navy sections.
        brand: {
          navy: '#0c335f',
          blue: '#3180c3',
          teal: '#1d9999',
          'light-teal': '#72d0d0',
        },
      },
      maxWidth: {
        page: '1240px',
      },
      letterSpacing: {
        tightest: '-0.03em',
      },
    },
  },
  plugins: [],
}

export default config
