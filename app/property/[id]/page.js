import React from 'react';
import { FaMapMarkerAlt, FaBed, FaBath, FaRegCalendarAlt } from 'react-icons/fa';

const PropertyDetailsPage = () => {
  // Fake data for property details
  const propertyDetails = {
    id: 'HZ29',
    name: 'Diamond Manor Apartment',
    type: 'Apartment',
    location: 'Belmont Gardens, Chicago',
    address: '123 Main St, Chicago, IL 60601',
    description: 'Massa tempor nec feugiat nisl pretium. Egestas fringilla phasellus faucibus scelerisque eleifend donec Porta nibh venenatis cras sed felis eget velit aliquet Massa tempor nec feugiat nisl pretium. Egestas fringilla phasellus faucibus scelerisque eleifend donec Porta nibh venenatis cras sed felis eget velit aliquet Massa tempor nec feugiat nisl pretium. Egestas fringilla phasellus faucibus scelerisque eleifend donec Porta nibh venenatis cras sed felis eget velit aliquet Massa tempor nec feugiat nisl pretium. Egestas fringilla phasellus faucibus scelerisque eleifend donec Porta nibh venenatis cras sed felis eget velit aliquet...',
    area: '120 sqft',
    rooms: 7,
    baths: 2,
    yearBuilt: 1992,
    lotArea: '240 sqft',
    lotDimensions: '20 x 12 sq feet',
    beds: 7,
    price: 200000,
    status: 'For Sale',
    amenities: ['Swimming Pool', 'Gym', 'Parking'],
    galleryImages: ['/images/h1.jpg', '/images/h2.jpg', '/images/h3.jpg'],
    mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd"
  };

  return (
    <div className="container mx-auto pt-24 pb-12 md:pt-48 md:pb-24">
      {/* Big Property Image */}
      <div className="mb-12 mx-4 md:mx-0 bg-gray-100 rounded-lg overflow-hidden">
        <img src="/images/h1.jpg" alt="Property" className="w-full md:h-[40rem] object-cover object-center" />
      </div>

      <div className="flex flex-wrap md:-mx-4">

        <div className="lg:w-8/12 md:w-full px-4">
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            {/* Property Information */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <a href="#/product-details" className="mr-4">Featured</a>
                <span className="bg-orange px-3 py-1 rounded-full text-white">{propertyDetails.status}</span>
              </div>
              <div className="text-gray-500 flex text-xs md:text-base items-center"><FaRegCalendarAlt className="mr-2" />May 19, 2021</div>
            </div>
            <h1 className="text-xl md:text-3xl font-bold mb-2">{propertyDetails.name}</h1>
            <p className="text-gray-600 mb-4 text-xs md:text-base flex items-center"><FaMapMarkerAlt className="mr-2" />{propertyDetails.location}</p>
            <p className="text-gray-600 mb-4 text-xs md:text-base"><strong>Address:</strong> {propertyDetails.address}</p>
            <p className="text-gray-600 mb-6 text-xs md:text-base">{propertyDetails.description}</p>

            {/* Property Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-lg md:text-xl font-semibold mb-2">Property Detail</h4>
                <ul>
                  <li className="flex items-center mb-2 text-xs md:text-base"><FaBed className="mr-2" /><span className="font-semibold mr-2">Property ID:</span>{propertyDetails.id}</li>
                  <li className="flex items-center mb-2 text-xs md:text-base"><span className="font-semibold mr-2">Home Area:</span>{propertyDetails.area}</li>
                  <li className="flex items-center mb-2 text-xs md:text-base"><FaBed className="mr-2" /><span className="font-semibold mr-2">Rooms:</span>{propertyDetails.rooms}</li>
                  <li className="flex items-center mb-2 text-xs md:text-base"><FaBath className="mr-2" /><span className="font-semibold mr-2">Baths:</span>{propertyDetails.baths}</li>
                  <li className="flex items-center mb-2 text-xs md:text-base"><span className="font-semibold mr-2">Year built:</span>{propertyDetails.yearBuilt}</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-semibold mb-2">Lot Detail</h4>
                <ul>
                  <li className="flex items-center mb-2 text-xs md:text-base"><span className="font-semibold mr-2">Lot Area:</span>{propertyDetails.lotArea}</li>
                  <li className="flex items-center mb-2 text-xs md:text-base"><span className="font-semibold mr-2">Lot Dimensions:</span>{propertyDetails.lotDimensions}</li>
                  <li className="flex items-center mb-2 text-xs md:text-base"><FaBed className="mr-2" /><span className="font-semibold mr-2">Beds:</span>{propertyDetails.beds}</li>
                  <li className="flex items-center mb-2 text-xs md:text-base"><span className="font-semibold mr-2">Price:</span>${propertyDetails.price}</li>
                  <li className="flex items-center mb-2 text-xs md:text-base"><span className="font-semibold mr-2">Property Status:</span>{propertyDetails.status}</li>
                </ul>
              </div>
            </div>

            {/* Amenities */}
            <div className="mb-6">
              <h4 className="text-lg md:text-xl font-semibold mb-2">Amenities</h4>
              <ul className="flex flex-wrap">
                {propertyDetails.amenities.map((amenity, index) => (
                  <li key={index} className="bg-gray-200 text-gray-700 rounded-full py-1 px-4 mr-2 mb-2 text-xs md:text-base">{amenity}</li>
                ))}
              </ul>
            </div>

            {/* Gallery */}
            <div>
              <h4 className="text-lg md:text-xl font-semibold mb-2">From Our Gallery</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {propertyDetails.galleryImages.map((image, index) => (
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
              <button type="submit" className="btn theme-btn-1 w-full py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 text-xs md:text-base font-bold">Send Message</button>
            </form>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
  <h4 className="text-lg md:text-xl font-bold mb-4">Location</h4>
  <div className="property-details-google-map" style={{ height: '300px' }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd"
      width="100%"
      height="100%"
      frameBorder="0"
      allowFullScreen=""
      aria-hidden="false"
      tabIndex="0"
      className="rounded-lg"
    ></iframe>
  </div>
</div>

        </div>

      </div>
    </div>
  );
};

export default PropertyDetailsPage;
