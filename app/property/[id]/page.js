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
  // Fake data for property details
  const propertyDetails = {
    id: 'HZ29',
    name: 'Diamond Manor Apartment',
    type: 'Apartment',
    location: 'Belmont Gardens, Chicago',
    address: '123 Main St, Chicago, IL 60601',
    description: 'Massa tempor nec feugiat nisl pretium. Egestas fringilla phasellus faucibus scelerisque eleifend donec Porta nibh venenatis cras sed felis eget velit aliquet Massa tempor nec feugiat nisl pretium. Egestas fringilla phasellus faucibus scelerisque eleifend donec Porta nibh venenatis cras sed felis eget velit aliquet Massa tempor nec feugiat nisl pretium. Egestas fringilla phasellus faucibus scelerisque eleifend donec Porta nibh venenatis cras sed felis eget velit aliquet Massa tempor nec feugiat nisl pretium. Egestas fringilla phasellus faucibus scelerisque eleifend donec Porta nibh venenatis cras sed felis eget velit aliquet.',
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
    <>
      <HeroSection backgroundImage={"/images/h1.jpg"} title={"Property"} />
     {property && <SingleProperty propertyDetails={property} />}
    </>
  );
};

export default PropertyDetailsPage;
