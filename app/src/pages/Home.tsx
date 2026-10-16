import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  ClockCounterClockwise,
  FileLock,
  ShieldCheck,
  Trash,
} from '@phosphor-icons/react'
import BuildLog from '../components/BuildLog'
import { LISTINGS } from '../data/marketplace'
import { CTA } from '../site'
import { Button, ClosingCTA, Container, Heading, OnAccentButton, Reveal, asset, useTitle } from '../ui'

const CLIENTS = [
  { name: 'Alpine Academy', file: 'alpine-academy.svg' },
  { name: 'Ascent Behavioral Health', file: 'ascent-behavioral-health.png' },
  { name: 'Telos Academy', file: 'telos-academy.png' },
  { name: 'Velocity Health Group', file: 'velocity-health-group.png' },
]

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(60%_60%_at_75%_10%,rgb(var(--accent)/0.10),transparent_70%)]"
      />
      <Container className="relative grid items-center gap-12 pb-20 pt-12 md:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-28">
        <div className="rise">
          <h1 className="text-[2.75rem] font-semibold leading-[1.02] tracking-tightest sm:text-6xl lg:text-7xl">
            The EHR you build by asking.
          </h1>
          <p className="prose-body mt-6 max-w-[44ch]">
            Start from a proven behavioral health EHR. Describe what your program needs, and Claude builds it.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button to={CTA.build.href} arrow>
              {CTA.build.label}
            </Button>
            <Button to={CTA.how.href} variant="ghost">
              {CTA.how.label}
            </Button>
          </div>
        </div>
        <div className="rise [animation-delay:120ms]">
          <BuildLog />
        </div>
      </Container>
    </section>
  )
}

function Clients() {
  return (
    <section aria-label="Programs running on BlueStep" className="border-y border-line bg-surface">
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

function WaysIn() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <Heading
          title="Three ways to run BlueStep."
          sub="Same platform underneath. Pick how much you want to build yourself."
        />
        <div className="mt-14 grid gap-4 lg:grid-cols-[1.35fr_1fr] lg:grid-rows-2">
          <Reveal className="lg:row-span-2">
            <Link
              to="/build"
              className="group relative flex h-full min-h-[440px] flex-col justify-end overflow-hidden rounded-2xl panel-dark p-8 md:p-10"
            >
              <img
                src={asset('images/heroes/demo.jpg')}
                alt="A program director building on a laptop"
                className="absolute inset-0 h-full w-full object-cover opacity-45 transition duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d12] via-[#0a0d12]/60 to-transparent" />
              <div className="relative text-white">
                <p className="text-sm font-medium text-white/70">Builder</p>
                <h3 className="mt-2 max-w-md text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                  Start from our EHR. Change anything.
                </h3>
                <p className="mt-4 max-w-md leading-relaxed text-white/75">
                  The full behavioral health EHR, plus builder access. Your team and Claude shape it to your
                  program.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                  How building works
                  <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>

          <Reveal delay={80}>
            <Link to="/ehr" className="card group flex h-full flex-col p-8 transition-colors hover:border-faint">
              <p className="text-sm font-medium text-muted">Full-service</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">We run it. You run your program.</h3>
              <p className="mt-3 leading-relaxed text-muted">
                Onboarding, training, and support from people who have worked the floor.
              </p>
              <ArrowUpRight size={20} className="mt-auto self-end pt-4 text-faint transition group-hover:text-accent" />
            </Link>
          </Reveal>

          <Reveal delay={160}>
            <Link
              to="/blank-slate"
              className="group flex h-full flex-col rounded-2xl border border-accent/25 bg-accent-soft p-8 transition-colors hover:border-accent/50"
            >
              <p className="text-sm font-medium text-accent">Blank Slate</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">Keep your EHR. Build what it can't do.</h3>
              <p className="mt-3 leading-relaxed text-muted">
                A HIPAA-ready workspace for the apps your current system never got around to.
              </p>
              <ArrowUpRight size={20} className="mt-auto self-end pt-4 text-accent/60 transition group-hover:text-accent" />
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

function Proof() {
  return (
    <section className="border-y border-line bg-surface py-24 md:py-32">
      <Container className="grid gap-12 lg:grid-cols-[auto_1fr] lg:gap-24">
        <Reveal>
          <p className="kicker">Why now</p>
          <p className="mt-4 text-[7rem] font-semibold leading-[0.85] tracking-tightest text-accent md:text-[10rem]">
            20
          </p>
          <p className="mt-3 text-xl font-medium tracking-tight">minutes</p>
        </Reveal>
        <Reveal delay={100} className="max-w-2xl self-end">
          <h2 className="text-3xl font-semibold leading-[1.15] tracking-tightest md:text-4xl">
            That is how long Claude took to rebuild our e-signature feature for a program set up nothing like ours.
          </h2>
          <p className="prose-body mt-6">
            For 15 years, every program's setup drifted a little further from everyone else's. Sharing a feature
            meant weeks of custom work. Now Claude reads both systems and rebuilds the feature to fit yours.
          </p>
          <div className="mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-3">
            {[
              ['Pick a feature', 'From the marketplace, or describe your own.'],
              ['Claude reads your system', 'Your forms, roles, and workflows. Not a generic template.'],
              ['You review and ship', 'Every change is saved as a snapshot you can roll back.'],
            ].map(([t, b]) => (
              <div key={t}>
                <h3 className="font-medium">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{b}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

function MarketplaceRail() {
  const picks = LISTINGS.slice(0, 8)
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Heading
            title="Take what other programs built."
            sub="Every feature in the marketplace was built for a real program. Take it, and Claude fits it to yours."
          />
          <Button to={CTA.market.href} variant="ghost" arrow className="self-start md:self-auto">
            {CTA.market.label}
          </Button>
        </div>
      </Container>
      <div className="rail mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 scroll-px-5 md:px-8 md:scroll-px-8 xl:px-[calc((100vw_-_1240px)/2_+_2rem)] xl:scroll-px-[calc((100vw_-_1240px)/2_+_2rem)]">
        {picks.map((l, i) => (
          <Reveal key={l.slug} delay={i * 50} className="w-[280px] shrink-0 snap-start md:w-[320px]">
            <Link
              to={`/marketplace#${l.slug}`}
              className="card group flex h-full flex-col p-6 transition hover:-translate-y-0.5 hover:border-faint"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="rounded-full bg-raised px-2.5 py-1 font-medium text-muted">{l.category}</span>
                <span className="font-medium text-accent">{l.price}</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-tight">{l.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{l.summary}</p>
              <p className="mt-6 text-xs text-faint">by {l.publisher}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Guardrails() {
  return (
    <section className="border-t border-line bg-surface py-24 md:py-32">
      <Container>
        <Heading
          title="Freedom to build. Not freedom to break."
          sub="Builders get real access. The platform keeps the guardrails your compliance team expects."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-6">
          <Reveal className="md:col-span-4">
            <div className="relative h-full overflow-hidden rounded-2xl panel-dark p-8 md:p-10">
              <Trash size={40} weight="duotone" className="text-accent" />
              <h3 className="mt-16 text-3xl font-semibold tracking-tight md:text-4xl">Claude can't delete.</h3>
              <p className="mt-3 max-w-md leading-relaxed opacity-70">
                Not a field, not a form, not a record. Removing anything takes a person, on purpose.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80} className="md:col-span-2">
            <div className="card h-full p-8">
              <ClockCounterClockwise size={28} className="text-accent" />
              <h3 className="mt-10 text-xl font-semibold tracking-tight">Every push is a snapshot.</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">Roll any change back to the version before it.</p>
            </div>
          </Reveal>
          <Reveal delay={120} className="md:col-span-3">
            <div className="card h-full p-8">
              <FileLock size={28} className="text-accent" />
              <h3 className="mt-10 text-xl font-semibold tracking-tight">Every change is logged.</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Who changed what, and when. Deleted entries stay recoverable from change history.
              </p>
            </div>
          </Reveal>
          <Reveal delay={160} className="md:col-span-3">
            <div className="h-full rounded-2xl border border-accent/25 bg-accent-soft p-8">
              <ShieldCheck size={28} className="text-accent" />
              <h3 className="mt-10 text-xl font-semibold tracking-tight">HIPAA hosting and a BAA.</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Your data stays on BlueStep's healthcare platform, whatever you build on top of it.
              </p>
            </div>
          </Reveal>
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
            src={asset('images/heroes/for-clinicians.jpg')}
            alt="A therapist leading a group session"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
            loading="lazy"
          />
        </Reveal>
        <Reveal delay={100}>
          <blockquote>
            <p className="text-3xl font-semibold leading-[1.2] tracking-tightest md:text-[2.6rem]">
              &ldquo;We didn't come to behavioral health from a software company. We came to software from behavioral
              health.&rdquo;
            </p>
            <footer className="mt-8 text-sm text-muted">
              <span className="font-medium text-ink">Brandon Payne</span>
              <br />
              Former floor staff at Havenwood Academy. Still builds.
            </footer>
          </blockquote>
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
      <Clients />
      <WaysIn />
      <Proof />
      <MarketplaceRail />
      <Guardrails />
      <Origin />
      <ClosingCTA
        title="Build the EHR your program actually runs on."
        sub="We are opening builder access to a small group of programs first. Tell us what you would build."
      >
        <OnAccentButton to={CTA.build.href} solid>
          {CTA.build.label}
        </OnAccentButton>
        <OnAccentButton to={CTA.pricing.href}>{CTA.pricing.label}</OnAccentButton>
      </ClosingCTA>
    </>
  )
}
