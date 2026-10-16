import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Buildings, ChatsCircle, ShieldCheck, Timer } from '@phosphor-icons/react'
import BuildLog from '../components/BuildLog'
import { LISTINGS } from '../data/marketplace'
import { PRODUCTS } from '../data/products'
import { ROLES } from '../data/roles'
import { CTA } from '../site'
import { Button, ClosingCTA, Container, Heading, OnAccentButton, Reveal, asset, useTitle } from '../ui'

const CLIENTS = [
  { name: 'Alpine Academy', file: 'alpine-academy.svg' },
  { name: 'Ascent Behavioral Health', file: 'ascent-behavioral-health.png' },
  { name: 'Telos Academy', file: 'telos-academy.png' },
  { name: 'Velocity Health Group', file: 'velocity-health-group.png' },
]

const WHY = [
  { icon: Buildings, t: 'Built inside a behavioral health facility', b: 'Brandon built the first version while working at Havenwood Academy, because nothing on the market fit how residential programs run.' },
  { icon: Timer, t: '15 years of clinical workflow depth', b: "We've lived the documentation burden, the audits, and the shift-change handoffs. That experience is in the product." },
  { icon: ChatsCircle, t: 'You reach a person, not a ticket queue', b: 'Call with a question and you reach someone who knows your program by name. There is no tier-1 support layer.' },
  { icon: ShieldCheck, t: 'Built for compliance, not workarounds', b: 'Behavioral health compliance is its own thing. BlueStep is built around the documentation, incidents, and outcomes you actually face.' },
]

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(60%_60%_at_80%_10%,rgb(var(--accent)/0.10),transparent_70%)]"
      />
      <Container className="relative grid items-center gap-12 pb-20 pt-12 md:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-24">
        <div className="rise">
          <h1 className="text-[2.6rem] font-semibold leading-[1.03] tracking-tightest sm:text-6xl lg:text-[4.1rem]">
            The EHR built inside behavioral health.
          </h1>
          <p className="prose-body mt-6 max-w-[46ch]">
            Clinical, nursing, admissions, and outcomes in one record. Run it as we built it, or build on it with
            Claude.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button to={CTA.demo.href} arrow>
              {CTA.demo.label}
            </Button>
            <Button to={CTA.how.href} variant="ghost">
              {CTA.how.label}
            </Button>
          </div>
        </div>
        <img
          src={asset('images/heroes/homepage.jpg')}
          alt="A clinician taking notes during a session"
          className="rise aspect-[5/4] w-full rounded-2xl object-cover [animation-delay:120ms]"
        />
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

function Why() {
  return (
    <section className="py-24 md:py-32">
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Heading
            title="Four things a generic EHR vendor can't say."
            sub="Every feature started as a problem one of us had on the floor."
          />
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent">
            Our story
            <ArrowRight size={16} weight="bold" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {WHY.map((w, i) => (
            <Reveal key={w.t} delay={i * 60} className={`rounded-2xl p-7 ${i === 0 ? 'bg-accent-soft' : 'card'}`}>
              <w.icon size={26} className="text-accent" />
              <h3 className="mt-8 text-lg font-semibold leading-snug tracking-tight">{w.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{w.b}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

function WhoWeHelp() {
  return (
    <section className="border-y border-line bg-surface py-24 md:py-32">
      <Container>
        <Heading title="Software that fits how your team works." />
        <div className="mt-12 grid gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {ROLES.slice(0, 4).map((r, i) => (
            <Reveal key={r.slug} delay={i * 60}>
              <Link to={`/${r.slug}`} className="group block">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={asset(r.image)}
                    alt={r.alt}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <p className="mt-4 flex items-center justify-between font-semibold">
                  For {r.nav.toLowerCase()}
                  <ArrowUpRight size={18} className="text-faint transition group-hover:text-accent" />
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{r.headline}</p>
              </Link>
            </Reveal>
          ))}
        </div>
        <Link to="/for-referral-partners" className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-accent">
          Educational consultant? See BlueStep for referral partners
          <ArrowRight size={16} weight="bold" />
        </Link>
      </Container>
    </section>
  )
}

function Products() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <Heading
          title="One record. Every part of the stay."
          sub="Pick the products you need. They share one database, so nothing gets entered twice."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <Link
                to={`/products/${p.slug}`}
                className={`group flex h-full min-h-[240px] flex-col rounded-2xl p-7 transition ${
                  i === 0 ? 'bg-accent text-accent-ink hover:brightness-110' : 'card hover:border-faint'
                }`}
              >
                <p.icon size={28} className={i === 0 ? '' : 'text-accent'} />
                <h3 className="mt-auto pt-10 text-xl font-semibold tracking-tight">{p.name}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${i === 0 ? 'opacity-85' : 'text-muted'}`}>{p.card}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

/** The highlight: the one dark band on the page. */
function BuildOnIt() {
  return (
    <section className="panel-dark py-24 md:py-32 dark:border-x-0">
      <Container className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div>
          <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-medium">New</span>
          <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tightest md:text-6xl">
            Now you can build on it.
          </h2>
          <p className="mt-6 max-w-[48ch] text-lg leading-relaxed opacity-75">
            Describe what your program needs and Claude builds it inside your EHR. Same platform, same guardrails,
            done the same day.
          </p>
          <dl className="mt-10 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
            {[
              ['20 min', 'to rebuild our e-signature feature for a program set up nothing like ours'],
              [String(LISTINGS.length), 'features free in the marketplace, each built for a real program'],
              ['0', 'things Claude can delete. That always takes a person.'],
            ].map(([n, d]) => (
              <div key={n}>
                <dt className="text-3xl font-semibold tracking-tightest text-[#60a5eb]">{n}</dt>
                <dd className="mt-2 text-sm leading-relaxed opacity-70">{d}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to={CTA.how.href} className="btn bg-white text-[#0e1116] hover:bg-white/90">
              {CTA.how.label}
              <ArrowRight size={16} weight="bold" />
            </Link>
            <Link to={CTA.market.href} className="btn border border-white/25 text-white hover:bg-white/10">
              {CTA.market.label}
            </Link>
          </div>
        </div>
        <div className="text-ink">
          <BuildLog />
        </div>
      </Container>
    </section>
  )
}

function WaysToRun() {
  const ways = [
    { to: '/products/ehr', name: 'Full-service', t: 'We set it up and stay on call.', b: 'Configuration, clinical onboarding, training, and a person who knows your program.' },
    { to: '/build', name: 'Builder', t: 'Our EHR, yours to change.', b: 'The full EHR plus builder access. Your team and Claude shape it to your program.' },
    { to: '/blank-slate', name: 'Blank Slate', t: "Keep your EHR. Build what it can't.", b: 'A HIPAA-ready workspace for the apps your current system never got around to.' },
  ]
  return (
    <section className="py-24 md:py-32">
      <Container>
        <Heading title="However much you want to build." sub="Same platform underneath. Switch as your team changes." />
        <div className="mt-12 divide-y divide-line border-y border-line">
          {ways.map((w, i) => (
            <Reveal key={w.name} delay={i * 60}>
              <Link to={w.to} className="group grid items-baseline gap-2 py-7 md:grid-cols-[160px_1fr_1.2fr_auto] md:gap-8">
                <span className="text-sm font-medium text-accent">{w.name}</span>
                <span className="text-xl font-semibold tracking-tight">{w.t}</span>
                <span className="text-muted">{w.b}</span>
                <ArrowUpRight size={20} className="hidden text-faint transition group-hover:text-accent md:block" />
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Origin() {
  return (
    <section className="border-t border-line bg-surface py-24 md:py-32">
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
          <blockquote>
            <p className="text-3xl font-semibold leading-[1.2] tracking-tightest md:text-[2.6rem]">
              &ldquo;We didn't come to behavioral health from a software company. We came to software from behavioral
              health.&rdquo;
            </p>
            <footer className="mt-8 text-sm text-muted">
              <span className="font-medium text-ink">Brandon Payne</span>
              <br />
              Executive Director. Former floor staff at Havenwood Academy.
            </footer>
          </blockquote>
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
      <Why />
      <WhoWeHelp />
      <Products />
      <BuildOnIt />
      <WaysToRun />
      <Origin />
      <ClosingCTA
        title="See BlueStep with your own workflows."
        sub="Talk to someone who understands your world. Bring your hardest documentation problem."
      >
        <OnAccentButton to={CTA.demo.href} solid>
          {CTA.demo.label}
        </OnAccentButton>
        <OnAccentButton to={CTA.build.href}>{CTA.build.label}</OnAccentButton>
      </ClosingCTA>
    </>
  )
}
