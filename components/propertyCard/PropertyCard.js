import React from 'react'
import { FaBath } from "react-icons/fa";
import { SiBlueprint } from "react-icons/si";
import { IoIosBed } from 'react-icons/io';
import { FaLocationDot } from "react-icons/fa6";
import { formatDistanceToNow } from 'date-fns';
import Link from 'next/link';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-wrap bg-white rounded-md shadow-md hover:shadow-xl overflow-hidden transition-all duration-300">
    <Link href={`property/${property._id}`} className="block relative h-64 bg-cover bg-center brightness-75 hover:brightness-100 transition-all duration-300" style={{backgroundImage: `url(${property.images[0] ? property.images[0] : 'https://placehold.co/400'})`}}>
      <p className="absolute bottom-0 left-0 bg-black bg-opacity-75 text-white p-2">Rs{property.price}</p>
    </Link>
    <div className="p-4">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-cover rounded-full" style={{backgroundImage: `url(${property.userId.profileImage ? property.userId.profileImage : 'https://placehold.co/400'})`}}></div>
        <h3 className="ml-2">{property.userId.username}</h3>
      </div>
      <p className="text-sm text-gray-500 mb-2">{formatDistanceToNow(property.createdAt) + " ago"}</p>
      <h3 className="text-lg font-bold mb-2"><Link href={`property/${property._id}`}>{property.title}</Link></h3>
      <div className='flex items-center'>
      <p className="text-sm text-gray-600 mb-2 flex items-center gap-1"><FaLocationDot /> {property.location}</p>
      <p className='mb-2'><span className={`${property.type === "sale" ? `bg-primary` : `bg-[#fd5c64]`}  text-white text-xs px-1 py-[2px] ml-3 capitalize`}>{property.listingType}</span></p>
      </div>
      <ul className="flex text-sm text-gray-600">
        <li className="mr-4 flex items-center gap-1"><IoIosBed className='text-lg' />{property.propertyDetails.rooms}</li>
        <li className="mr-4 flex items-center gap-1"><FaBath className='text-lg' />{property.propertyDetails.baths}</li>
        <li className='flex items-center gap-1'><SiBlueprint className='text-lg' />{property.propertyDetails.areaSqft}</li>
      </ul>
    </div>
  </div>
  )
}

export default PropertyCard