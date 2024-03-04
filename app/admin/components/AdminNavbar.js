import { useAuth } from '@/providers/AuthProvider'
import React from 'react'
import MobileMenu from './MobileMenu';
// import { RiNotificationLine, RiSearchLine } from 'react-icons/ri'

const AdminNavbar = () => {
  const { user, signOut, authenticated } = useAuth();
  return (
    <>
      <div className="fixed bg-white text-gray-800 px-10 py-2 z-10 w-full shadow-md">
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl flex items-center">
            Admin <span className="text-primary">Panel</span>
          </div>
          <div className="hidden md:flex items-center text-gray-700">
            {/* <RiSearchLine className="text-xl mr-4 cursor-pointer hover:text-blue-600 transition-colors duration-300" /> */}
            {/* <RiNotificationLine className="text-xl mr-4 cursor-pointer hover:text-blue-600 transition-colors duration-300" /> */}
            {/* Add your image here */}
            <img src={user && user.profileImage ? user.profileImage : 'https://placehold.co/400'} alt="Profile" className="rounded-full h-10 w-10 ml-2 hover:ring-2 ring-primary ring-opacity-50 transition duration-300" />
          </div>
      <MobileMenu signOut={signOut} authenticated={authenticated} />
        </div>
      </div> 
    </>
  )
}

export default AdminNavbar