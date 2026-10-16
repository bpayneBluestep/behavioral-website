// Brand + navigation in one place. The behavioral division is being rebranded
// this quarter: change BRAND here and every page follows.

export const BRAND = {
  name: 'BlueStep Behavioral',
  short: 'Behavioral',
  legal: 'BlueStep Systems',
  email: 'bpayne@bluestep.net',
}

export interface NavLinkItem {
  href: string
  label: string
  hint?: string
}
export interface NavGroup {
  label: string
  items: NavLinkItem[]
  badge?: string
}

export const NAV: (NavGroup | NavLinkItem)[] = [
  {
    label: 'Products',
    items: [
      { href: '/products/ehr', label: 'EHR', hint: 'Clinical, nursing, and compliance' },
      { href: '/products/crm', label: 'CRM', hint: 'Referrals, census, and intake' },
      { href: '/products/outcomes', label: 'Outcomes', hint: 'Surveys and outcome analytics' },
      { href: '/products/blueiq', label: 'BlueIQ', hint: 'AI inside every module' },
    ],
  },
  {
    label: 'Who we help',
    items: [
      { href: '/for-clinicians', label: 'Clinicians' },
      { href: '/for-nurses', label: 'Nurses' },
      { href: '/for-admissions', label: 'Admissions' },
      { href: '/for-executives', label: 'Executives' },
      { href: '/for-referral-partners', label: 'Referral partners' },
    ],
  },
  {
    label: 'Build',
    badge: 'New',
    items: [
      { href: '/build', label: 'Build with Claude', hint: 'Change anything in your EHR' },
      { href: '/marketplace', label: 'Marketplace', hint: 'Features other programs built' },
      { href: '/blank-slate', label: 'Blank Slate', hint: 'Apps next to your current EHR' },
    ],
  },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
]

export const isGroup = (n: NavGroup | NavLinkItem): n is NavGroup => 'items' in n

// One label per intent, used everywhere.
export const CTA = {
  demo: { href: '/demo', label: 'Request a demo' },
  build: { href: '/demo?path=builder', label: 'Start building' },
  how: { href: '/build', label: 'See how building works' },
  market: { href: '/marketplace', label: 'Browse the marketplace' },
  pricing: { href: '/pricing', label: 'See pricing' },
} as const
