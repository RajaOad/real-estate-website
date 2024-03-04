"use client"

import { useAuth } from '@/providers/AuthProvider';
import React, { useState, useEffect } from 'react';
import Dropzone from 'react-dropzone';
import toast from 'react-hot-toast';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { storage } from '@/utils/firebase';
import { useRouter } from 'next/navigation';
import UpdatePasswordForm from '../components/UpdatePasswordForm';

const SettingsPage = () => {
  const { user, authenticated, fetchUserInfo } = useAuth();
  const [updatedUser, setUpdatedUser] = useState(user ? { ...user }: {});
  const [profileImage, setProfileImage] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [loading, setLoading] = useState(false);



  const router = useRouter()

  useEffect(() => {

    if(user ? !user.admin : true) {
      router.push('/');
    }

  }, [authenticated])



  const uploadImageToFirebase = async (file, folderName) => {
    const uniqueName = `${uuidv4()}_${file.name}`;
    const storageRef = ref(storage, `${folderName}/${uniqueName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
  
    return new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          // console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          console.error('Error uploading file');
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              resolve(downloadURL);
              console.log('File uploaded successfully');
            })
            .catch(reject);
        }
      );
    });
  };
  
  const deleteImageFromFirebase = async (imageUrl, folderName) => {
    try {
      // Extract image name from URL
      const imageName = imageUrl.split('%2F').pop().split('?')[0];
      // Create reference to the image in Firebase storage
      const imageRef = ref(storage, `${folderName}/${imageName}`);
      // Delete the image from Firebase storage
      await deleteObject(imageRef);
    } catch (error) {
      console.error('Error deleting image');
      throw error; // Rethrow the error to handle it outside
    }
  };
  
  const handleProfileImageUpload = async (file) => {
    try {
      let imageUrl = null;
      // Delete existing profile image if available
      if (user.profileImage) {
        await deleteImageFromFirebase(user.profileImage, 'profile-images');
      }
      // Upload new profile image to Firebase
      imageUrl = await uploadImageToFirebase(file, 'profile-images');
      return imageUrl; // Return the image URL
    } catch (error) {
      console.error('Error handling profile image upload');
      // Handle error appropriately, such as showing a toast message
      throw error; // Rethrow the error to handle it outside
    }
  };
  
  const handleBackgroundImageUpload = async (file) => {
    try {
      let imageUrl = null;
      // Delete existing background image if available
      if (user.backgroundImage) {
        await deleteImageFromFirebase(user.backgroundImage, 'background-images');
      }
      // Upload new background image to Firebase
      imageUrl = await uploadImageToFirebase(file, 'background-images');
      return imageUrl; // Return the image URL
    } catch (error) {
      console.error('Error handling background image upload');
      // Handle error appropriately, such as showing a toast message
      throw error; // Rethrow the error to handle it outside
    }
  };



  const updateUser = async (userId, updates) => {
    try {
      const response = await fetch(`/api/updateuser/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true)
      const token = localStorage.getItem('token');

      const updates = { ...updatedUser, token };

      // Upload profile image if available
      if (profileImage) {
        const profileImageUrl = await handleProfileImageUpload(profileImage);
        updates.profileImage = profileImageUrl;
      }

      // Upload background image if available
      if (backgroundImage) {
        const backgroundImageUrl = await handleBackgroundImageUpload(backgroundImage);
        updates.backgroundImage = backgroundImageUrl;
      }

      // Call API to update user details
      const response = await updateUser(user._id, updates); // Assuming updateUser function takes user ID and updates

      if (response.success === true) {
        toast.success(response.msg, {
          position: "top-right",
        });
        fetchUserInfo();
      } else {
        // Handle update failure
        toast.error(response.msg, {
          position: "top-right",
      });
        // Optionally, display an error message to the user
      }
    } catch (error) {
      toast.error('An error occurred while updating user please try again later', {
        position: "top-right",
    });
      // Handle error appropriately, such as displaying an error message to the user
    } finally {
      setLoading(false);
    }
  };

  const handleProfileImageDrop = (acceptedFiles) => {
    setProfileImage(acceptedFiles[0]);
  };

  const handleBackgroundImageDrop = (acceptedFiles) => {
    setBackgroundImage(acceptedFiles[0]);
  };

  const removeProfileImage = () => {
    setProfileImage(null);
  };

  const removeBackgroundImage = () => {
    setBackgroundImage(null);
  };

  useEffect(() => {
    setUpdatedUser({ ...user });
  }, [user]);

  return (
    <>

    <div className='flex flex-col bg-gray-100 min-h-screen'>

    {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
        <div className="inline-block text-primary h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-middle motion-reduce:animate-spin_1.5s_linear_infinite"></div>
      </div>
      )}

    <div className="md:w-3/5 md:mx-auto px-8 md:mr-44 my-24 text-gray-900 md:p-8">
      <h1 className="text-3xl font-semibold mb-16">Settings</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-x-16">
          <div>
            <label htmlFor="username" className="block text-lg font-semibold mb-2">Name</label>
            <input
              id="username"
              type="text"
              value={updatedUser.username ? updatedUser.username : ''}
              onChange={(e) => setUpdatedUser({ ...updatedUser, username: e.target.value })}
              className="w-full border-gray-300 border shadow-sm rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="headline" className="block text-lg font-semibold mb-2">Headline</label>
            <input
              id="headline"
              type="text"
              value={updatedUser.headline ? updatedUser.headline: ''}
              onChange={(e) => setUpdatedUser({ ...updatedUser, headline: e.target.value })}
              className="w-full border-gray-300 rounded-md border shadow-sm px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="bio" className="block text-lg font-semibold mb-2">Bio</label>
            <textarea
              id="bio"
              value={updatedUser.bio ? updatedUser.bio : ''}
              onChange={(e) => setUpdatedUser({ ...updatedUser, bio: e.target.value })}
              className="w-full border-gray-300 rounded-md border shadow-sm px-4 py-2 focus:outline-none focus:border-blue-500"
              rows="4"
            />
          </div>
          <div>
            <label htmlFor="contactNumber" className="block text-lg font-semibold mb-2">Contact Number</label>
            <input
              id="contactNumber"
              type="text"
              value={updatedUser.contactNumber ? updatedUser.contactNumber : ''}
              onChange={(e) => setUpdatedUser({ ...updatedUser, contactNumber: e.target.value })}
              className="w-full border-gray-300 rounded-md border shadow-sm px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="whatsapp" className="block text-lg font-semibold mb-2">WhatsApp</label>
            <input
              id="whatsapp"
              type="text"
              value={updatedUser.whatsapp ? updatedUser.whatsapp : ''}
              onChange={(e) => setUpdatedUser({ ...updatedUser, whatsapp: e.target.value })}
              className="w-full border-gray-300 rounded-md border shadow-sm px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="facebookLink" className="block text-lg font-semibold mb-2">Facebook Link</label>
            <input
              id="facebookLink"
              type="text"
              value={updatedUser.links && updatedUser.links.facebook ? updatedUser.links.facebook : ''}
              onChange={(e) => setUpdatedUser({ ...updatedUser, links: { ...updatedUser.links, facebook: e.target.value } })}
              className="w-full border-gray-300 rounded-md border shadow-sm px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="twitterLink" className="block text-lg font-semibold mb-2">Twitter Link</label>
            <input
              id="twitterLink"
              type="text"
              value={updatedUser.links && updatedUser.links.twitter ? updatedUser.links.twitter : ''}
              onChange={(e) => setUpdatedUser({ ...updatedUser, links: { ...updatedUser.links, twitter: e.target.value } })}
              className="w-full border-gray-300 rounded-md border shadow-sm px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="linkedinLink" className="block text-lg font-semibold mb-2">LinkedIn Link</label>
            <input
              id="linkedinLink"
              type="text"
              value={updatedUser.links && updatedUser.links.linkedin ? updatedUser.links.linkedin : ''}
              onChange={(e) => setUpdatedUser({ ...updatedUser, links: { ...updatedUser.links, linkedin: e.target.value } })}
              className="w-full border-gray-300 rounded-md border shadow-sm px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className='flex flex-col md:flex-row md:gap-20'>

        <div>
          <label className="block text-lg font-semibold mb-2">Upload Profile Image</label>
          <Dropzone onDrop={handleProfileImageDrop}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()} className="w-full bg-white border-dotted border-4 border-gray-400 rounded-lg p-8 mb-6 cursor-pointer flex flex-col items-center justify-center shadow-lg">
                <input {...getInputProps()} />
                <p className="text-gray-600 text-center">Drag &apos;n&apos; drop profile image here, or click to select files</p>
              </div>
            )}
          </Dropzone>
         
          {profileImage && (
            <div className='relative w-32 h-32 '>
            <img
              src={URL.createObjectURL(profileImage)}
              alt="Profile Image Preview"
              className="object-cover h-full w-full rounded-lg mb-2 shadow-md"
            />
            <button type="button" className='absolute top-0 p-1 right-0 text-2xl bg-white bg-opacity-75' onClick={removeProfileImage}>
                <AiOutlineCloseCircle className="text-red-700 hover:text-red-900" />
              </button>
             </div>
          )}
        </div>

        <div>
          <label className="block text-lg font-semibold mb-2">Upload Background Image</label>
          <Dropzone onDrop={handleBackgroundImageDrop}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()} className="w-full bg-white border-dotted border-4 border-gray-400 rounded-lg p-8 mb-6 cursor-pointer flex flex-col items-center justify-center shadow-lg">
                <input {...getInputProps()} />
                <p className="text-gray-600 text-center">Drag &apos;n&apos; drop background image here, or click to select files</p>
              </div>
            )}
          </Dropzone>
          
          {backgroundImage && (
            <div className='relative w-32 h-32'>
            <img
              src={URL.createObjectURL(backgroundImage)}
              alt="Background Image Preview"
              className="object-cover rounded-lg h-full w-full mb-2 shadow-md"
            />
             <button type="button" className='absolute top-0 p-1 right-0 text-2xl bg-white bg-opacity-75' onClick={removeBackgroundImage}>
                <AiOutlineCloseCircle className="text-red-700 hover:text-red-900" />
              </button>
            </div>
          )}
        </div>

        </div>

        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300">
          Save Changes
        </button>
      </form>
      <div className='mt-24'>
    <UpdatePasswordForm />
    </div>
    </div>


    </div>

    </>
  );
};

export default SettingsPage;
