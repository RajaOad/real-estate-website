
import About from '@/components/about/About'
import AgentSection from '@/components/agentSection/AgentSection'
import Featured from '@/components/featured/Featured'
import Hero from '@/components/hero/Hero'
import IntroSection from '@/components/introSection/IntroSection'
import TestimonialSection from '@/components/testimonial/TestimonialSection'
import React from 'react'

const Home = () => {
  return (
    <>
    <Hero />
    <Featured title="Featured Properties" />
    <About />
    <IntroSection />
    <TestimonialSection />
    <AgentSection />
    </>
  )
}

export default Home
