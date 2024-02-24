"use client"
import React from 'react'
import PropertyCard from '../propertyCard/PropertyCard'
import { useState } from 'react';

const fakeData = [
    {
      id: 1,
      image: 'images/h1.jpg',
      price: '$300,000',
      agentImage: 'images/h1.jpg',
      agentName: 'John Dorf',
      ago: '2 weeks ago',
      title: 'Sunny Loft Property',
      location: 'New York',
      type: 'sale',
      beds: 3,
      baths: 2,
      sqft: '1,878 sqft'
    },
    {
      id: 2,
      image: 'images/h2.jpg',
      price: '$1,500/month',
      agentImage: 'images/h2.jpg',
      agentName: 'Emily Smith',
      ago: '1 week ago',
      title: 'Cozy Apartment for Rent',
      location: 'Los Angeles',
      type: 'rent',
      beds: 2,
      baths: 1,
      sqft: '950 sqft'
    },
    {
      id: 3,
      image: 'images/h3.jpg',
      price: '$450,000',
      agentImage: 'images/h3.jpg',
      agentName: 'Mark Johnson',
      ago: '3 days ago',
      title: 'Luxurious Villa',
      location: 'Miami',
      type: 'sale',
      beds: 5,
      baths: 4,
      sqft: '3,200 sqft'
    },
    {
      id: 4,
      image: 'images/h4.jpg',
      price: '$2,200/month',
      agentImage: 'images/h4.jpg',
      agentName: 'Sophia Brown',
      ago: '5 days ago',
      title: 'Modern Condo in Downtown',
      location: 'Chicago',
      type: 'rent',
      beds: 1,
      baths: 1,
      sqft: '750 sqft'
    },
    // Add more fake data objects as needed
  ];
  

const Featured = ({ title }) => {
    const [properties, setProperties] = useState(fakeData);

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto py-24 px-16">
        <div className="text-center mb-20">
          <span className="text-sm font-bold text-primary uppercase leading-10">Our Properties</span>
          <h2 className="text-3xl md:text-5xl text-gray-500 font-semibold mb-4">{title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Featured