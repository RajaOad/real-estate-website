import Featured from '@/components/featured/Featured'
import HeroSection from '@/components/heroSection/HeroSection'
import React from 'react'

const page = () => {
  return (
    <>
      <HeroSection backgroundImage={"images/h1.jpg"} title={"Properties"} />
      <Featured title="Properties" />
    </>
  )
}

export default page