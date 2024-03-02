"use client"

import React from 'react'
import TimerClock from './TimerClock'
import { useAuth } from '@/providers/AuthProvider'

const Welcome = () => {
    const { user } = useAuth();
    return (
        <>
            <div className="flex flex-row">

                <div className="bg-blue-200 border text-center border-blue-300 rounded-lg w-1/2 mr-2 p-4 shadow-md hover:bg-blue-300 transition-colors duration-300">
                    <p className="text-sm md:text-xl">Welcome</p>
                    <p className="text-sm md:text-xl my-4 font-semibold capitalize">{user ? user.username : 'Username'}</p>
                    <TimerClock />
                </div>

                <div className="bg-orange-200 border text-center border-orange-300 rounded-lg w-1/2 ml-2 p-4 shadow-md hover:bg-orange-300 transition-colors duration-300">
                    <p className="text-sm md:text-xl">Properties</p>
                    {/* Add descriptive text */}
                    <p className="text-sm md:text-xl  my-4 font-semibold">{user && user.properties.length > 0 ? "You have added" : "You haven't added any"} properties yet</p>
                    <span className="bg-orange-300 md:text-2xl inline-block rounded-full font-semibold px-6 py-4 hover:bg-orange-400 hover:text-white transition duration-300">
                        <strong>{user ? user.properties.length : '0'}</strong>
                    </span>
                </div>

            </div>
        </>
    )
}

export default Welcome