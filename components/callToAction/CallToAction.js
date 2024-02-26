import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const CallToAction = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-500 mb-4">Discover Your Dream Home</h2>
          <p className="text-lg text-blue-500 leading-relaxed mb-8">Unlock a world of possibilities with our curated selection of properties.</p>
          <a href="#/contact" className="inline-block bg-blue-600 text-white hover:bg-blue-800 font-bold py-3 px-8 rounded-full shadow-md transition duration-300">
            Explore Properties <FaArrowAltCircleRight className="inline-block ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
