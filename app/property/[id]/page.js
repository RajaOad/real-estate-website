"use client"

import HeroSection from '@/components/heroSection/HeroSection';
import SingleProperty from '@/components/singleProperty/SingleProperty';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const PropertyDetailsPage = () => {
  const params = useParams();
  const { id } = params;
  console.log(id)
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(property)

  useEffect(() => {
    async function fetchProperty() {
      try {
        const response = await fetch(`/api/singledata/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch property');
        }
        const data = await response.json();
        if (data.success) {
          setProperty(data.property);
        } else {
          throw new Error(data.msg);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProperty();
  }, [id]);

  return (
    <>
      <HeroSection backgroundImage={"/images/h1.jpg"} title={"Property"} />
     {property && <SingleProperty propertyDetails={property} />}
    </>
  );
};

export default PropertyDetailsPage;
