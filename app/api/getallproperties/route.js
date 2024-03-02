import Property from '@/models/Property';
import { NextResponse } from 'next/server';

export const GET = async (req) => {
  try {
    // Fetch all properties from the database
    const properties = await Property.find().populate('userId');

    // Check if properties array is empty
    if (properties.length === 0) {
      return new NextResponse(JSON.stringify({ success: false, msg: 'No properties available' }), { status: 404 });
    }

    // Return success response with the properties
    return new NextResponse(JSON.stringify({ success: true, properties }), { status: 200 });
  } catch (error) {
    // Handle errors
    console.error('Error fetching properties:', error);
    return new NextResponse(JSON.stringify({ success: false, msg: 'Internal server error' }), { status: 500 });
  }
};
 