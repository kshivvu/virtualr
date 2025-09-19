import React from 'react'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Foopter from './components/Foopter'

const App = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <FeatureSection/>
      <Workflow/>
      <Pricing />
      <Testimonials />
      <Foopter/>
    </div>
  )
}

export default App