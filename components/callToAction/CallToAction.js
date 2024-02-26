import Link from 'next/link';
import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const CallToAction = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">Discover Your Dream Home</h2>
          <p className="text-lg text-primary leading-relaxed mb-8">Unlock a world of possibilities with our curated selection of properties.</p>
          <Link href="/properties" className="inline-block bg-[#001F5B] text-white hover:bg-blue-700 font-bold py-3 px-8 rounded-full shadow-md transition duration-300">
            Explore Properties <FaArrowAltCircleRight className="inline-block ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
