"use client"

import { useAuth } from '@/providers/AuthProvider';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { IoMdLogOut, IoMdSettings } from 'react-icons/io';

const SignoutButton = () => {
    const { signOut, authenticated, user } = useAuth();
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
      };

    // If authenticated is true, render the sign-out button; otherwise, render null
    return (
        <>
      {authenticated ? (
        <div className="relative inline-block text-left">
          <div className='hidden md:block'>
            <button
              type="button"
              onClick={toggleDropdown}
              className="inline-flex justify-center w-full border border-transparent shadow-sm px-4 py-2 hover:bg-[#001F5B] text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition duration-500"
              id="user-menu"
              aria-expanded="true"
              aria-haspopup="true"
            >
              <BsFillPersonFill className="h-8 w-8 mr-2" />
              {/* <FaUserCircle className="h-8 w-8 mr-2" /> */}

              {/* {user.username} */}
            </button>
          </div>

          {showDropdown ? (
  <div
    className="origin-top-right absolute -right-14 mt-2 w-48 rounded-md shadow-lg bg-gray-100 transition duration-500 ring-1 ring-black ring-opacity-5 focus:outline-none"
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="user-menu"
  >
    <div className="p-4" role="none">
    
      {user.admin && (
        <Link
          href="/admin"
          className="flex items-center justify-center w-full mb-2 rounded px-4 py-3 text-sm bg-gray-300 hover:bg-gray-500 transition duration-300 focus:outline-none"
        >
          <IoMdSettings className="mr-2 text-lg" />
          Dashboard
        </Link>
      )}

        <button
        type="button"
        className="flex items-center justify-center w-full rounded px-4 py-3 text-sm text-white bg-red-500 hover:bg-red-700 transition duration-300 focus:outline-none"
        onClick={() => { signOut(); toggleDropdown(); }}
      >
        <IoMdLogOut className="mr-2 text-lg" />
        Logout
      </button>
    </div>
  </div>
) : null}
        </div>
      ) : (
      null
      )}
    </>
    )
};

export default SignoutButton;
