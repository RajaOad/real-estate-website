"use client"

import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { FaTwitter, FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa';

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
  return (
    <section className={`py-24 bg-agents`}>
      <div className="container mx-auto px-20">
        <div className="flex flex-col pl-20 pb-6">
          <span className="text-white text-xs uppercase font-semibold tracking-widest mb-1">Meet Our Agents</span>
          <h2 className="text-5xl font-semibold text-secondary mt-4 mb-16">Our Agents</h2>
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
              <div className="flex flex-col justify-center bg-primary">
                <img src={agent.image} className="w-full h-72 mb-4" alt={agent.name} />
                <div className="pb-8 pt-4 pl-8">
                  <p className="text-sm text-white uppercase">Listing <span className="font-semibold">{agent.properties}</span> Properties</p>
                  <h3 className="text-xl font-semibold text-white my-3"><a href="#">{agent.name}</a></h3>
                  <ul className="flex space-x-4">
                    <li>
                      <a href="#" className="text-white transition duration-300 hover:text-[#001F5B]">
                        <FaTwitter className="w-6 h-6" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white transition duration-300 hover:text-[#001F5B]">
                        <FaFacebook className="w-6 h-6" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white transition duration-300 hover:text-[#001F5B]">
                        <FaGoogle className="w-6 h-6" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white transition duration-300 hover:text-[#001F5B]">
                        <FaInstagram className="w-6 h-6" />
                      </a>
                    </li>
                    {/* Add more social icons as needed */}
                  </ul>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default AgentSection;
