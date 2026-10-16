import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { List, X } from '@phosphor-icons/react'
import { BRAND, CTA, NAV } from './site'
import { Container, Logo } from './ui'

function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-bg/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label={`${BRAND.name} home`}>
          <Logo className="h-6" />
          <span className="border-l border-line pl-2.5 text-sm font-medium text-muted">{BRAND.short}</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <NavLink
              key={n.href}
              to={n.href}
              className={({ isActive }) =>
                `rounded-full px-3 py-1.5 text-sm transition-colors ${
                  isActive ? 'bg-raised text-ink' : 'text-muted hover:text-ink'
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to={CTA.talk.href} className="hidden text-sm text-muted hover:text-ink md:inline lg:hidden xl:inline">
            {CTA.talk.label}
          </Link>
          <Link to={CTA.build.href} className="btn-primary hidden px-4 py-2 sm:inline-flex">
            {CTA.build.label}
          </Link>
          <button
            type="button"
            className="-mr-2 rounded-full p-2 text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </Container>

      {open && (
        <div id="mobile-nav" className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-bg lg:hidden">
          <Container className="flex flex-col gap-1 py-6">
            {NAV.map((n, i) => (
              <NavLink
                key={n.href}
                to={n.href}
                className="rise border-b border-line py-4 text-2xl font-medium tracking-tight"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {n.label}
              </NavLink>
            ))}
            <div className="mt-8 flex flex-col gap-3">
              <Link to={CTA.build.href} className="btn-primary py-3 text-base">
                {CTA.build.label}
              </Link>
              <Link to={CTA.talk.href} className="btn-ghost py-3 text-base">
                {CTA.talk.label}
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}

const FOOTER_COLUMNS = [
  {
    title: 'Ways in',
    links: [
      { to: '/build', label: 'Builder' },
      { to: '/ehr', label: 'Full-service EHR' },
      { to: '/blank-slate', label: 'Blank Slate' },
      { to: '/pricing', label: 'Pricing' },
    ],
  },
  {
    title: 'Product',
    links: [
      { to: '/ehr', label: 'EHR' },
      { to: '/ehr#crm', label: 'CRM' },
      { to: '/ehr#outcomes', label: 'Outcomes' },
      { to: '/ehr#blueiq', label: 'BlueIQ' },
      { to: '/marketplace', label: 'Marketplace' },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: '/about', label: 'About' },
      { to: '/build#trust', label: 'Security' },
      { to: '/talk', label: 'Contact' },
    ],
  },
]

function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Logo className="h-7" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            Behavioral health software, built by people who worked inside it.
          </p>
        </div>
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-medium text-ink">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-muted transition-colors hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <Container className="flex flex-col gap-2 border-t border-line py-6 text-xs text-faint sm:flex-row sm:justify-between">
        <span>&copy; {new Date().getFullYear()} {BRAND.legal}. All rights reserved.</span>
        <span>HIPAA-ready hosting. We sign a BAA with every program.</span>
      </Container>
    </footer>
  )
}

/** Scrolls to the top on route change, or to the #hash target when there is one. */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function Layout() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-surface focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <ScrollManager />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
