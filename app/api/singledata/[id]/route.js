import Property from '@/models/Property';
import { NextResponse } from 'next/server';

export const GET = async (req, { params }) => {
  try {
    // Extract property ID from the request parameters
    const { id } = params;

    // Fetch the property by ID from the database
    const property = await Property.findById(id);

    // If property not found, return a response with 404 status
    if (!property) {
      return new NextResponse(JSON.stringify({ success: false, msg: 'Property not found' }), { status: 404 });
    }

    // Return success response with the property
    return new NextResponse(JSON.stringify({ success: true, property }), { status: 200 });
  } catch (error) {
    // Handle errors
    console.error('Error fetching property:', error);
    return new NextResponse(JSON.stringify({ success: false, msg: 'Internal server error' }), { status: 500 });
  }
};
