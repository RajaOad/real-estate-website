"use client"

import React, { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Welcome from './components/Welcome';
import Link from 'next/link';
import { useAuth } from '@/providers/AuthProvider';
import { useRouter } from 'next/navigation';

const Page = () => {

  const { user, authenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {

    if(user ? !user.admin : true) {
      router.push('/');
    }

  }, [authenticated])
  

  return (
    <>
      <div className="bg-gray-100 min-h-screen">

        <div className="flex flex-row justify-center py-24 md:py-32 px-4 md:px-10 md:w-4/5 md:ml-auto">
         
         <Sidebar />

          <div className="md:w-4/5">

            <Welcome />

           
            <div className="flex flex-col gap-y-8 md:flex-row mt-6">
  <div className="bg-white rounded-lg shadow-lg md:w-1/3 p-6 md:mr-4 hover:shadow-xl transition-shadow duration-300">
    <div className="flex flex-col justify-between h-full">
      <div>
        <h3 className="text-xl font-semibold mb-4">Add New Property</h3>
        <p className="text-gray-600 mb-4">You can add new properties to the listing by providing property details, images, and other relevant information.</p>
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"><Link href="/admin/addproperty"> Go to Add Property</Link></button>
    </div>
  </div>
  <div className="bg-white rounded-lg shadow-lg md:w-1/3 p-6 md:mx-4 hover:shadow-xl transition-shadow duration-300">
    <div className="flex flex-col justify-between h-full">
      <div>
        <h3 className="text-xl font-semibold mb-4">View Added Properties</h3>
        <p className="text-gray-600 mb-4">You can view all the properties added to the listing. You can also update existing property details and delete properties.</p>
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"><Link href="/admin/properties"> Go to Properties</Link></button>
    </div>
  </div>
  <div className="bg-white rounded-lg shadow-lg md:w-1/3 p-6 md:ml-4 hover:shadow-xl transition-shadow duration-300">
    <div className="flex flex-col justify-between h-full">
      <div>
        <h3 className="text-xl font-semibold mb-4">Manage Settings</h3>
        <p className="text-gray-600 mb-4">Access settings to manage your profile. you can change profile image, username, contact number, and social media links.</p>
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"><Link href="/admin/settings"> Go to Settings</Link></button>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
