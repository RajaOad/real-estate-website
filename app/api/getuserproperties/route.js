import Property from '@/models/Property';
import { NextResponse } from 'next/server';
import verifyAndDecodeToken from '@/utils/verify';

export const POST = async (req) => {
  try {
    // Extract the token from the request headers
    const { token } = await req.json();
    
    // Verify token and check admin status
    const { userId, isAdmin } = await verifyAndDecodeToken(token);

    // If user is not an admin, return unauthorized response
    if (!isAdmin) {
      return new NextResponse(JSON.stringify({ success: false, msg: 'Unauthorized' }), { status: 401 });
    }

    // Fetch properties associated with the user's ID
    const properties = await Property.find({ userId }); 

    if (properties.length === 0) {
      return new NextResponse(JSON.stringify({ success: false, msg: 'No properties available' }), { status: 404 });
    }

    // Return success response with the properties
    return new NextResponse(JSON.stringify({ success: true, properties }), { status: 200 });
  } catch (error) {
    // Handle errors
    console.error('Error fetching user properties:', error);
    return new NextResponse(JSON.stringify({ success: false, msg: 'Internal server error' }), { status: 500 });
  }
};
