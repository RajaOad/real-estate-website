"use client"

import { useAuth } from '@/providers/AuthProvider';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';


const Page = () => {

    const { authenticated, user } = useAuth()
    const router = useRouter()
  
    useEffect(() => {
  
        if(user ? !user.admin : true) {
            router.push('/');
          }
  
    }, [authenticated])

  return (
    <>
    <div className='min-h-screen flex justify-center bg-gray-100 items-center'>

    <div className="md:w-3/5 w-full mx-4 md:mx-auto md:mr-36 my-24 md:my-32 bg-white shadow-xl rounded-lg text-gray-900">
            <div className="overflow-hidden rounded-t-lg h-60 relative">
                <img src={user && user.backgroundImage ? user.backgroundImage : 'https://placehold.co/900x300'} className="w-full h-full object-cover" alt="Profile Image" />
            </div>
            <div className="flex justify-center items-center -mt-20">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white">
                    <img src={user && user.profileImage ? user.profileImage : 'https://placehold.co/400'} className="w-full h-full object-cover" alt="Profile Image" />
                </div>
            </div>
            <div className="text-center mt-4 px-8 md:px-16">
                <h2 className="font-semibold text-2xl">{user && user.username ? user.username : 'Name'}</h2>
                <p className="text-gray-600 text-sm my-4">{user && user.headline ? user.headline : 'Headline'}</p>
                <p className="text-gray-700 text-start text-sm mt-2">{user && user.bio ? user.bio : 'Bio'}</p>
            </div>

            <div className='md:px-8'>
            <ul className="mt-4 p-8 text-gray-700 flex flex-col justify-center gap-6">
                <li className="flex items-center">
                    <FaPhone className="w-4 h-4 mr-2 fill-current text-blue-900" />
                    <span className="text-lg">{user && user.contactNumber ? user.contactNumber : 'Phone'}</span>
                </li>
                <li className="flex items-center">
                    <FaEnvelope className="w-4 h-4 mr-2 fill-current text-blue-900" />
                    <span className="text-lg">{user && user.email ? user.email : 'Email'}</span>
                </li>
                <li className="flex items-center">
                    <FaWhatsapp className="w-4 h-4 mr-2 fill-current text-blue-900" />
                    <span className="text-lg">{user && user.whatsapp ? user.whatsapp : 'WhatsApp'}</span>
                </li>
                <li className="flex items-center">
                    <FaLinkedin className="w-4 h-4 mr-2 fill-current text-blue-900" />
                    <a href={user && user.links && user.links.linkedin ? user.links.linkedin : '#'} target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:underline text-lg">{user && user.links && user.links.linkedin ? user.links.linkedin : 'LinkedIn'}</a>
                </li>
                <li className="flex items-center">
                    <FaFacebook className="w-4 h-4 mr-2 fill-current text-blue-900" />
                    <a href={user && user.links && user.links.facebook ? user.links.facebook : '#'} target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:underline text-lg">{user && user.links && user.links.facebook ? user.links.facebook : 'Facebook'}</a>
                </li>
                <li className="flex items-center">
                    <FaTwitter className="w-4 h-4 mr-2 fill-current text-blue-900" />
                    <a href={user && user.links && user.links.twitter ? user.links.twitter : '#'} target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:underline text-lg">{user && user.links && user.links.twitter ? user.links.twitter : 'Twitter'}</a>
                </li>
            </ul>
            </div>

        </div>

        </div>
    </>
  )
}

export default Page