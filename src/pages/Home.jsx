import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import BimPhilosophy from '../components/BimPhilosophy.jsx'
import HowSyncronApproachesBim from '../components/HowSyncronApproachesBim.jsx'
import Activities from '../components/Activities.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Career from '../components/Career.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <div>
      <div className="bg-neutral-100 pt-0">
        <Navbar />
        <Hero />
         <Activities />
         <Testimonials />
        <HowSyncronApproachesBim />
      </div>

      <BimPhilosophy />
      <Career />
      <Footer />
    </div>
  )
}
