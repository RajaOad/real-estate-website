"use client"
import React from 'react'
import PropertyCard from '../propertyCard/PropertyCard'
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';


  

const Featured = ({ title, properties }) => {
    // const [properties, setProperties] = useState(fakeData);

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

  return (
    <section className="bg-gray-100">
    <div className="container mx-auto py-24 px-4 md:px-16" ref={ref}>
      <motion.div className="text-center mb-20" 
      variants={titleVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      >
        <span className="text-xs md:text-sm font-bold text-primary uppercase leading-10">Properties</span>
        <h2 className="text-3xl md:text-5xl text-gray-500 font-semibold mb-4">{title}</h2>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {properties.map((property, index) => (
          <motion.div key={property.id} variants={variants2} custom={index} className="opacity-0"
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