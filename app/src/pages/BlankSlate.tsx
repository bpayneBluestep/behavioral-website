import {
  ArrowsClockwise,
  ClipboardText,
  GraduationCap,
  HouseLine,
  ShieldWarning,
  Signature,
  UserList,
} from '@phosphor-icons/react'
import { CTA } from '../site'
import { Button, ClosingCTA, Container, Heading, OnAccentButton, PageHero, Reveal, asset, useTitle } from '../ui'

const IDEAS = [
  { icon: ShieldWarning, t: 'Incident tracking', b: 'Report, review, and trend every incident by unit.', big: true },
  { icon: UserList, t: 'Q15 rounds', b: 'Headcount checks on a tablet.' },
  { icon: GraduationCap, t: 'Staff training', b: 'Certifications and expirations in one place.' },
  { icon: HouseLine, t: 'Family portal', b: 'What parents need, and nothing more.' },
  { icon: Signature, t: 'E-signatures', b: 'Consents and agreements, signed anywhere.' },
]

export default function BlankSlate() {
  useTitle('Blank Slate')
  return (
    <>
      <PageHero
        kicker="Blank Slate"
        title="Keep your EHR. Build everything around it."
        sub="A HIPAA-ready workspace for the apps your EHR never got around to. Describe one, and Claude builds it."
      >
        <Button to="/talk?path=blank-slate" arrow>
          Start a blank slate
        </Button>
        <Button to={CTA.pricing.href} variant="ghost">
          {CTA.pricing.label}
        </Button>
      </PageHero>

      <section className="py-24 md:py-32">
        <Container>
          <Heading
            title="What programs build first."
            sub="Most start with the thing their staff track on paper or in a spreadsheet today."
          />
          <div className="mt-14 grid auto-rows-[minmax(170px,auto)] gap-4 md:grid-cols-4">
            {IDEAS.map((idea, i) =>
              idea.big ? (
                <Reveal key={idea.t} className="relative overflow-hidden rounded-2xl md:col-span-2 md:row-span-2">
                  <img
                    src={asset('images/heroes/for-nurses.jpg')}
                    alt="A nurse at a residential program"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d12]/90 via-[#0a0d12]/30 to-transparent" />
                  <div className="relative flex h-full min-h-[340px] flex-col justify-end p-8 text-white">
                    <idea.icon size={30} />
                    <h3 className="mt-4 text-2xl font-semibold tracking-tight">{idea.t}</h3>
                    <p className="mt-1 text-white/75">{idea.b}</p>
                  </div>
                </Reveal>
              ) : (
                <Reveal key={idea.t} delay={i * 50} className={`rounded-2xl p-6 ${i === 3 ? 'bg-accent-soft' : 'card'}`}>
                  <idea.icon size={24} className="text-accent" />
                  <h3 className="mt-8 font-semibold">{idea.t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{idea.b}</p>
                </Reveal>
              ),
            )}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface py-24 md:py-32">
        <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Heading
            title="Works next to the EHR you already have."
            sub="No rip and replace. Your clinical record stays where it is. BlueStep handles the work around it."
          />
          <Reveal className="card p-7 md:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <ArrowsClockwise size={20} weight="bold" />
              </span>
              <div>
                <p className="font-semibold">Census sync</p>
                <p className="text-sm text-muted">In development</p>
              </div>
            </div>
            <p className="mt-6 leading-relaxed text-muted">
              Your client roster and admissions sync in nightly from your current EHR. Nobody types a name twice, and
              every app you build knows who is in which program today.
            </p>
            <div className="mt-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-xl bg-raised p-4 text-center text-sm">
              <span className="rounded-lg bg-surface px-3 py-2 font-medium">Your EHR</span>
              <ArrowsClockwise size={18} className="text-accent" />
              <span className="rounded-lg bg-surface px-3 py-2 font-medium">Blank Slate</span>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <ClipboardText size={32} className="mx-auto text-accent" />
            <h2 className="mt-6 text-3xl font-semibold leading-[1.15] tracking-tightest md:text-5xl">
              When you are ready, the EHR is right there.
            </h2>
            <p className="prose-body mx-auto mt-6 max-w-[52ch]">
              Your apps, your data, and your builder already live on BlueStep. Moving your clinical record over is a
              short step, not a migration project.
            </p>
            <div className="mt-9 flex justify-center">
              <Button to="/ehr" variant="ghost" arrow>
                Explore the EHR
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <ClosingCTA
        title="What would your staff stop doing on paper?"
        sub="Tell us the first thing you would build. We will set up your blank slate."
      >
        <OnAccentButton to="/talk?path=blank-slate" solid>
          Start a blank slate
        </OnAccentButton>
        <OnAccentButton to={CTA.market.href}>{CTA.market.label}</OnAccentButton>
      </ClosingCTA>
    </>
  )
}
