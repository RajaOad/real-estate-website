
import About from '@/components/about/About'
import AgentSection from '@/components/agentSection/AgentSection'
import CallToAction from '@/components/callToAction/CallToAction'
import Featured from '@/components/featured/Featured'
import Hero from '@/components/hero/Hero'
import IntroSection from '@/components/introSection/IntroSection'
import TestimonialSection from '@/components/testimonial/TestimonialSection'
import React from 'react'

const Home = () => {
  const fakeData = [
    {
      _id: 1,
      image: 'images/h1.jpg',
      price: '$300,000',
      agentImage: 'images/h1.jpg',
      agentName: 'John Dorf',
      ago: '2 weeks ago',
      title: 'Sunny Loft Property',
      location: 'New York',
      type: 'sale',
      beds: 3,
      baths: 2,
      sqft: '1,878 sqft'
    },
    {
      _id: 2,
      image: 'images/h2.jpg',
      price: '$1,500/month',
      agentImage: 'images/h2.jpg',
      agentName: 'Emily Smith',
      ago: '1 week ago',
      title: 'Cozy Apartment for Rent',
      location: 'Los Angeles',
      type: 'rent',
      beds: 2,
      baths: 1,
      sqft: '950 sqft'
    },
    {
      id: 3,
      image: 'images/h3.jpg',
      price: '$450,000',
      agentImage: 'images/h3.jpg',
      agentName: 'Mark Johnson',
      ago: '3 days ago',
      title: 'Luxurious Villa',
      location: 'Miami',
      type: 'sale',
      beds: 5,
      baths: 4,
      sqft: '3,200 sqft'
    },
    {
      id: 4,
      image: 'images/h4.jpg',
      price: '$2,200/month',
      agentImage: 'images/h4.jpg',
      agentName: 'Sophia Brown',
      ago: '5 days ago',
      title: 'Modern Condo',
      location: 'Chicago',
      type: 'rent',
      beds: 1,
      baths: 1,
      sqft: '750 sqft'
    },
    // Add more fake data objects as needed
  ];

  return (
    <>
    <Hero />
    <Featured />
    <About />
    <IntroSection />
    <TestimonialSection />
    <AgentSection />
    <CallToAction />
    </>
  )
}

export default Home
