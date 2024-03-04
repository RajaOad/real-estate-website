"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/providers/AuthProvider';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut, authenticated } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <div className="flex justify-end z-50 md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none focus:text-white border border-white px-3 py-2"
        >
          {isOpen ? (
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L12 10.5858L18.2929 4.29289C18.6834 3.90237 19.3166 3.90237 19.7071 4.29289C20.0976 4.68342 20.0976 5.31658 19.7071 5.70711L13.4142 12L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L12 13.4142L5.70711 19.7071C5.31658 20.0976 4.68342 20.0976 4.29289 19.7071C3.90237 19.3166 3.90237 18.6834 4.29289 18.2929L10.5858 12L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 6.75C3 6.33579 3.33579 6 3.75 6H20.25C20.6642 6 21 6.33579 21 6.75C21 7.16421 20.6642 7.5 20.25 7.5H3.75C3.33579 7.5 3 7.16421 3 6.75ZM3.75 12C3.33579 12 3 12.3358 3 12.75C3 13.1642 3.33579 13.5 3.75 13.5H20.25C20.6642 13.5 21 13.1642 21 12.75C21 12.3358 20.6642 12 20.25 12H3.75ZM20.25 18C20.6642 18 21 18.3358 21 18.75C21 19.1642 20.6642 19.5 20.25 19.5H3.75C3.33579 19.5 3 19.1642 3 18.75C3 18.3358 3.33579 18 3.75 18H20.25Z"
              />
            </svg>
          )}
        </button>
      </div>

      <div className={`md:hidden w-full bg-[#001F5B] ${isOpen ? "bg-opacity-90 top-0" : "bg-opacity-0 -top-96"} backdrop-filter transition-all duration-500 absolute right-0`}>

        {isOpen && (
          <div className="py-4 flex flex-col justify-center items-center">

            {!authenticated ? (
              <div className="self-start ml-4">
                <Link
                  href="/signin"
                  className="inline-flex items-center p-3 border text-xs md:text-base font-medium text-white bg-[#001F5B] hover:bg-blue-700 transition duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 mr-2"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="inline-flex items-center p-3 border text-xs md:text-base font-medium text-white bg-[#001F5B] hover:bg-blue-700 transition duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
                >
                  Sign Up
                </Link>
              </div>
            ) : null}

            <Link href="/">
              <span className="block text-white hover:text-gray-300 py-2">
                Home
              </span>
            </Link>

            <Link href="/about">
              <span className="block text-white hover:text-gray-300 py-2">
                About
              </span>
            </Link>
            <Link href="/properties">
              <span className="block text-white hover:text-gray-300 py-2">
                Properties
              </span>
            </Link>
            <Link href="/agents">
              <span className="block text-white hover:text-gray-300 py-2">
                Agents
              </span>
            </Link>
            {/* <Link href="/blog">
              <span className="block text-white hover:text-gray-300 py-2">
                Blog
              </span>
            </Link> */}
            <Link href="/contact">
              <span className="block text-white hover:text-gray-300 py-2">
                Contact
              </span>
            </Link>
            {user && user.admin ? (
              <Link href="/admin">
                <span className="block text-white hover:text-gray-300 py-2">
                  Dashboard
                </span>
              </Link>
            ) : null}
            {authenticated && <button onClick={() => signOut()} >
              <span className="block text-white hover:text-gray-300 py-2">
                Logout
              </span>
            </button>}
          </div>
        )}
      </div>
    </>
  );
};

export default MobileMenu;
