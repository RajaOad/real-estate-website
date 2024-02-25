import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaPhone, FaPaperPlane, FaChevronRight, FaMap } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-footer text-white">
      <div className="container mx-auto px-4 md:px-20 py-16 md:pt-28 md:pb-20 flex md:flex-row flex-wrap justify-center">
        <div className="md:w-1/5">
          <div className="mb-10 mr-8">
            <div className='mb-4'>
            <img src="/images/logo.png" alt="Logo" className="h-20 md:h-24" />
            {/* <h2 className="text-2xl font-semibold leading-6">BAITUL SHABEERAN</h2>
            <p className='text-xs font-semibold'>Real Estate Agency</p> */}
            </div>
            <p className="text-sm mb-4 text-footer">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <ul className="flex">
              <li className="mr-3">
                <a href="#" className="text-links">
                  <FaTwitter className="w-6 h-6" />
                </a>
              </li>
              <li className="mr-3">
                <a href="#" className="text-links">
                  <FaFacebook className="w-6 h-6" />
                </a>
              </li>
              <li className="mr-3">
                <a href="#" className="text-links">
                  <FaInstagram className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-2/4 md:w-1/5">
          <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-8">Offers</h2>
          <ul className="text-xs md:text-sm">
            <li className="mb-3"><a href="#" className="text-links items-center flex"><span className="mr-1"><FaChevronRight /></span>Properties</a></li>
            <li className="mb-3"><a href="#" className="text-links items-center flex"><span className="mr-1"><FaChevronRight /></span>Agents</a></li>
            <li className="mb-3"><a href="#" className="text-links items-center flex"><span className="mr-1"><FaChevronRight /></span>Locations</a></li>
            <li className="mb-3"><a href="#" className="text-links items-center flex"><span className="mr-1"><FaChevronRight /></span>Clients Support</a></li>
          </ul>
        </div>
        <div className="w-2/4 md:w-1/5">
          <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-8">Company</h2>
          <ul className="text-xs md:text-sm">
            <li className="mb-3"><a href="#" className="text-links items-center flex"><span className="mr-1"><FaChevronRight /></span>Home</a></li>
            <li className="mb-3"><a href="#" className="text-links items-center flex"><span className="mr-1"><FaChevronRight /></span>About</a></li>
            <li className="mb-3"><a href="#" className="text-links items-center flex"><span className="mr-1"><FaChevronRight /></span>Blog</a></li>
            <li className="mb-3"><a href="#" className="text-links items-center flex"><span className="mr-1"><FaChevronRight /></span>Contact Us</a></li>
          </ul>
        </div>
        <div className="w-2/4 md:w-1/5 mt-6 md:mt-0">
          <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-8">Quick Links</h2>
          <ul className="text-xs md:text-sm">
            <li className="mb-3"><a href="#" className="text-links items-center flex"><span className="mr-1"><FaChevronRight /></span>Terms & Conditions</a></li>
            <li className="mb-3"><a href="#" className="text-links items-center flex"><span className="mr-1"><FaChevronRight /></span>User&apos;s Guide</a></li>
            <li className="mb-3"><a href="#" className="text-links items-center flex"><span className="mr-1"><FaChevronRight /></span>Support Center</a></li>
            <li className="mb-3"><a href="#" className="text-links items-center flex"><span className="mr-1"><FaChevronRight /></span>Press Info</a></li>
          </ul>
        </div>
        <div className="md:pb-10 w-2/4 md:w-1/5 mt-6 md:mt-0">
          <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-8">Have a Question?</h2>
          <div className="block-23 mb-3">
            <ul>
              <li className='flex text-footer'><span className="mr-4 text-footer"><FaMap /></span><span className="text-xs md:text-sm">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
              <li className="mt-2 text-footer"><a href="#" className=' flex items-center'><span className="mr-4 text-footer"><FaPhone /></span><span className="text-xs md:text-sm">+2 392 3929 210</span></a></li>
              <li className="mt-2 text-footer"><a href="#" className=' flex items-center'><span className="mr-4 text-footer"><FaPaperPlane /></span><span className="text-xs md:text-sm">info@yourdomain.com</span></a></li>
            </ul>
          </div>
        </div>
      </div>
        <div className="text-center text-xs md:text-sm md:w-full md:mt-5 bg-agents px-4 py-8 md:px-20 md:py-10" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
          <p className="md:mb-3">
            Copyright &copy; 2024 All rights reserved | This website is made by <a href="https://raj-portfolio-henna.vercel.app/" target="_blank" className='uppercase'>Developer</a>
          </p>
        </div>
    </footer>
  );
};

export default Footer;
