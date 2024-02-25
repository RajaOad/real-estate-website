"use client"

import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  // Define the original values of the counters
  const [counterValues] = useState({
    yearsOfExperience: 50,
    totalProperties: 210000,
    qualifiedRealtors: 450,
    totalBranches: 100
  });

  // Animation controls for the counters
  const yearsOfExperienceControl = useAnimation();
  const totalPropertiesControl = useAnimation();
  const qualifiedRealtorsControl = useAnimation();
  const totalBranchesControl = useAnimation();

  // Animation variants
  const counterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  useEffect(() => {
    if (inView) {
      // Animate the counters when they come into view
      yearsOfExperienceControl.start({ 
        opacity: 1, 
        transition: { duration: 1 }, 
        scale: [0, 1], 
        ease: "easeInOut", 
        delay: 0.5 
      });
      totalPropertiesControl.start({ 
        opacity: 1, 
        transition: { duration: 1 }, 
        scale: [0, 1], 
        ease: "easeInOut", 
        delay: 0.5 
      });
      qualifiedRealtorsControl.start({ 
        opacity: 1, 
        transition: { duration: 1 }, 
        scale: [0, 1], 
        ease: "easeInOut", 
        delay: 0.5 
      });
      totalBranchesControl.start({ 
        opacity: 1, 
        transition: { duration: 1 }, 
        scale: [0, 1], 
        ease: "easeInOut", 
        delay: 0.5 
      });
    }
  }, [inView, yearsOfExperienceControl, totalPropertiesControl, qualifiedRealtorsControl, totalBranchesControl]);

  return (
    <section className={` px-4 md:mx-24 py-24`}>
      <div className="container-xl" ref={ref}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-6">
          {/* Image Section */}
          <div className="md:col-span-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="img w-full h-full bg-cover bg-center"
              style={{ backgroundImage: "url(images/h2.jpg)" }}
            ></motion.div>
          </div>
          
          {/* Content Section */}
          <div className="md:col-span-4 md:ml-8 heading-section flex flex-col justify-center">
            {/* Title Section */}
            <motion.div
              variants={counterVariants}
              initial="hidden"
              animate={yearsOfExperienceControl}
              className="text"
            >
              <span className="d-block number gradient-text text-2xl md:text-4xl font-semibold">
                <motion.span className="counter" data-count={counterValues.yearsOfExperience}></motion.span>
              </span>
              <p className='uppercase text-xs md:text-sm text-primary font-semibold pt-3'>Years of Experienced</p>
            </motion.div>
            {/* Repeat similar motion.div elements for other counters */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
