import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center absolute w-full top-0 py-2 px-24 z-40 bg-[#001F5B] bg-opacity-10 backdrop-filter">
    <div className="flex items-center">
      {/* Logo */}
      <img src="/images/logo.png" alt="Logo" className="h-12 md:h-20 mr-4" />
      {/* <h1 className="text-white text-sm md:text-lg font-bold"><span className='bg-primary text-white rounded-full py-2 px-6'>BAITUL SHABEERAN</span> <span className='hidden md:inline'>Real Estate</span></h1> */}
    </div>
    <div className='hidden md:block'>
    <div className="flex items-center space-x-6 font-semibold">
      {/* Navbar Links */}
      <Link href="/" className="text-white hover:text-gray-300">HOME</Link>
      <Link href="/about" className="text-white hover:text-gray-300">ABOUT</Link>
      <Link href="/properties" className="text-white hover:text-gray-300">PROPERTIES</Link>
      <Link href="/agents" className="text-white hover:text-gray-300">AGENTS</Link>
      <Link href="/blog" className="text-white hover:text-gray-300">BLOG</Link>
      <Link href="/contact" className="text-white hover:text-gray-300">CONTACT</Link>
    </div>
    </div>
    <MobileMenu />
  </nav>
  )
}

export default Navbar