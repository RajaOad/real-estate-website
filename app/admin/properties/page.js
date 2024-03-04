"use client"

import React, { useEffect, useState } from 'react'
import AdminPropertyCard from '../components/AdminPropertyCard';
import toast from 'react-hot-toast';
import AdminPropertyCardSkeleton from '../components/AdminPropertyCardSkeleton';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/providers/AuthProvider';

const Page = () => {

    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadingCard, setLoadingCard] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    const token = localStorage.getItem('token');




    const { user, authenticated } = useAuth()
    const router = useRouter()
  
    useEffect(() => {
    if (authenticated && user && !user.admin) {
      router.push('/');
    }
  }, [authenticated, user]);


    const fetchData = async () => {
        try {
          setLoadingCard(true)
          // Make a GET request to fetch properties
          const response = await fetch('/api/getuserproperties', {
              method: 'POST', // Use POST method
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ token }),
          });
  
          // Parse JSON response
          const data = await response.json();
  
          // Check if the response indicates success
          if (data.success === true) {
            // Update state with properties data
            setProperties(data.properties);
          } else {
            // Handle error if the response indicates failure
            setErrorMsg(data.msg)
          }
        } catch (error) {
          // Handle any errors that occurred during the fetch operation
          setErrorMsg('An error occurred while fetching properties')
        } finally {
          setLoadingCard(false)
        }
      };

    useEffect(() => {

    
        // Call the fetchData function to initiate the fetch operation
        fetchData();
      }, []);

      const deleteProperty = async (propertyId) => {
        setLoading(true)
        try {
          // Make a fetch request to the delete property API endpoint
          const response = await fetch(`/api/deleteproperty/${propertyId}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
          });
      
          // Parse the response JSON
          const data = await response.json();

          if(data.success === true) {

            toast.success(data.msg, {
                position: "top-right",
            });

            fetchData();

          } else {

            toast.error(data.msg, {
                position: "top-right",
            });

          }
        //   return data;
        } catch (error) {
          // Handle errors
          toast.error('Error deleting property', {
            position: "top-right",
        });
        } finally {
            setLoading(false);
          }
      };

      if(loadingCard) {
       return <>
        <section className="bg-gray-100 min-h-screen">
    <div className="py-24 md:py-32 px-4 md:w-3/4 md:ml-auto md:px-16">

      <div className="text-center mb-20" >
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">Properties</h2>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AdminPropertyCardSkeleton />
        <AdminPropertyCardSkeleton />
        <AdminPropertyCardSkeleton />
        <AdminPropertyCardSkeleton />
        <AdminPropertyCardSkeleton />
        <AdminPropertyCardSkeleton />
      </div>
    </div>
  </section>
        </>
      }

      if(errorMsg) {
        return <>
        <section className="bg-gray-100 min-h-screen">
    <div className="py-24 md:py-32 px-4 md:w-3/4 md:ml-auto md:px-16">

      <div className="text-center" >
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">Properties</h2>
      </div>
<div className='flex justify-center items-center text-3xl mt-32 font-semibold text-red-500'>No properties available</div>
    </div>
  </section>
        </>
      }
      
  return (
    <>

<section className="bg-gray-100 min-h-screen">
    <div className="py-24 md:py-32 px-4 md:w-3/4 md:ml-auto md:px-16">

    {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
        <div className="inline-block text-primary h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-middle motion-reduce:animate-spin_1.5s_linear_infinite"></div>
      </div>
      )}

      <div className="text-center mb-20" >
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">Properties</h2>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <div key={property._id} >
            <AdminPropertyCard property={property} deleteProperty={deleteProperty} fetchData={fetchData} />
          </div>
        ))}
      </div>
    </div>
  </section>

    </>
  )
}

export default Page