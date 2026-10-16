import {
  BookOpenText,
  ChatCircleText,
  CheckSquareOffset,
  ClockCounterClockwise,
  FileLock,
  Lifebuoy,
  PlugsConnected,
  ShieldCheck,
  Trash,
  Wrench,
} from '@phosphor-icons/react'
import { BUILD_HELP_RATE } from '../data/pricing'
import { CTA } from '../site'
import {
  Button,
  ClosingCTA,
  Container,
  Heading,
  OnAccentButton,
  PageHero,
  Reveal,
  useTitle,
} from '../ui'

// A real session transcript shape: request, the platform calls Claude makes, review.
const SESSION: { who: 'you' | 'claude' | 'tool'; text: string }[] = [
  { who: 'you', text: 'Take the E-Signature Agreements listing and build it for our program.' },
  { who: 'claude', text: 'Reading the listing spec and your setup. Your admissions forms differ from the reference build in three places. I will map them rather than copy them.' },
  { who: 'tool', text: 'list_forms  ·  41 forms read' },
  { who: 'tool', text: 'create form  "Agreement"  ·  9 fields' },
  { who: 'tool', text: 'grant access  Admissions: edit  ·  Clinical: view' },
  { who: 'tool', text: 'push --snapshot  "Add e-signature agreements"' },
  { who: 'claude', text: 'Built. 11 of 11 acceptance checks pass. One trap from the listing applied: signed PDFs need a unique file name per signer.' },
]

const KIT = [
  {
    icon: ChatCircleText,
    title: 'Claude',
    body: 'Describe what you need in plain English. Claude plans it, builds it, and explains what it did.',
  },
  {
    icon: PlugsConnected,
    title: 'A direct line to the platform',
    body: 'Claude works on your forms, fields, permissions, and screens directly. No exports, no copy and paste.',
  },
  {
    icon: BookOpenText,
    title: 'The BlueStep reference',
    body: '15 years of platform knowledge and every known trap, written down so Claude reads it first.',
  },
  {
    icon: CheckSquareOffset,
    title: 'Specs and acceptance checks',
    body: 'Larger builds start with a short plan you approve, and end with checks that prove it works.',
  },
]

function Session() {
  return (
    <div className="card overflow-hidden">
      <div className="flex items-center gap-2 border-b border-line px-5 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="ml-3 font-mono text-xs text-faint">builder session</span>
      </div>
      <ol className="space-y-4 p-5 md:p-6">
        {SESSION.map((line, i) => (
          <Reveal as="li" key={i} delay={i * 90}>
            {line.who === 'tool' ? (
              <p className="ml-6 border-l-2 border-accent/40 pl-3 font-mono text-[13px] text-muted">{line.text}</p>
            ) : (
              <div className="flex gap-3">
                <span
                  className={`mt-0.5 shrink-0 self-start rounded-md px-1.5 py-0.5 font-mono text-[11px] font-medium ${
                    line.who === 'you' ? 'bg-raised text-ink' : 'bg-accent-soft text-accent'
                  }`}
                >
                  {line.who === 'you' ? 'you' : 'claude'}
                </span>
                <p className="text-[15px] leading-relaxed">{line.text}</p>
              </div>
            )}
          </Reveal>
        ))}
      </ol>
    </div>
  )
}

export default function Build() {
  useTitle('Build')
  return (
    <>
      <PageHero
        kicker="Builder"
        title="Build like our team builds."
        sub="Builders get the same tools BlueStep engineers use every day. Claude, a direct line to the platform, and a reference that knows every trap."
      >
        <Button to={CTA.build.href} arrow>
          {CTA.build.label}
        </Button>
        <Button to={CTA.market.href} variant="ghost">
          {CTA.market.label}
        </Button>
      </PageHero>

      <section className="py-24 md:py-32">
        <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Heading
              title="Describe it. Review it. Ship it."
              sub="A build is a conversation. You say what the program needs. Claude does the platform work, shows you every step, and saves a snapshot before anything goes live."
            />
            <dl className="mt-10 space-y-6">
              {[
                ['Who builds', 'Someone on your team who likes to build. An IT lead, an ops director, a clinician who tinkers. Not necessarily a developer.'],
                ['How long', 'Small changes take minutes. A marketplace feature is usually an afternoon.'],
                ['What it costs', 'Building is included in your plan. There is no per-change fee.'],
              ].map(([t, d]) => (
                <div key={t} className="border-l-2 border-line pl-5">
                  <dt className="font-medium">{t}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted">{d}</dd>
                </div>
              ))}
            </dl>
          </div>
          <Session />
        </Container>
      </section>

      <section className="border-y border-line bg-surface py-24 md:py-32">
        <Container>
          <Heading title="What builders get." />
          <div className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-2">
            {KIT.map((k, i) => (
              <Reveal key={k.title} delay={i * 70} className="flex gap-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <k.icon size={22} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{k.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{k.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="trust" className="scroll-mt-20 py-24 md:py-32">
        <Container>
          <Heading
            title="The guardrails stay on."
            sub="Builder access is real access. These protections hold no matter who is building."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Trash, t: "Claude can't delete", b: 'Removing a field, form, or record always takes a person.' },
              { icon: ClockCounterClockwise, t: 'Snapshots', b: 'Every push is saved as a version you can restore.' },
              { icon: FileLock, t: 'Audit trail', b: 'Every change is logged with who made it and when.' },
              { icon: ShieldCheck, t: 'HIPAA and a BAA', b: 'Healthcare hosting and a signed BAA on every plan.' },
            ].map((g) => (
              <div key={g.t} className="bg-surface p-7">
                <g.icon size={26} className="text-accent" />
                <h3 className="mt-8 font-semibold">{g.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{g.b}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-24 md:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Heading
            title="We support the platform. You own what you build."
            sub="Builder plans trade clinical onboarding for freedom. Here is exactly where the line sits."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal className="card p-7">
              <Lifebuoy size={26} className="text-accent" />
              <h3 className="mt-6 font-semibold">Included</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                <li>The platform not behaving as documented</li>
                <li>Builder tools and Claude connection issues</li>
                <li>Hosting, uptime, and security</li>
                <li>Pointing you at the right pattern</li>
              </ul>
            </Reveal>
            <Reveal delay={80} className="card p-7">
              <Wrench size={26} className="text-muted" />
              <h3 className="mt-6 font-semibold">${BUILD_HELP_RATE} an hour</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                <li>Fixing or finishing something you built</li>
                <li>Restoring data after a builder mistake</li>
                <li>Building features for you</li>
                <li>Clinical training for your staff</li>
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <ClosingCTA
        title="Have someone who likes to build?"
        sub="We are starting with a small group of builder programs. Tell us about yours."
      >
        <OnAccentButton to={CTA.build.href} solid>
          {CTA.build.label}
        </OnAccentButton>
        <OnAccentButton to={CTA.pricing.href}>{CTA.pricing.label}</OnAccentButton>
      </ClosingCTA>
    </>
  )
}
