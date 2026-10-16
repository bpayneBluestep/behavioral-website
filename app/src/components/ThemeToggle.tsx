import { useEffect, useState } from 'react'
import { Moon, Sun } from '@phosphor-icons/react'

// Light/dark toggle. The initial theme is set before paint by the inline script in
// index.html (saved choice, else OS setting). Clicking saves an explicit choice;
// until a visitor clicks, the site keeps following OS changes live.

type Theme = 'light' | 'dark'
const KEY = 'theme'

const current = (): Theme => (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light')

function apply(t: Theme) {
  document.documentElement.dataset.theme = t
  document.querySelector<HTMLMetaElement>('meta[name=theme-color]')?.setAttribute('content', t === 'dark' ? '#061629' : '#0c335f')
}

function saved(): Theme | null {
  try {
    const v = localStorage.getItem(KEY)
    return v === 'light' || v === 'dark' ? v : null
  } catch {
    return null
  }
}

export default function ThemeToggle({ className = '', withLabel = false }: { className?: string; withLabel?: boolean }) {
  const [theme, setTheme] = useState<Theme>(current)

  // Follow the OS until the visitor makes a choice.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      if (saved()) return
      const t: Theme = mq.matches ? 'dark' : 'light'
      apply(t)
      setTheme(t)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    apply(next)
    setTheme(next)
    try {
      localStorage.setItem(KEY, next)
    } catch {
      // Storage blocked: the choice still applies for this page view.
    }
  }

  const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`inline-flex items-center gap-2 rounded-full p-2 text-muted transition-colors hover:bg-raised hover:text-ink ${className}`}
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      {withLabel && <span className="text-base">{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>}
    </button>
  )
}
