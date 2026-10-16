import { CTA } from '../site'
import { Button, Container, useTitle } from '../ui'

export default function NotFound() {
  useTitle('Page not found')
  return (
    <section className="py-32 md:py-44">
      <Container className="max-w-xl text-center">
        <p className="font-mono text-sm text-accent">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tightest md:text-5xl">That page moved or never existed.</h1>
        <p className="prose-body mt-5">The site was rebuilt. Most of what you are looking for is one click away.</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button to="/" arrow>
            Go home
          </Button>
          <Button to={CTA.demo.href} variant="ghost">
            {CTA.demo.label}
          </Button>
        </div>
      </Container>
    </section>
  )
}
