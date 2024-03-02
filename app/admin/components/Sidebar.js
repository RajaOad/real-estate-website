"use client"

import { useAuth } from '@/providers/AuthProvider'
import Link from 'next/link'
import React from 'react'
import { AiOutlineHome, AiOutlinePlusCircle, AiOutlinePropertySafety } from 'react-icons/ai'
import { RiDashboardLine, RiLogoutCircleLine, RiSettingsLine, RiUserLine } from 'react-icons/ri'

const Sidebar = () => {
    const { signOut } = useAuth();
    
    return (
        <>
            <div className="w-1/5 mr-6 hidden md:flex fixed top-0 left-8 h-full flex-col justify-center">

                <div className="bg-white rounded-lg shadow-lg mb-6 p-4">
                    <Link href="/" className="flex items-center text-gray-800 hover:text-blue-600 my-4 transition-colors duration-300">
                        <AiOutlineHome className="text-lg mr-2" />
                        <span className="text-lg">Home</span>
                    </Link>
                    <Link href="/admin" className="flex items-center text-gray-800 hover:text-blue-600 my-4 transition-colors duration-300">
                        <RiDashboardLine className="text-lg mr-2" />
                        <span className="text-lg">Dashboard</span>
                    </Link>
                    <Link href="/admin/addproperty" className="flex items-center text-gray-800 hover:text-blue-600 my-4 transition-colors duration-300">
                        <AiOutlinePlusCircle className="text-lg mr-2" />
                        <span className="text-lg">Add Property</span>
                    </Link>
                    <Link href="/admin/properties" className="flex items-center text-gray-800 hover:text-blue-600 my-4 transition-colors duration-300">
                        <AiOutlinePropertySafety className="text-lg mr-2" />
                        <span className="text-lg">Your Propeties</span>
                    </Link>
                </div>

                <div className="bg-white rounded-lg shadow-lg mb-6 p-4">
                    <Link href="/admin/profile" className="flex items-center text-gray-800 hover:text-blue-600 my-4 transition-colors duration-300">
                        <RiUserLine className="text-lg mr-2" />
                        <span className="text-lg">Profile</span>
                    </Link>
                    <Link href="/admin/settings" className="flex items-center text-gray-800 hover:text-blue-600 my-4 transition-colors duration-300">
                        <RiSettingsLine className="text-lg mr-2" />
                        <span className="text-lg">Settings</span>
                    </Link>
                    <button onClick={()=> signOut()} className="flex items-center text-gray-800 hover:text-blue-600 my-4 transition-colors duration-300">
                        <RiLogoutCircleLine className="text-lg mr-2" />
                        <span className="text-lg">Log out</span>
                    </button>
                </div>

            </div>
        </>
    )
}

export default Sidebar