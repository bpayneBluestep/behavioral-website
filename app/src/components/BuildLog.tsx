import { useEffect, useRef, useState } from 'react'
import { CheckCircle, CircleNotch, Sparkle } from '@phosphor-icons/react'

// The hero's build log: a request typed in plain English, then the steps Claude
// takes on the platform. This is an example build, labeled as one on screen.

const REQUEST =
  'Add Q15 safety checks for each unit. Staff tap a resident, log where they are and how they are doing. Flag any missed round to the shift lead.'

const STEPS = [
  'Reading your units, residents, and staff roles',
  'Creating the Q15 Check form',
  'Giving direct care staff access, read-only for everyone else',
  'Building the tablet view for rounds',
  'Adding the missed-round alert for shift leads',
  'Running the acceptance checks',
]

type Phase = 'typing' | 'steps' | 'done'

export default function BuildLog() {
  const reduce =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [typed, setTyped] = useState(reduce ? REQUEST.length : 0)
  const [step, setStep] = useState(reduce ? STEPS.length : 0)
  const [phase, setPhase] = useState<Phase>(reduce ? 'done' : 'typing')
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(reduce)

  // Start only once the panel is on screen.
  useEffect(() => {
    if (reduce || !ref.current) return
    const io = new IntersectionObserver((e) => {
      if (e.some((x) => x.isIntersecting)) {
        setVisible(true)
        io.disconnect()
      }
    })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [reduce])

  useEffect(() => {
    if (!visible || reduce) return
    let t: number
    if (phase === 'typing') {
      if (typed < REQUEST.length) t = window.setTimeout(() => setTyped(typed + 2), 22)
      else t = window.setTimeout(() => setPhase('steps'), 500)
    } else if (phase === 'steps') {
      if (step < STEPS.length) t = window.setTimeout(() => setStep(step + 1), 820)
      else setPhase('done')
    }
    return () => window.clearTimeout(t)
  }, [visible, reduce, phase, typed, step])

  return (
    <div
      ref={ref}
      className="card relative overflow-hidden p-5 shadow-[0_24px_60px_-28px_rgb(var(--accent)/0.45)] md:p-6"
      aria-label="Example build: Q15 safety checks"
    >
      <div className="flex items-center justify-between border-b border-line pb-4">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Sparkle size={16} weight="fill" className="text-accent" />
          Claude on BlueStep
        </div>
        <span className="font-mono text-[11px] text-faint">Example build</span>
      </div>

      <p className="mt-5 text-xs font-medium text-faint">You asked</p>
      <p className="mt-2 min-h-[6.5rem] text-[15px] leading-relaxed text-ink sm:min-h-[5rem]">
        {REQUEST.slice(0, typed)}
        {phase === 'typing' && <span className="caret ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 bg-accent" />}
      </p>

      <ul className="mt-5 space-y-2.5 border-t border-line pt-5" aria-live="polite">
        {STEPS.map((s, i) => {
          const state = i < step ? 'done' : i === step && phase === 'steps' ? 'active' : 'idle'
          return (
            <li
              key={s}
              className={`flex items-start gap-2.5 text-sm transition-opacity duration-300 ${
                state === 'idle' ? 'opacity-30' : 'opacity-100'
              }`}
            >
              {state === 'done' ? (
                <CheckCircle size={18} weight="fill" className="mt-px shrink-0 text-accent" />
              ) : state === 'active' ? (
                <CircleNotch size={18} className="mt-px shrink-0 animate-spin text-accent" />
              ) : (
                <span className="mt-[5px] h-2 w-2 shrink-0 translate-x-[5px] rounded-full bg-line" />
              )}
              <span className={state === 'done' ? 'text-muted' : 'text-ink'}>{s}</span>
            </li>
          )
        })}
      </ul>

      <div
        className={`mt-5 flex items-center justify-between rounded-xl bg-accent-soft px-4 py-3 text-sm transition-opacity duration-500 ${
          phase === 'done' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="font-medium text-ink">Ready for your review</span>
        <span className="font-mono text-xs text-muted">snapshot saved</span>
      </div>
    </div>
  )
}
