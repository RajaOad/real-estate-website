"use client"

import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { FaTwitter, FaFacebook, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import AgentCardSkeleton from '../agentCardSkeleton/AgentCardSkeleton';

const AgentSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {
    const fetchAdminUsers = async () => {
      try {
        const response = await fetch('/api/fetchagents');

        if (response.ok) {
          const data = await response.json();

          if (data.success) {
            setAgents(data.agents);
          } else {
            setError(data.message);
          }
        } else {
          setError(`HTTP error`);
        }
      } catch (error) {
        setError(`Network error`);
      } finally {
        setLoading(false);
      }
    };

    fetchAdminUsers();
  }, []);



  const variants = {
    visible: (i) => ({
      opacity: 1, y: 0,
      // transition:{type:"spring", stiffness:100, damping:100}
      transition: {
        // staggerChildren: 0.2
        delay: i * 0.3,
        duration: 0.8
      }
    }),
    hidden: { opacity: 0, y: 80, },
  }


  // Render loading state
  if (loading) {
    return <>

      <section className={`py-24 bg-agents`} >
        <div className="container mx-auto px-4 md:px-20">
          <div className="flex flex-col text-center md:text-start md:pl-20 pb-6">
            <span className="text-white text-xs uppercase md:font-semibold md:mb-1">Meet Our Agents</span>
            <h2 className="text-3xl md:text-5xl font-semibold text-secondary mt-4 mb-16">Our Agents</h2>
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
            <SplideSlide>
              <div>
                <AgentCardSkeleton />
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </section>

    </>;
  }

  // Render error state
  if (error) {
    return <>

      <section className={`py-24 bg-agents h-screen`} >
        <div className="container mx-auto px-4 md:px-20">
          <div className="flex flex-col text-center md:text-start md:pl-20 pb-6">
            <span className="text-white text-xs uppercase md:font-semibold md:mb-1">Meet Our Agents</span>
            <h2 className="text-3xl md:text-5xl font-semibold text-secondary mt-4 mb-16">Our Agents</h2>
          </div>
          <div className='text-center md:text-2xl text-red-500 font-bold mt-16'>
            No agent found
          </div>
        </div>
      </section>

    </>;
  }


  return (
    <section className={`py-24 bg-agents`} >
      <div className="container mx-auto px-4 md:px-20" ref={ref}>
        <div className="flex flex-col text-center md:text-start md:pl-20 pb-6">
          <span className="text-white text-xs uppercase md:font-semibold md:mb-1">Meet Our Agents</span>
          <h2 className="text-3xl md:text-5xl font-semibold text-secondary mt-4 mb-16">Our Agents</h2>
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
              <motion.div variants={variants} custom={index}
                // initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <div className="flex flex-col justify-center bg-primary">
                  <img src={agent.profileImage ? agent.profileImage : 'https://placehold.co/400x450'} className="w-full h-72 mb-4" alt={agent.username} />
                  <div className="pb-8 pt-4 pl-8">
                    <p className="text-sm text-white uppercase">Listing <span className="font-semibold">{agent.properties.length}</span> Properties</p>
                    <h3 className="text-xl font-semibold text-white my-3"><a href="#">{agent.username}</a></h3>
                    <ul className="flex space-x-4">
                      <li>
                        <a href={agent.links?.twitter || '#'} className="text-white transition duration-300 hover:text-gray-500">
                          <FaTwitter className="w-6 h-6" />
                        </a>
                      </li>
                      <li>
                        <a href={agent.links?.facebook || '#'} className="text-white transition duration-300 hover:text-gray-500">
                          <FaFacebook className="w-6 h-6" />
                        </a>
                      </li>
                      <li>
                        <a href={agent.links?.linkedin || '#'} className="text-white transition duration-300 hover:text-gray-500">
                          <FaLinkedin className="w-6 h-6" />
                        </a>
                      </li>
                      <li>
                        <a href={`mailto:${agent.email}`} className="text-white transition duration-300 hover:text-gray-500">
                          <FaEnvelope className="w-6 h-6" />
                        </a>
                      </li>
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
