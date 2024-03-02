import React, { useState } from 'react';
import { FaBath, FaTrashAlt, FaEdit } from 'react-icons/fa';
import { SiBlueprint } from 'react-icons/si';
import { IoIosBed } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';
import { formatDistanceToNow } from 'date-fns';
import Link from 'next/link';
import { deleteObject, ref } from 'firebase/storage';
import { storage } from '@/utils/firebase';
import toast from 'react-hot-toast';
import UpdatePropertyDialog from './UpdatePropertyDialog';

const AdminPropertyCard = ({ property, deleteProperty, fetchData }) => {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [loading, setLoading] = useState(false);

  const handleDeleteClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmDelete = async () => {
    let allImagesDeleted = true; // Flag to track if all images are deleted successfully
    setShowConfirmation(false);
  
    // Check if the property has images
    if (property.images && property.images.length > 0) {
      try {
        setLoading(true)
        // Iterate over each image URL and delete from Firebase Storage
        await Promise.all(property.images.map(async imageUrl => {
          // Extract image name from URL
          const imageName = imageUrl.split('%2F').pop().split('?')[0];
          // Create reference to the image in Firebase storage
          const imageRef = ref(storage, `images/${imageName}`);
          // Delete the image from Firebase storage
          await deleteObject(imageRef);
        }));
      } catch (error) {
        // Handle the error appropriately, such as logging it
        console.error('Error deleting images:', error);
        toast.error('Error deleting Property', {
          position: "top-right",
      });
        // Set the flag to false if any error occurs while deleting images
        allImagesDeleted = false;
        // Optionally, notify the user about the error
      } finally {
        setLoading(false);
      }
    }
  
    // If all images are deleted successfully (or if there are no images), proceed to delete the property
    if (allImagesDeleted) {
      deleteProperty(property._id);
      // You may also want to reset the confirmation state
    } else {
      // Handle the case where not all images are deleted
      // Optionally, notify the user that images couldn't be deleted and the property will not be deleted
    }
  };

  return (
    <>
      {loading && (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
    <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
    <div className="inline-block text-primary h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-middle motion-reduce:animate-spin_1.5s_linear_infinite"></div>
  </div>
  )}
    <div className="bg-white rounded-md relative shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <Link href={`/property/${property._id}`}>
        <span className="block relative bg-cover bg-center h-40" style={{ backgroundImage: `url(${property.images[0] ? property.images[0] : 'https://placehold.co/400'})` }}>
          <p className="absolute bottom-0 left-0 bg-black bg-opacity-75 text-white px-2 py-1">{`Rs${property.price}`}</p>
        </span>
      </Link>
      <div className="p-4">
        <p className="text-xs text-gray-500 mb-1">{formatDistanceToNow(property.createdAt) + ' ago'}</p>
        <h3 className="text-lg font-semibold mb-1"><Link href={`/property/${property._id}`}>{property.title}</Link></h3>
        <div className="flex items-center mb-2">
          <p className="text-sm text-gray-600 flex items-center gap-1"><FaLocationDot /> {property.location}</p>
          <span className={`${property.type === 'sale' ? 'bg-primary' : 'bg-red-500'} text-xs text-white px-1 py-[2px] ml-2 capitalize`}>{property.listingType}</span>
        </div>
        <ul className="flex text-sm text-gray-600">
          <li className="mr-3 flex items-center gap-1"><IoIosBed className="text-lg" />{property.propertyDetails.rooms}</li>
          <li className="mr-3 flex items-center gap-1"><FaBath className="text-lg" />{property.propertyDetails.baths}</li>
          <li className="flex items-center gap-1"><SiBlueprint className="text-lg" />{property.propertyDetails.areaSqft}</li>
        </ul>
        <div className="flex justify-end absolute top-0 right-0 bg-gray-900 bg-opacity-75 p-2">
          <button onClick={handleDeleteClick} className="text-white hover:text-red-500 mr-4"><FaTrashAlt className="text-lg" /></button>
          <button onClick={()=> setShowUpdateForm(true)} className="text-white hover:text-blue-500"><FaEdit className="text-lg" /></button>
        </div>
      </div>

      {showConfirmation && (
        <div className="fixed px-16 inset-0 flex items-center z-50 justify-center bg-black bg-opacity-50">
          <div className="bg-white px-4 py-8 rounded-md">
            <p className='text-lg md:text-xl'>Are you sure you want to delete this property?</p>
            <p className='text-sm md:text-lg font-bold my-2'>{property.title}</p>
            <div className="flex justify-end mt-2">
              <button onClick={handleConfirmDelete} className="bg-red-500 hover:bg-red-700 text-white text-sm rounded transition duration-500 px-4 py-2 mr-2">Delete</button>
              <button onClick={() => setShowConfirmation(false)} className="bg-gray-300 text-sm hover:bg-slate-500 rounded transition duration-500 text-gray-800 px-4 py-2">Cancel</button>
            </div>
          </div>
        </div>
      )}


    </div>
      {showUpdateForm && (
        <UpdatePropertyDialog property={property} setShow={setShowUpdateForm} fetchData={fetchData} />
      )}
    </>
  );
};

export default AdminPropertyCard;
