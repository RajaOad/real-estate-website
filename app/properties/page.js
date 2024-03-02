"use client"

import HeroSection from '@/components/heroSection/HeroSection'
import PropertyCard from '@/components/propertyCard/PropertyCard'
import PropertyCardSkeleton from '@/components/propertyCardSkeleton/PropertyCardSkeleton'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        // Make a GET request to fetch properties
        const response = await fetch('/api/getallproperties');

        // Parse JSON response
        const data = await response.json();

        // Check if the response indicates success
        if (data.success === true) {
          // Update state with properties data
          setProperties(data.properties);
        } else {
          // Handle error if the response indicates failure
          setErrorMsg(data.msg)
        }
      } catch (error) {
        // Handle any errors that occurred during the fetch operation
        console.error('Error fetching properties:', error);
      } finally {
        setLoading(false);
      }
    };

    // Call the fetchData function to initiate the fetch operation
    fetchData();
  }, []);

  if (loading) {
    return            <>
    <HeroSection backgroundImage={"images/h1.jpg"} title={"Properties"} />
    <section className="bg-gray-100">
    <div className="container mx-auto py-24 px-4 md:px-16">
      <div className="text-center mb-20" >
        <span className="text-xs md:text-sm font-bold text-primary uppercase leading-10">Our Properties</span>
        <h2 className="text-3xl md:text-5xl text-gray-500 font-semibold mb-4">Properties</h2>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <PropertyCardSkeleton />
        <PropertyCardSkeleton />
        <PropertyCardSkeleton />
        <PropertyCardSkeleton />
        <PropertyCardSkeleton />
        <PropertyCardSkeleton />
        <PropertyCardSkeleton />
        <PropertyCardSkeleton />
      </div>
    </div>
  </section>
  </>
  }

  if (errorMsg) {
    return     <> 
          <HeroSection backgroundImage={"images/h1.jpg"} title={"Properties"} />
     <section className="bg-gray-100 h-screen">
      <div className="container mx-auto py-24 px-4 md:px-16">
        <div className="text-center mb-20" >
          <span className="text-xs md:text-sm font-bold text-primary uppercase leading-10">Our Properties</span>
          <h2 className="text-3xl md:text-5xl text-gray-500 font-semibold mb-4">Properties</h2>
        </div>
        <div className='text-center md:text-2xl text-red-500 font-bold mt-4'>{errorMsg}</div>
      </div>
    </section>
    </>
  }

  return (
    <>
      <HeroSection backgroundImage={"images/h1.jpg"} title={"Properties"} />
      <section className="bg-gray-100">
    <div className="container mx-auto py-24 px-4 md:px-16">
      <div className="text-center mb-20" >
        <span className="text-xs md:text-sm font-bold text-primary uppercase leading-10">Our Properties</span>
        <h2 className="text-3xl md:text-5xl text-gray-500 font-semibold mb-4">Properties</h2>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {properties.map((property) => (
          <div key={property._id} >
            <PropertyCard property={property} />
          </div>
        ))}
      </div>
    </div>
  </section>
    </>
  )
}

export default Page 