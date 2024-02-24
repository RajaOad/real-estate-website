"use client"

import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { FaQuoteLeft } from 'react-icons/fa'

const TestimonialSection = () => {
  const testimonials = [
    {
      name: 'Roger Scott',
      position: 'Marketing Manager',
      message: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      image: 'images/h1.jpg',
    },
    {
      name: 'Roger Scott',
      position: 'Marketing Manager',
      message: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      image: 'images/h2.jpg',
    },
    {
      name: 'Roger Scott',
      position: 'Marketing Manager',
      message: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      image: 'images/h3.jpg',
    },
    {
      name: 'Roger Scott',
      position: 'Marketing Manager',
      message: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      image: 'images/h4.jpg',
    },
    {
      name: 'Roger Scott',
      position: 'Marketing Manager',
      message: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      image: 'images/h2.jpg',
    },
    {
      name: 'Roger Scott',
      position: 'Marketing Manager',
      message: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      image: 'images/h1.jpg',
    },
    // Add more fake testimonials as needed
  ];

  return (
    <section className="py-24 bg-[#f7f7f7]">
      <div className="container-xl mx-20">
        <div className="row justify-content-center pb-4">
          <div className="col-md-7 text-center heading-section">
            <span className="subheading uppercase text-sm font-semibold text-primary">Testimonial</span>
            <h2 className="mb-3 text-5xl font-semibold text-secondary pt-4 pb-2">Clients We Help</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Splide
              options={{
                type: 'loop',
                autoplay: true,
                interval: 5000,
                perPage: 3,
                perMove: 1,
                gap: '1rem',
                arrows: false,
                breakpoints: {
                  768: {
                    perPage: 1,
                  },
                  992: {
                    perPage: 2,
                  },
                },
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SplideSlide key={index}>
                  <div className="flex justify-center my-12 relative">
                    <div className="testimony-wrap bg-white p-8 rounded-lg shadow-md">
                      <div className="p-4 bg-primary absolute left-5 -top-5 rounded-full text-white"><FaQuoteLeft /></div>
                      <div className="text mt-4">
                        <p className="mb-4 msg text-gray-800 leading-8">{testimonial.message}</p>
                        <div className="flex items-center">
                          <div className="user-img w-20 h-20 rounded-full bg-cover overflow-hidden" style={{ backgroundImage: `url(${testimonial.image})` }}></div>
                          <div className="pl-4">
                            <p className="name font-semibold text-xl text-gray-900">{testimonial.name}</p>
                            <p className="uppercase text-primary text-xs mt-2">{testimonial.position}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;