import About from '@/components/about/About'
import HeroSection from '@/components/heroSection/HeroSection'
import React from 'react'

const page = () => {
  return (
    <>
      <HeroSection backgroundImage={"images/h1.jpg"} title={"About Us"} />
      <About />
    </>
  )
}

export default page