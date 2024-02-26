"use client"

import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { FaTwitter, FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

// Fake data for agents
const agents = [
  {
    name: 'Mike Bochs',
    image: '/images/h1.jpg',
    properties: 10,
  },
  {
    name: 'Jessica Moore',
    image: '/images/h2.jpg',
    properties: 10,
  },
  {
    name: 'Sarah Geronimo',
    image: '/images/h3.jpg',
    properties: 10,
  },
  {
    name: 'John Doe',
    image: '/images/h4.jpg',
    properties: 10,
  },
  // Add more fake agents as needed
];

const AgentSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const variants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
      },
    }),
    hidden: { opacity: 0, y: 80 },
  };

  return (
    <section className={`py-24 bg-gradient-to-r from-blue-400 to-purple-500`} >
      <div className="container mx-auto px-4 md:px-20" ref={ref}>
        <div className="flex flex-col text-center md:text-start md:pl-20 pb-6">
          <span className="text-white text-xs uppercase md:font-semibold md:mb-1">Meet Our Agents</span>
          <h2 className="text-3xl md:text-5xl font-semibold text-white mt-4 mb-16">Our Agents</h2>
        </div>
        <Splide
          options={{
            type: 'slide',
            perPage: 4,
            perMove: 1,
            pagination: false,
            type: 'loop',
            autoplay: true,
            interval: 5000,
            arrows: false,
            gap: '1.5rem',
            breakpoints: {
              1024: {
                perPage: 3,
              },
              768: {
                perPage: 2,
              },
              640: {
                perPage: 1,
              },
            },
          }}
        >
          {agents.map((agent, index) => (
            <SplideSlide key={index}>
              <motion.div variants={variants} custom={index}>
                <div className="flex flex-col justify-center bg-white rounded-lg shadow-lg p-6">
                  <img src={agent.image} className="w-full h-72 mb-4 object-cover rounded-lg" alt={agent.name} />
                  <div className="pb-8 pt-4 pl-8">
                    <p className="text-sm text-gray-600 uppercase">Listing <span className="font-semibold">{agent.properties}</span> Properties</p>
                    <h3 className="text-xl font-semibold text-gray-900 my-3"><a href="#" className="text-blue-500 hover:underline">{agent.name}</a></h3>
                    <ul className="flex space-x-4">
                      <li>
                        <a href="#" className="text-gray-600 hover:text-blue-500 transition duration-300">
                          <FaTwitter className="w-6 h-6" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-600 hover:text-blue-500 transition duration-300">
                          <FaFacebook className="w-6 h-6" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-600 hover:text-blue-500 transition duration-300">
                          <FaGoogle className="w-6 h-6" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-600 hover:text-blue-500 transition duration-300">
                          <FaInstagram className="w-6 h-6" />
                        </a>
                      </li>
                      {/* Add more social icons as needed */}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default AgentSection;
