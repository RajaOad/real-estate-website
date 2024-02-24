import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center absolute w-full top-0 py-4 px-8 z-40 bg-gray-800 bg-opacity-10 backdrop-filter">
    <div className="flex items-center">
      {/* Logo */}
      {/* <img src="/logo.png" alt="Logo" className="h-10 mr-4" /> */}
      <h1 className="text-white text-lg font-bold"><span className='bg-primary text-white rounded-full py-2 px-6'>BAITUL SHABEERAN</span> Real Estate</h1>
    </div>
    <div className="flex items-center space-x-6">
      {/* Navbar Links */}
      <Link href="/" className="text-white hover:text-gray-300">HOME</Link>
      <Link href="/about" className="text-white hover:text-gray-300">ABOUT</Link>
      <Link href="/properties" className="text-white hover:text-gray-300">PROPERTIES</Link>
      <Link href="/agents" className="text-white hover:text-gray-300">AGENTS</Link>
      <Link href="/blog" className="text-white hover:text-gray-300">BLOG</Link>
      <Link href="/contact" className="text-white hover:text-gray-300">CONTACT</Link>
    </div>
  </nav>
  )
}

export default Navbar