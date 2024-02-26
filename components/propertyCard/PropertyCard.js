import React from 'react';
import { FaBath } from "react-icons/fa";
import { SiBlueprint } from "react-icons/si";
import { IoIosBed } from 'react-icons/io';
import { FaLocationDot } from "react-icons/fa6";
import Link from 'next/link';

const PropertyCard = ({ property }) => {
    return (
        <div className="property-wrap bg-white rounded-md shadow-md hover:shadow-xl overflow-hidden transition-all duration-300">
            <Link href={`property/${property.id}`} className="block relative h-64 bg-cover bg-center brightness-75 hover:brightness-100 transition-all duration-300" style={{backgroundImage: `url(${property.image})`}}>
                <p className="absolute bottom-0 left-0 bg-black bg-opacity-75 text-white p-2">{property.price}</p>
            </Link>
            <div className="p-4">
                <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-cover rounded-full" style={{backgroundImage: `url(${property.agentImage})`}}></div>
                    <h3 className="ml-2">{property.agentName}</h3>
                </div>
                <p className="text-sm text-gray-500 mb-2">{property.ago}</p>
                <h3 className="text-lg font-bold mb-2"><Link href={`property/${property.id}`}><span className="text-blue-500 hover:underline">{property.title}</span></Link></h3>
                <div className='flex items-center'>
                    <p className="text-sm text-gray-600 mb-2 flex items-center gap-1"><FaLocationDot /> {property.location} <span className={`${property.type === "sale" ? 'bg-blue-500' : 'bg-red-500'} text-white text-xs px-1 py-[2px] ml-3 capitalize rounded-md`}>{property.type}</span></p>
                </div>
                <ul className="flex text-sm text-gray-600">
                    <li className="mr-4 flex items-center gap-1"><IoIosBed className='text-lg' />{property.beds}</li>
                    <li className="mr-4 flex items-center gap-1"><FaBath className='text-lg' />{property.baths}</li>
                    <li className='flex items-center gap-1'><SiBlueprint className='text-lg' />{property.sqft}</li>
                </ul>
            </div>
        </div>
    );
};

export default PropertyCard;
