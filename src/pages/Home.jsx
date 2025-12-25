import HeroSlider from '../components/HeroSlider'
import WelcomeSection from '../components/sections/WelcomeSection'
import PhilosophySection from '../components/sections/PhilosophySection'
import PortfolioGrid from '../components/sections/PortfolioGrid'
import QuoteSection from '../components/sections/QuoteSection'
import InstagramSection from '../components/sections/InstagramSection'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <WelcomeSection />
      <PhilosophySection />
      <PortfolioGrid />
      <div className="py-12 bg-white text-center">
        <div className="container mx-auto px-4 max-w-6xl">
          <Link
            to="/couple-stories"
            className="inline-block px-8 py-3 border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-colors"
          >
            See our "Weddingnama couple's" stories!
          </Link>
        </div>
      </div>
      <QuoteSection />
      <InstagramSection />
    </div>
  )
}

export default Home

