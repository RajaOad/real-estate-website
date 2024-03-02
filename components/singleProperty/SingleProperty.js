
"use client"

import { format } from 'date-fns';
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaBed, FaBath, FaRegCalendarAlt } from 'react-icons/fa';

const SingleProperty = ({ propertyDetails }) => {

  const [selectedImage, setSelectedImage] = useState(propertyDetails.images[0]);

  const handlePreviewHover = (image) => {
    setSelectedImage(image);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'yyyy-MM-dd');
  };

  return (
    <>
      <div className="container mx-auto py-12 md:pt-32 md:pb-24">
        {/* Big Property Image */}
        
        <div className="mb-6 md:mb-12 mx-4 md:mx-0 bg-gray-100 rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src={selectedImage}
          alt="Property"
          className="w-full h-[36rem] object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
          {propertyDetails.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Property Image ${index}`}
              className="inline-block w-16 h-16 object-cover object-center cursor-pointer hover:opacity-75 transition-opacity mr-2"
              onMouseEnter={() => handlePreviewHover(image)}
            />
          ))}
        </div>
      </div>
    </div>

        <div className="flex flex-wrap md:-mx-4">

          <div className="lg:w-8/12 md:w-full px-4">
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
              {/* Property Information */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center capitalize gap-2">
                  <span className={`${propertyDetails.listingType === 'rent' ? 'bg-red-500' : 'bg-blue-500'} px-3 py-1 rounded-full text-white`}>{propertyDetails.listingType}</span>
                  <span className={`px-3 py-1 rounded-full text-white ${
  propertyDetails.status === 'available' ? 'bg-green-500' :
  propertyDetails.status === 'pending' ? 'bg-yellow-500' :
  propertyDetails.status === 'sold' ? 'bg-red-500' : ''
}`}>
  {propertyDetails.status}
</span>
                  
                </div>
                <div className="text-gray-500 flex text-xs md:text-base items-center"><FaRegCalendarAlt className="mr-2" />{formatDate(propertyDetails.createdAt)}</div>
              </div>
              <h1 className="text-xl md:text-3xl font-bold mb-2">{propertyDetails.title}</h1>
              <p className="text-gray-600 mb-4 text-xs md:text-base flex items-center"><FaMapMarkerAlt className="mr-2" />{propertyDetails.location}</p>
              <p className="text-gray-600 mb-4 text-xs md:text-base"><strong>Address:</strong> {propertyDetails.address}</p>
              <p className="text-gray-600 mb-6 text-xs md:text-base">{propertyDetails.description}</p>

              {/* Property Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-lg md:text-xl font-semibold mb-2">Property Detail</h4>
                  <ul>
                    {/* <li className="flex items-center mb-2 text-xs md:text-base"><FaBed className="mr-2" /><span className="font-semibold mr-2">Property ID:</span>{propertyDetails.id}</li> */}
                    <li className="flex items-center mb-2 text-xs md:text-base"><span className="font-semibold mr-2">Home Area:</span>{propertyDetails.propertyDetails.areaSqft}</li>
                    <li className="flex items-center mb-2 text-xs md:text-base"><FaBed className="mr-2" /><span className="font-semibold mr-2">Rooms:</span>{propertyDetails.propertyDetails.rooms}</li>
                    <li className="flex items-center mb-2 text-xs md:text-base"><FaBath className="mr-2" /><span className="font-semibold mr-2">Baths:</span>{propertyDetails.propertyDetails.baths}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold mb-2">Lot Detail</h4>
                  <ul>
                    {/* <li className="flex items-center mb-2 text-xs md:text-base"><span className="font-semibold mr-2">Lot Area:</span>{propertyDetails.lotArea}</li> */}
                    {/* <li className="flex items-center mb-2 text-xs md:text-base"><span className="font-semibold mr-2">Lot Dimensions:</span>{propertyDetails.lotDimensions}</li> */}
                    {/* <li className="flex items-center mb-2 text-xs md:text-base"><FaBed className="mr-2" /><span className="font-semibold mr-2">Beds:</span>{propertyDetails.beds}</li> */}
                    <li className="flex items-center mb-2 text-xs md:text-base">
                      <span className="font-semibold mr-2">Price:</span>
                      {propertyDetails.listingType === 'rent' ? `Rs${propertyDetails.price}/month` : `Rs${propertyDetails.price}`}
                    </li>
                    <li className="flex items-center mb-2 text-xs md:text-base"><span className="font-semibold mr-2">Property Status:</span>{propertyDetails.status}</li>
                    <li className="flex items-center mb-2 text-xs md:text-base"><span className="font-semibold mr-2">Year built:</span>{propertyDetails.yearBuilt}</li>
                  </ul>
                </div>
              </div>

              {/* Gallery */}
              <div>
                <h4 className="text-lg md:text-xl font-semibold mb-2">From Our Gallery</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {propertyDetails.images.map((image, index) => (
                    <div key={index}>
                      <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-auto rounded-lg shadow-lg" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-4/12 md:w-full px-4">
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
              <h4 className="text-lg md:text-xl font-bold mb-4">Drop Message For Booking</h4>
              <form action="#" className="space-y-6">
                <input type="text" name="yourname" placeholder="Your Name*" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 text-xs md:text-base placeholder-gray-400" />
                <input type="text" name="youremail" placeholder="Your e-Mail*" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 text-xs md:text-base placeholder-gray-400" />
                <textarea name="yourmessage" placeholder="Write Message..." rows="5" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 text-xs md:text-base placeholder-gray-400"></textarea>
                <button type="submit" className="btn theme-btn-1 w-full py-3 px-4 bg-[#001F5B] text-white rounded-lg hover:bg-blue-700 transition duration-300 text-xs md:text-base font-bold">Send Message</button>
              </form>
            </div>

            {propertyDetails.mapLocation && <div className="bg-white shadow-md rounded-lg p-6 mb-8">
              <h4 className="text-lg md:text-xl font-bold mb-4">Location</h4>
              <div className="property-details-google-map" style={{ height: '300px' }}>
                <iframe
                  src={propertyDetails.mapLocation}
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>}

          </div>

        </div>
      </div>
    </>
  );
};

export default SingleProperty;
