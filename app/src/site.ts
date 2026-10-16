// Brand + navigation in one place. The behavioral division is being rebranded
// this quarter: change BRAND here and every page follows.

export const BRAND = {
  name: 'BlueStep Behavioral',
  short: 'Behavioral',
  legal: 'BlueStep Systems',
  email: 'bpayne@bluestep.net',
  description:
    'The behavioral health EHR you can build on. Start from a proven EHR, or a blank slate, and let Claude build what your program needs.',
}

export const NAV = [
  { href: '/build', label: 'Build' },
  { href: '/marketplace', label: 'Marketplace' },
  { href: '/ehr', label: 'EHR' },
  { href: '/blank-slate', label: 'Blank Slate' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
] as const

// One label per intent, used everywhere.
export const CTA = {
  build: { href: '/talk?path=builder', label: 'Start building' },
  talk: { href: '/talk', label: 'Talk to us' },
  how: { href: '/build', label: 'See how it works' },
  market: { href: '/marketplace', label: 'Browse the marketplace' },
  pricing: { href: '/pricing', label: 'See pricing' },
} as const
