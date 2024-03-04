import About from '@/components/about/About'
import AgentSection from '@/components/agentSection/AgentSection'
import CallToAction from '@/components/callToAction/CallToAction'
import HeroSection from '@/components/heroSection/HeroSection'
import React from 'react'

const page = () => {
  return (
    <>
      <HeroSection backgroundImage={"images/h1.jpg"} title={"About Us"} />
      <About />
      <AgentSection />
      <CallToAction />
    </>
  )
}

export default page