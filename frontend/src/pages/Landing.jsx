import Header from '../components/landing/Header'
import Hero from '../components/landing/Hero'
import Steps from '../components/landing/Steps'
import Showcase from '../components/landing/Showcase'
import CtaBanner from '../components/landing/CtaBanner'
import Footer from '../components/landing/Footer'

export default function Landing() {
  return (
    <div className="flex min-h-svh flex-col overflow-x-hidden bg-cream text-ink">
      <Header />
      <Hero />
      <Steps />
      <Showcase />
      <CtaBanner />
      <div className="grow" />
      <Footer />
    </div>
  )
}
