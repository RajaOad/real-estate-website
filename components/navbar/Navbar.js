import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center absolute w-full top-0 py-2 px-4 md:px-24 z-40 bg-[#001F5B] bg-opacity-10 backdrop-filter">
    <div className="flex items-center">
      {/* Logo */}
      <Link href="/">
      <img src="/images/logo.png" alt="Logo" className="h-12 md:h-20 mr-4" />
      </Link>
      {/* <h1 className="text-white text-sm md:text-lg font-bold"><span className='bg-primary text-white rounded-full py-2 px-6'>BAITUL SHABEERAN</span> <span className='hidden md:inline'>Real Estate</span></h1> */}
    </div>
    <div className='hidden md:block'>
    <div className="flex items-center space-x-2 font-semibold">
      {/* Navbar Links */}
      <Link href="/" className="text-white hover:text-gray-300 hover:bg-[#001F5B] px-4 py-3 transition duration-500">HOME</Link>
      <Link href="/about" className="text-white hover:text-gray-300 hover:bg-[#001F5B] px-4 py-3 transition duration-500">ABOUT</Link>
      <Link href="/properties" className="text-white hover:text-gray-300 hover:bg-[#001F5B] px-4 py-3 transition duration-500">PROPERTIES</Link>
      <Link href="/agents" className="text-white hover:text-gray-300 hover:bg-[#001F5B] px-4 py-3 transition duration-500">AGENTS</Link>
      <Link href="/blog" className="text-white hover:text-gray-300 hover:bg-[#001F5B] px-4 py-3 transition duration-500">BLOG</Link>
      <Link href="/contact" className="text-white hover:text-gray-300 hover:bg-[#001F5B] px-4 py-3 transition duration-500">CONTACT</Link>
    </div>
    </div>
    <MobileMenu />
  </nav>
  )
}

export default Navbar