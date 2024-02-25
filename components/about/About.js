"use client"

import React from 'react'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const About = () => {

  const { ref, inView } = useInView({triggerOnce: true });

  const variants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1 } }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } }
  };
  const variants2 = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 2, delay: 1.5 } }
  };

  return (
    <section className={` px-8 md:mx-24 py-24`}>
      <div className="container-xl" ref={ref}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-6">
          <motion.div className="md:col-span-2 relative"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          >
            <div className="img w-full h-full bg-cover bg-center" style={{backgroundImage: "url(images/h2.jpg)"}}></div>
          </motion.div>
          <div className="md:col-span-4 md:ml-8 heading-section flex flex-col justify-center">
            <motion.div 
            variants={titleVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            >
            <span className="subheading uppercase font-bold mb-4 text-xs md:text-sm text-primary">About Us</span>
            <h2 className="my-4 text-3xl md:text-5xl font-semibold text-secondary"><span className='bg-primary text-white rounded-full py-2 px-6'>BAITUL SHABEERAN</span></h2>
            <h2 className='my-4 text-3xl md:text-5xl font-semibold text-secondary'>A Real Estate and Construction Company</h2>
            <p className="mb-6 text-secondary leading-7 text-sm md:text-base">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </motion.div>
            <motion.div className="grid grid-cols-1 gap-5 md:grid-cols-1 py-8"
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            >
                <div className='flex flex-wrap justify-between'>
              <div className="counter-wrap">
                <div className="text">
                  <span className="d-block number gradient-text text-2xl md:text-4xl font-semibold"><span id="count1" className="counter" data-count="50">50</span></span>
                  <p className='uppercase text-xs md:text-sm text-primary font-semibold pt-3'>Years of Experienced</p>
                </div>
              </div>
              <div className="counter-wrap">
                <div className="text">
                  <span className="d-block number gradient-text text-2xl md:text-4xl font-semibold"><span id="count2" className="counter" data-count="210">210</span>K+</span>
                  <p className='uppercase text-xs md:text-sm text-primary font-semibold pt-3'>Total Properties</p>
                </div>
              </div>
              <div className="counter-wrap">
                <div className="text">
                  <span className="d-block number gradient-text text-2xl md:text-4xl font-semibold"><span id="count2" className="counter" data-count="450">450</span></span>
                  <p className='uppercase text-xs md:text-sm text-primary font-semibold pt-3'>Qualified Realtors</p>
                </div>
              </div>
              <div className="counter-wrap">
                <div className="text">
                  <span className="d-block number gradient-text text-2xl md:text-4xl font-semibold"><span id="count2" className="counter" data-count="100">100</span></span>
                  <p className='uppercase text-xs md:text-sm text-primary font-semibold pt-3'>Total Branches</p>
                </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="img img-2 mt-8 w-full h-64 md:h-96 bg-cover" style={{backgroundImage: "url(images/h2.jpg)"}}
            variants={variants2}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About