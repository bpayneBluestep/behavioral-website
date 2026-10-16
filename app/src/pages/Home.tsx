import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, Code, Lifebuoy, ShieldCheck, Stack, Timer } from '@phosphor-icons/react'
import { PLANS, usd } from '../data/pricing'
import { CTA } from '../site'
import { MARK_LEFT, MARK_RIGHT, MARK_VIEWBOX } from '../components/Mark'
import { ClosingCTA, Container, Heading, OnAccentButton, Reveal, asset, useTitle } from '../ui'

// The homepage is a fork: two ways to run the same EHR, told through the Attune
// mark. Each path leads into its own hub (/full-service and /build).

const CLIENTS = [
  { name: 'Alpine Academy', file: 'alpine-academy.svg' },
  { name: 'Ascent Behavioral Health', file: 'ascent-behavioral-health.png' },
  { name: 'Telos Academy', file: 'telos-academy.png' },
  { name: 'Velocity Health Group', file: 'velocity-health-group.png' },
]

const price = (id: string) => usd(PLANS.find((p) => p.id === id)!.price)

const COMPARE: [string, string, string][] = [
  ['Who changes it', 'Our team, when you ask', 'Your team, whenever you want'],
  ['How changes get made', 'Feature requests to Attune', 'Your own AI tools, on the platform'],
  ['Getting started', 'Configured and trained by us', 'Blueprint (the full suite) or Slate (a blank slate)'],
  ['Support', 'Clinical, training, and technical', 'Technical. Build help is hourly.'],
  ['New features', 'Built and rolled out by us', 'Take them from the marketplace'],
  ['Starting price', `${price('full-service')} per program / month`, `${price('blank-slate')} per program / month`],
]

/**
 * The hero is the brand mark, used as the fork. Blue circle = the platform (Build),
 * teal circle = the people (Full-service), and the open overlap is where they meet:
 * one shared record. Each circle is a link; hovering one quiets the other.
 * Text inside the circles is large and bold so white on blue/teal passes AA-large;
 * in dark mode the teal shifts to light teal (brand rule), so its text goes navy.
 */
function HeroMark() {
  const [hover, setHover] = useState<'build' | 'full' | null>(null)
  const shape = 'transition-[opacity,transform] duration-500 ease-out [transform-box:fill-box] [transform-origin:center]'
  const on = (side: 'build' | 'full') => ({
    onMouseEnter: () => setHover(side),
    onMouseLeave: () => setHover(null),
    onFocus: () => setHover(side),
    onBlur: () => setHover(null),
  })
  return (
    <div className="relative mx-auto aspect-[45.5/31.5] w-full max-w-[600px]">
      <svg viewBox={MARK_VIEWBOX} className="absolute inset-0 h-full w-full overflow-visible" aria-hidden>
        <path
          d={MARK_LEFT}
          className={`fill-brand-blue ${shape} ${hover === 'full' ? 'opacity-35' : ''} ${hover === 'build' ? 'scale-[1.025]' : ''}`}
        />
        <path
          d={MARK_RIGHT}
          className={`fill-brand-teal dark:fill-brand-light-teal ${shape} ${hover === 'build' ? 'opacity-35' : ''} ${
            hover === 'full' ? 'scale-[1.025]' : ''
          }`}
        />
      </svg>
      <Link
        to="/build"
        {...on('build')}
        className="absolute inset-y-[8%] left-[2%] flex w-[30%] flex-col items-center justify-center rounded-full text-center text-white focus-visible:outline-offset-8"
      >
        <span className="text-xl font-bold sm:whitespace-nowrap tracking-tightest sm:text-2xl lg:text-[1.65rem]">Build</span>
        <span className="mt-1 hidden text-lg font-bold opacity-90 sm:block">You change it</span>
      </Link>
      <Link
        to="/full-service"
        {...on('full')}
        className="absolute inset-y-[8%] right-[2%] flex w-[30%] flex-col items-center justify-center rounded-full text-center text-white focus-visible:outline-offset-8 dark:text-[#0c335f]"
      >
        <span className="text-xl font-bold sm:whitespace-nowrap tracking-tightest sm:text-2xl lg:text-[1.65rem]">Full-service</span>
        <span className="mt-1 hidden text-lg font-bold opacity-90 sm:block">We run it</span>
      </Link>
      <p
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 w-[18%] -translate-x-1/2 -translate-y-1/2 text-center text-[11px] font-semibold leading-tight text-ink sm:text-sm"
      >
        One record
      </p>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden" data-track-section="home-hero">
      <Container className="grid items-center gap-12 pb-20 pt-12 md:pt-16 lg:grid-cols-[1fr_1.05fr] lg:gap-10 lg:pb-28 lg:pt-20">
        <div className="rise">
          <p className="kicker mb-5">Behavioral health EHR</p>
          <h1 className="text-balance text-[2.6rem] font-bold leading-[1.06] tracking-tightest sm:text-6xl lg:text-[3.6rem]">
            Attuned to your operations, and to you.
          </h1>
          <p className="prose-body mt-6 max-w-[48ch]">
            One EHR, two ways to run it. Build it yourself with the AI tools you already use, or let a team that knows
            how programs run do it for you.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to={CTA.demo.href} className="btn-primary">
              {CTA.demo.label}
            </Link>
            <a href="#paths" className="btn-ghost">
              Compare the two paths
            </a>
          </div>
        </div>
        <div className="rise [animation-delay:150ms]">
          <HeroMark />
        </div>
      </Container>
    </section>
  )
}

function Paths() {
  return (
    <section id="paths" className="scroll-mt-20 pb-24 md:pb-32" data-track-section="home-fork">
      <Container>
        <div className="grid gap-4 lg:grid-cols-2">
          <Reveal>
            <article className="card flex h-full flex-col overflow-hidden">
              <img
                src={asset('images/heroes/for-clinicians.jpg')}
                alt="A therapist leading a group session"
                className="aspect-[16/8] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-8 md:p-10">
                <p className="flex items-center gap-2 text-sm font-semibold text-teal">
                  <Lifebuoy size={18} weight="bold" />
                  Full-service
                </p>
                <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tightest md:text-4xl">
                  We run it. You run your program.
                </h2>
                <ul className="mt-6 space-y-3">
                  {['Configured for your program by our team', 'Clinical onboarding and training for every role', 'A person who knows your program by name'].map((b) => (
                    <li key={b} className="flex gap-3 text-[15px] text-muted">
                      <Check size={18} weight="bold" className="mt-0.5 shrink-0 text-teal" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap items-center gap-3 pt-9">
                  <Link to={CTA.fullService.href} className="btn-primary group">
                    {CTA.fullService.label}
                    <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <span className="text-sm text-muted">From {price('full-service')} per program / month</span>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal delay={100}>
            <article className="panel-dark relative flex h-full flex-col overflow-hidden rounded-2xl">
              <div className="relative aspect-[16/8] w-full overflow-hidden">
                <img
                  src={asset('images/heroes/demo.jpg')}
                  alt="A program director building on a laptop"
                  className="h-full w-full object-cover opacity-55"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c335f] to-transparent" />
                <span className="absolute right-5 top-5 rounded-full bg-brand-blue px-2.5 py-1 text-xs font-semibold text-white">
                  New
                </span>
              </div>
              <div className="flex flex-1 flex-col p-8 md:p-10">
                <p className="flex items-center gap-2 text-sm font-semibold text-[#8bbfe9]">
                  <Code size={18} weight="bold" />
                  Build
                </p>
                <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tightest md:text-4xl">
                  Our EHR. Yours to change.
                </h2>
                <ul className="mt-6 space-y-3">
                  {['Blueprint: the full suite, ready to build on', 'Slate: a blank slate to build anything', 'Describe a change. Your AI builds it the same day.'].map((b) => (
                    <li key={b} className="flex gap-3 text-[15px] opacity-90">
                      <Check size={18} weight="bold" className="mt-0.5 shrink-0 text-[#8bbfe9]" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap items-center gap-3 pt-9">
                  <Link to={CTA.how.href} className="btn group bg-white text-[#0c335f] hover:bg-white/90">
                    {CTA.how.label}
                    <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <span className="text-sm opacity-75">From {price('blank-slate')} per program / month</span>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

function Clients() {
  return (
    <section aria-label="Programs running on Attune" className="border-y border-line bg-surface">
      <Container className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8 py-10">
        {CLIENTS.map((c) => (
          <img
            key={c.name}
            src={asset(`images/logos/${c.file}`)}
            alt={c.name}
            className="h-12 w-auto opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 dark:opacity-75 dark:invert dark:hover:grayscale"
          />
        ))}
      </Container>
    </section>
  )
}

function Compare() {
  return (
    <section className="py-24 md:py-32">
      <Container className="max-w-5xl">
        <Heading title="Side by side." sub="Same platform, same record, same security. The difference is who makes the changes." />
        <div className="mt-12 overflow-x-auto rounded-2xl border border-line">
          <table className="w-full min-w-[620px] border-collapse text-left text-[15px]">
            <thead>
              <tr className="bg-surface">
                <th scope="col" className="w-[28%] px-6 py-4 text-sm font-medium text-muted" />
                <th scope="col" className="px-6 py-4 font-semibold">
                  <Link to="/full-service" className="hover:text-accent">Full-service</Link>
                </th>
                <th scope="col" className="px-6 py-4 font-semibold">
                  <Link to="/build" className="hover:text-accent">Build</Link>
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.map(([k, a, b]) => (
                <tr key={k} className="border-t border-line">
                  <th scope="row" className="px-6 py-4 text-sm font-medium text-muted">{k}</th>
                  <td className="px-6 py-4">{a}</td>
                  <td className="px-6 py-4">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 text-sm text-muted">
          Programs can switch paths as their team changes. <Link to="/pricing" className="text-accent">See full pricing</Link>
        </p>
      </Container>
    </section>
  )
}

function EitherWay() {
  const items = [
    { icon: Timer, t: 'Built on BlueStep', b: 'Attune runs on the BlueStep platform, 15 years in behavioral health. Our team includes people who worked in residential treatment.' },
    { icon: Stack, t: 'One record', b: 'EHR, CRM, Outcomes, and BlueIQ share one database. Nothing gets entered twice.' },
    { icon: ShieldCheck, t: 'HIPAA hosting and a BAA', b: 'Every plan, every path. Every change is logged and every push is a restorable snapshot.' },
  ]
  return (
    <section className="border-y border-line bg-surface py-24 md:py-32">
      <Container>
        <Heading title="Either way, you get the same foundation." />
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 70}>
              <it.icon size={28} className="text-accent" />
              <h3 className="mt-6 text-lg font-semibold tracking-tight">{it.t}</h3>
              <p className="mt-2 leading-relaxed text-muted">{it.b}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Origin() {
  return (
    <section className="py-24 md:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <img
            src={asset('images/heroes/about.jpg')}
            alt="Two staff members in conversation at a treatment program"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
            loading="lazy"
          />
        </Reveal>
        <Reveal delay={100}>
          <h2 className="text-3xl font-bold leading-[1.1] tracking-tightest md:text-5xl">
            We know how programs run.
          </h2>
          <p className="prose-body mt-6 max-w-[52ch]">
            Members of our team started in residential treatment, in direct care and program leadership. Most of what
            we build starts with a problem a program brought to us.
          </p>
          <Link to="/about" className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-accent">
            Our story
            <ArrowRight size={16} weight="bold" />
          </Link>
        </Reveal>
      </Container>
    </section>
  )
}

export default function Home() {
  useTitle()
  return (
    <>
      <Hero />
      <Paths />
      <Clients />
      <Compare />
      <EitherWay />
      <Origin />
      <ClosingCTA title="Not sure which path fits?" sub="Tell us how your program runs today. We'll tell you honestly which one we'd pick.">
        <OnAccentButton to={CTA.demo.href} solid>
          {CTA.demo.label}
        </OnAccentButton>
        <OnAccentButton to={CTA.pricing.href}>{CTA.pricing.label}</OnAccentButton>
      </ClosingCTA>
    </>
  )
}
