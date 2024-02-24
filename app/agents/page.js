import AgentSection from '@/components/agentSection/AgentSection'
import HeroSection from '@/components/heroSection/HeroSection';
import React from 'react'

const page = () => {
  return (
    <>
      <HeroSection backgroundImage={"images/h1.jpg"} title={"Our Agents"} />
      <AgentSection />
    </>
  )
}

export default page