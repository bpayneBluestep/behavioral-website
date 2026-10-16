import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { analyticsEnabled, getConsent, onConsentOpen, setConsent, type Consent } from '../analytics'

// Bottom-corner cookie choice. Shows on a first visit (only when analytics is on), and
// again whenever the footer's "Cookie settings" is clicked.

export default function ConsentBanner() {
  const [open, setOpen] = useState(() => analyticsEnabled && getConsent() === null)

  useEffect(() => onConsentOpen(() => analyticsEnabled && setOpen(true)), [])

  if (!open) return null

  const choose = (c: Consent) => {
    setConsent(c)
    setOpen(false)
  }

  return (
    <div
      role="region"
      aria-label="Cookie choice"
      className="rise fixed inset-x-4 bottom-4 z-50 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-sm"
    >
      <div className="card p-5 shadow-[0_20px_50px_-20px_rgb(var(--ink)/0.35)]">
        <p className="text-sm leading-relaxed text-ink">
          We use cookies to see which pages are useful. No ads, and nothing you type into a form.{' '}
          <Link to="/privacy" className="text-accent underline underline-offset-2">
            Privacy
          </Link>
        </p>
        <div className="mt-4 flex gap-2">
          <button type="button" onClick={() => choose('granted')} className="btn-primary flex-1 px-4 py-2">
            Accept
          </button>
          <button type="button" onClick={() => choose('denied')} className="btn-ghost flex-1 px-4 py-2">
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}
