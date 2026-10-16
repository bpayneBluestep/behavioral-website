import {
  Brain,
  ChartLineUp,
  ClipboardText,
  FirstAidKit,
  Funnel,
  Lock,
  Pill,
  Sparkle,
  UsersThree,
} from '@phosphor-icons/react'
import { CTA } from '../site'
import { Button, ClosingCTA, Container, Heading, OnAccentButton, PageHero, Reveal, asset, useTitle } from '../ui'

const EHR_FEATURES = [
  { icon: ClipboardText, t: 'Clinical documentation', b: 'Notes, assessments, and group sessions built for residential programs.' },
  { icon: FirstAidKit, t: 'Treatment plans', b: 'Problems, goals, and interventions that carry into every note.' },
  { icon: Pill, t: 'eMAR', b: 'Med passes, PRNs, holds, and counts in one nursing workflow.' },
  { icon: Lock, t: 'Lock and cosign', b: 'Signed documents lock. Supervisors cosign. Every unlock is logged.' },
]

function Module({
  id,
  icon: Icon,
  name,
  title,
  body,
  points,
  image,
  alt,
  flip = false,
}: {
  id: string
  icon: typeof Brain
  name: string
  title: string
  body: string
  points: string[]
  image?: string
  alt?: string
  flip?: boolean
}) {
  return (
    <section id={id} className="scroll-mt-20 py-20 md:py-28">
      <Container className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${flip ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        <Reveal>
          <p className="flex items-center gap-2 text-sm font-medium text-accent">
            <Icon size={18} weight="bold" />
            {name}
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tightest md:text-5xl">{title}</h2>
          <p className="prose-body mt-5 max-w-[52ch]">{body}</p>
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-[15px]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
        {image ? (
          <Reveal delay={100}>
            <img src={asset(image)} alt={alt} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" />
          </Reveal>
        ) : null}
      </Container>
    </section>
  )
}

export default function Ehr() {
  useTitle('EHR')
  return (
    <>
      <PageHero
        kicker="The EHR"
        title="A complete behavioral health EHR. Ready on day one."
        sub="Clinical, nursing, admissions, and outcomes in one record. Run it as we built it, or make it yours."
      >
        <Button to={CTA.talk.href} arrow>
          {CTA.talk.label}
        </Button>
        <Button to={CTA.pricing.href} variant="ghost">
          {CTA.pricing.label}
        </Button>
      </PageHero>

      <section id="clinical" className="scroll-mt-20 py-20 md:py-28">
        <Container>
          <Heading
            title="Built inside a residential program."
            sub="Notes get written twice. Utilization reviews start from scratch every week. Surveys arrive unannounced. We lived all of it for 15 years, so the record is shaped around it."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {EHR_FEATURES.map((f, i) => (
              <Reveal key={f.t} delay={i * 60} className={`rounded-2xl p-7 ${i === 0 ? 'bg-accent text-accent-ink' : 'card'}`}>
                <f.icon size={26} className={i === 0 ? '' : 'text-accent'} />
                <h3 className="mt-10 font-semibold">{f.t}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${i === 0 ? 'opacity-85' : 'text-muted'}`}>{f.b}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <div className="border-y border-line bg-surface">
        <Module
          id="crm"
          icon={Funnel}
          name="CRM"
          title="Empty beds are a revenue crisis."
          body="Referrals, leads, and pre-admissions in one record that flows straight into the chart. Same database. No API. No migration."
          points={['Referral network and source tracking', 'Lead pipeline with clear ownership', 'Pre-admission forms families fill out once']}
          image="images/heroes/for-admissions.jpg"
          alt="An admissions director on a call with a family"
        />
      </div>

      <Module
        id="outcomes"
        icon={ChartLineUp}
        name="Outcomes"
        title="Payers want outcomes. Now you have them."
        body="Surveys go out on schedule from intake to after discharge. Responses become trends tied to the clinical record."
        points={['Scheduled surveys across the stay', 'Delivered where families will answer', 'Trends by program, cohort, and time']}
        image="images/heroes/for-executives.jpg"
        alt="Leaders reviewing outcome charts"
        flip
      />

      <section id="blueiq" className="scroll-mt-20 border-y border-line bg-surface py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="flex items-center gap-2 text-sm font-medium text-accent">
              <Sparkle size={18} weight="fill" />
              BlueIQ
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tightest md:text-5xl">
              The record already knows. BlueIQ puts it to work.
            </h2>
            <p className="prose-body mt-5 max-w-[50ch]">
              BlueIQ drafts from what your team already documented. Your staff reviews and signs. Nothing goes out
              without a human decision.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Utilization reviews', 'Drafted from the chart. Hours per patient become minutes.'],
              ['Dictation', 'Talk through a note. It comes back clean, classified, and ready to sign.'],
              ['Document intelligence', 'Summaries and cited answers from a pile of records.'],
              ['Clear usage', 'Measured in credits, so you always know what it costs.'],
            ].map(([t, b], i) => (
              <Reveal key={t} delay={i * 60} className="card p-6">
                <Brain size={22} className="text-accent" />
                <h3 className="mt-6 font-semibold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{b}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <Heading title="Two ways to run it." sub="The same EHR either way. The difference is who changes it." />
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            <Reveal className="card p-8 md:p-10">
              <UsersThree size={30} className="text-accent" />
              <h3 className="mt-8 text-2xl font-semibold tracking-tight">Full-service</h3>
              <p className="mt-3 leading-relaxed text-muted">
                We configure it, train your staff, and build what you ask for. You reach a person who knows your
                program by name.
              </p>
              <Button to={CTA.talk.href} variant="ghost" className="mt-8">
                {CTA.talk.label}
              </Button>
            </Reveal>
            <Reveal delay={80} className="rounded-2xl panel-dark p-8 md:p-10">
              <Sparkle size={30} weight="fill" className="text-accent" />
              <h3 className="mt-8 text-2xl font-semibold tracking-tight">Builder</h3>
              <p className="mt-3 leading-relaxed opacity-75">
                You get the whole EHR plus builder access. Your team and Claude change anything, any day, without
                waiting on us.
              </p>
              <Button to={CTA.build.href} className="mt-8" arrow>
                {CTA.build.label}
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>

      <ClosingCTA
        title="See it with your own workflows."
        sub="Bring your hardest documentation problem. We will show you how BlueStep handles it."
      >
        <OnAccentButton to={CTA.talk.href} solid>
          {CTA.talk.label}
        </OnAccentButton>
        <OnAccentButton to={CTA.pricing.href}>{CTA.pricing.label}</OnAccentButton>
      </ClosingCTA>
    </>
  )
}
