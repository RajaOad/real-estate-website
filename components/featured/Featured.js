"use client"
import React, { useEffect } from 'react'
import PropertyCard from '../propertyCard/PropertyCard'
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import PropertyCardSkeleton from '../propertyCardSkeleton/PropertyCardSkeleton';


  

const Featured = () => {
  const [featuredProperties, setFeaturedProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    async function fetchFeaturedProperties() {
      try {
        setLoading(true)
        const response = await fetch('/api/featuredproperties'); // Assuming your API endpoint is /api/featured-properties

        const data = await response.json();
        if (data.success === true) {
          setFeaturedProperties(data.properties);
        } else {
          setErrorMsg(data.msg)
        }
      } catch (error) {
        
        setErrorMsg('An error occurred while fetching featured properties')
      } finally {
        setLoading(false);
      }
    }

    fetchFeaturedProperties();
  }, []);

    const { ref, inView } = useInView({triggerOnce: true });

  const variants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.5 } }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } }
  };

  const variants2 = {
    visible: (i)=> ( { opacity: 1, y:0, 
        // transition:{type:"spring", stiffness:100, damping:100}
        transition:{
            // staggerChildren: 0.2
            delay:i * 0.3,
            duration:0.8
        }
     }),
    hidden: { opacity: 0, y:80, },
}

if (loading) {
  return      <section className="bg-gray-100">
  <div className="container mx-auto py-24 px-4 md:px-16">
    <div className="text-center mb-20" >
      <span className="text-xs md:text-sm font-bold text-primary uppercase leading-10">Our Properties</span>
      <h2 className="text-3xl md:text-5xl text-gray-500 font-semibold mb-4">Featured Properties</h2>
    </div>
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <PropertyCardSkeleton />
      <PropertyCardSkeleton />
      <PropertyCardSkeleton />
      <PropertyCardSkeleton />
    </div>
  </div>
</section>
}

if (errorMsg) {
  return       <section className="bg-gray-100 h-screen">
    <div className="container mx-auto py-24 px-4 md:px-16">
      <div className="text-center mb-20" >
        <span className="text-xs md:text-sm font-bold text-primary uppercase leading-10">Our Properties</span>
        <h2 className="text-3xl md:text-5xl text-gray-500 font-semibold mb-4">Featured Properties</h2>
      </div>
      <div className='text-center md:text-2xl text-red-500 font-bold mt-4'>No featured properties</div>
    </div>
  </section>
}

  return (
    <section className="bg-gray-100">
    <div className="container mx-auto py-24 px-4 md:px-16" ref={ref}>
      <motion.div className="text-center mb-20" 
      variants={titleVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      >
        <span className="text-xs md:text-sm font-bold text-primary uppercase leading-10">Our Properties</span>
        <h2 className="text-3xl md:text-5xl text-gray-500 font-semibold mb-4">Featured Properties</h2>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {featuredProperties.map((property, index) => (
          <motion.div key={property._id} variants={variants2} custom={index} className="opacity-0"
          initial="hidden"
        animate={inView ? "visible" : "hidden"}
          >
            <PropertyCard property={property} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
  )
}

export default Featured