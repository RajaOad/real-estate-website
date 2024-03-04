import Property from '@/models/Property';
import { NextResponse } from 'next/server';

export const GET = async (req) => {
  try {
    // Fetch featured properties where featured is true
    const featuredProperties = await Property.find({ featured: true }).populate('userId');;

    // If no featured properties found, return a response indicating so
    if (featuredProperties.length === 0) {
      return new NextResponse(JSON.stringify({ success: false, msg: 'No featured properties' }), { status: 404 });
    }

    // Return success response with the featured properties
    return new NextResponse(JSON.stringify({ success: true, properties: featuredProperties }), { status: 200 });
  } catch (error) {
    // Handle errors
    console.error('Error fetching featured properties:', error);
    return new NextResponse(JSON.stringify({ success: false, msg: 'Internal server error' }), { status: 500 });
  }
};
