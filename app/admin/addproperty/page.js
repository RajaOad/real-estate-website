"use client"

import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '@/utils/firebase';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';
import { useAuth } from '@/providers/AuthProvider';
import { useRouter } from 'next/navigation';

const AddProperty = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [images, setImages] = useState([]);
  const [rooms, setRooms] = useState('');
  const [baths, setBaths] = useState('');
  const [areaSqft, setAreaSqft] = useState('');
  const [yearBuilt, setYearBuilt] = useState('');
  const [listingType, setListingType] = useState('sale');
  const [status, setStatus] = useState('available');
  const [mapLocation, setMapLocation] = useState('');
  const [category, setCategory] = useState('house');
  const [featured, setFeatured] = useState(false);
  const [address, setAddress] = useState('');

  const [loading, setLoading] = useState(false);



  const { user, authenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {

    if(user ? !user.admin : true) {
      router.push('/');
    }

  }, [authenticated])



  const handleSubmit = async (e) => {
    e.preventDefault();
    
setLoading(true)
    const imageUrls = await Promise.all(images.map(uploadImage));
    
    const token = localStorage.getItem('token');

    // Prepare property data
    const propertyData = {
      title,
      description,
      price,
      location,
      images: imageUrls,
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
console.log(propertyData)
    try {
      const response = await fetch('/api/addproperty', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(propertyData),
      });

      const res = await response.json();

      if (res.success === true) {
        setLoading(false)
        console.log('Property added successfully!');
        setTitle('');
  setDescription('');
  setPrice('');
  setLocation('');
  setImages([]);
  setRooms('');
  setBaths('');
  setAreaSqft('');
  setYearBuilt('');
  setListingType('sale');
  setStatus('available');
  setMapLocation('');
  setCategory('house');
  setAddress('');
  setFeatured(false)
        toast.success(res.msg, {
          position: "top-right",
      });
      } else {
       
        setLoading(false)
        toast.error(res.msg, {
          position: "top-right",
      });
      }
    } catch (error) {
      
      toast.error('An error occurred while adding property please try again later', {
        position: "top-right",
    });
      setLoading(false)
    }
  };

  const uploadImage = async (file) => {
    const uniqueName = `${uuidv4()}_${file.name}`;
    const storageRef = ref(storage, `images/${uniqueName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    console.log(uniqueName)

    return new Promise((resolve, reject) => {

      uploadTask.on('state_changed', 
        (snapshot) => {
          // Track upload progress if needed
         
          const progress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

          // console.log('Upload is ' + progress + '% done');
        
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        }, 
        (error) => {
          // Handle unsuccessful uploads
          //  console.error('Error uploading file:', error);
          reject(error);
        }, 
        () => {
          // Handle successful uploads on complete
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
            console.log('File uploaded successfully');
          }).catch(reject);
        }
      );
    });
  };

  const onDrop = (acceptedFiles) => {
    setImages([...images, ...acceptedFiles]);
  };

  const removeImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const {getRootProps, getInputProps} = useDropzone({onDrop});

  return (
    <div className='bg-gray-100'>
    <div className="container md:w-4/5 md:ml-auto md:py-32 py-24 px-8 md:px-36">

{loading && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
        <div className="inline-block text-primary h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-middle motion-reduce:animate-spin_1.5s_linear_infinite"></div>
      </div>
      )}

      <h1 className="text-3xl font-bold mb-16">Add Property</h1>
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

<div className='border rounded-lg overflow-hidden shadow-md h-32 md:h-48'>
  {mapLocation ? (
    <iframe
      className='w-full h-full'
      src={mapLocation}
      allowFullScreen
      title='Google Map'
    ></iframe>
  ) : (
    <div className='flex items-center justify-center h-full bg-gray-200 text-gray-600'>
      <p className='text-xs md:text-lg font-semibold px-4'>Add Google Map source here to view</p>
    </div>
  )}
</div>

</div>

          {/* Image Upload */}
          <div>
  <label className="block text-lg font-semibold mb-2">Upload Images</label>
  <div {...getRootProps()} className="w-full bg-white border-dotted border-4 border-gray-400 rounded-lg p-4 md:p-8 mb-8 cursor-pointer flex flex-col items-center justify-center shadow-lg">
    <input {...getInputProps()} />
    <p className="text-gray-600 text-xs md:text-base text-center">Drag &apos;n&apos; drop some files here, or click to select files</p>
  </div>
  {/* Display image previews */}
  <div className="grid grid-cols-4 gap-4">
    {images.map((image, index) => (
      <div key={index} className="relative">
        <img src={URL.createObjectURL(image)} alt={`Preview ${index}`} className="w-32 h-32 object-cover rounded-lg mb-2 shadow-md" />
        <button type="button" onClick={() => removeImage(index)} className="absolute top-1 right-3 bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 focus:outline-none">
          <AiOutlineCloseCircle className="text-red-500 text-lg" />
        </button>
      </div>
    ))}
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

export default AddProperty;
