import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '@/utils/firebase';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import toast from 'react-hot-toast';
import { IoMdClose } from 'react-icons/io';

const UpdatePropertyDialog = ({ property, setShow, fetchData }) => {
  const [title, setTitle] = useState(property.title);
  const [description, setDescription] = useState(property.description);
  const [price, setPrice] = useState(property.price);
  const [location, setLocation] = useState(property.location);
  const [rooms, setRooms] = useState(property.propertyDetails.rooms);
  const [baths, setBaths] = useState(property.propertyDetails.baths);
  const [areaSqft, setAreaSqft] = useState(property.propertyDetails.areaSqft);
  const [yearBuilt, setYearBuilt] = useState(property.yearBuilt);
  const [listingType, setListingType] = useState(property.listingType);
  const [status, setStatus] = useState(property.status);
  const [mapLocation, setMapLocation] = useState(property.mapLocation);
  const [category, setCategory] = useState(property.category);
  const [featured, setFeatured] = useState(property.featured);
  const [address, setAddress] = useState(property.address);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTitle(property.title);
    setDescription(property.description);
    setPrice(property.price);
    setLocation(property.location);
    setRooms(property.propertyDetails.rooms);
    setBaths(property.propertyDetails.baths);
    setAreaSqft(property.propertyDetails.areaSqft);
    setYearBuilt(property.yearBuilt);
    setListingType(property.listingType);
    setStatus(property.status);
    setMapLocation(property.mapLocation);
    setCategory(property.category);
    setFeatured(property.featured);
    setAddress(property.address);
  }, [property]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = localStorage.getItem('token');

    const propertyData = {
      title,
      description,
      price,
      location,
      rooms,
      baths,
      areaSqft,
      yearBuilt,
      listingType,
      status,
      mapLocation,
      category,
      featured,
      address,
      token,
    };

    try {
      const response = await fetch(`/api/updateproperty/${property._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(propertyData),
      });

      const res = await response.json();

      if (res.success === true) {
        setLoading(false);
        toast.success(res.msg, { position: 'top-right' });
        fetchData()
      } else {
        console.error('Failed to update property:', response.statusText);
        setLoading(false);
        toast.error(res.msg, { position: 'top-right' });
      }
    } catch (error) {
      console.error('Error updating property:', error);
      setLoading(false);
    }
  };

  return (
    <div className="fixed top-0 flex pt-20 pb-8 h-full items-center justify-center z-50">
      <div className="bg-gray-100 relative p-8 w-full border h-full overflow-y-auto rounded-lg shadow-lg">
        <div className='absolute top-2 cursor-pointer right-2'>
            <button onClick={()=> setShow(false)} className='text-3xl text-red-500 hover:text-red-700'>
        <AiOutlineCloseCircle />
        </button>
        </div>
        {loading && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
            <div className="inline-block text-primary h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-middle motion-reduce:animate-spin_1.5s_linear_infinite"></div>
          </div>
        )}

        <h1 className="text-3xl font-bold mb-4">Update Property</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-8 md:gap-16">
        {/* Left Column */}
        <div>
  <label className="block text-lg font-semibold mb-2">Title</label>
  <input 
    type="text" 
    value={title} 
    onChange={(e) => setTitle(e.target.value)} 
    className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4 shadow-sm focus:outline-none focus:border-blue-500"
    required 
  />
  
  <label className="block text-lg font-semibold mb-2">Description</label>
  <textarea 
    value={description} 
    onChange={(e) => setDescription(e.target.value)} 
    className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4 shadow-sm focus:outline-none focus:border-blue-500"
    rows="4"
  ></textarea>
  
  <label className="block text-lg font-semibold mb-2">Price</label>
  <input 
    type="number" 
    value={price} 
    onChange={(e) => setPrice(e.target.value)} 
    className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4 shadow-sm focus:outline-none focus:border-blue-500"
    required 
  />
  
  <label className="block text-lg font-semibold mb-2">Location</label>
  <input 
    type="text" 
    value={location} 
    onChange={(e) => setLocation(e.target.value)} 
    className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4 shadow-sm focus:outline-none focus:border-blue-500"
    required 
  />
  
  <label className="block text-lg font-semibold mb-2">Rooms</label>
  <input 
    type="number" 
    value={rooms} 
    onChange={(e) => setRooms(e.target.value)} 
    className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4 shadow-sm focus:outline-none focus:border-blue-500"
  />
  
  <label className="block text-lg font-semibold mb-2">Baths</label>
  <input 
    type="number" 
    value={baths} 
    onChange={(e) => setBaths(e.target.value)} 
    className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4 shadow-sm focus:outline-none focus:border-blue-500"
  />
  
  <label className="block text-lg font-semibold mb-2">Area (Sqft)</label>
  <input 
    type="number" 
    value={areaSqft} 
    onChange={(e) => setAreaSqft(e.target.value)} 
    className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4 shadow-sm focus:outline-none focus:border-blue-500"
  />
  
  <label className="block text-lg font-semibold mb-2">Year Built</label>
<input 
  type="number" 
  value={yearBuilt} 
  onChange={(e) => setYearBuilt(e.target.value)} 
  className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4 shadow-sm focus:outline-none focus:border-blue-500"
/>
  
  {/* Category Selector */}
  <label className="block text-lg font-semibold mb-2">Category</label>
  <select 
    value={category} 
    onChange={(e) => setCategory(e.target.value)} 
    className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4 shadow-sm focus:outline-none focus:border-blue-500"
  >
    <option value="house">House</option>
    <option value="apartment">Apartment</option>
    <option value="condo">Condo</option>
    {/* Add more options as needed */}
  </select>
</div>

        
        {/* Right Column */}
        <div>
        <label className="block text-lg font-semibold mb-2">Listing Type</label>
  <select 
    value={listingType} 
    onChange={(e) => setListingType(e.target.value)} 
    className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4 shadow-sm focus:outline-none focus:border-blue-500"
  >
    <option value="sale">Sale</option>
    <option value="rent">Rent</option>
  </select>
  
  <label className="block text-lg font-semibold mb-2">Status</label>
  <select 
    value={status} 
    onChange={(e) => setStatus(e.target.value)} 
    className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4 shadow-sm focus:outline-none focus:border-blue-500"
  >
    <option value="available">Available</option>
    <option value="pending">Pending</option>
    <option value="sold">Sold</option>
  </select>

  <label className="block text-lg font-semibold mb-2">Featured</label>
      <select 
        value={featured ? 'true' : 'false'} 
        onChange={(e) => setFeatured(e.target.value === 'true')} 
        className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4 shadow-sm focus:outline-none focus:border-blue-500"
      >
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>

  <label className="block text-lg font-semibold mb-2">Address</label>
      <textarea 
        value={address} 
        onChange={(e) => setAddress(e.target.value)} 
        className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4 shadow-sm focus:outline-none focus:border-blue-500"
        rows="4"
      />

  <div className='mb-4'>

  <label className="block text-lg font-semibold mb-2">Map Location (Google Maps Link)</label>
<input 
  type="text" 
  value={mapLocation} 
  onChange={(e) => setMapLocation(e.target.value)} 
  className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4 shadow-sm focus:outline-none focus:border-blue-500"
  placeholder="Google Maps Link" 
/>

<div className='border rounded-lg overflow-hidden shadow-md h-48'>
  {mapLocation ? (
    <iframe
      className='w-full h-full'
      src={mapLocation}
      allowFullScreen
      title='Google Map'
    ></iframe>
  ) : (
    <div className='flex items-center justify-center h-full bg-gray-200 text-gray-600'>
      <p className='text-lg font-semibold'>Add Google Map source here to view</p>
    </div>
  )}
</div>

</div>



        </div>
        
        <button 
  type="submit" 
  className="col-span-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105"
>
  Submit
</button>


      </form>
      </div>
    </div>
  );
};

export default UpdatePropertyDialog;
