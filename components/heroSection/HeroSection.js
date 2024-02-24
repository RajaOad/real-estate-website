
import Link from 'next/link';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const HeroSection = ({ backgroundImage, breadcrumbs, title }) => {
  return (
    <section className="hero-wrap hero-wrap-2 flex justify-center items-center bg-cover bg-center relative h-screen" style={{backgroundImage: `url('${backgroundImage}')`}}>
       <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="z-20">
      <div className='flex justify-center text-white mb-8'>
      <span className="mr-2 hover:text-[#001F5B] transition duration-300">
        <Link href="/" className='flex items-center uppercase'>Home <span className="mr-1"><FaChevronRight /></span></Link>
      </span>
      <span className='flex items-center uppercase'>{title} <span className="mr-1"><FaChevronRight /></span></span>
      </div>
            <h1 className="text-7xl font-semibold text-white">{title}</h1>
      </div>
    </section>
  );
};

export default HeroSection;
