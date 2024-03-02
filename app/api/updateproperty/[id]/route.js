import Property from '@/models/Property';
import { NextResponse } from 'next/server';
import verifyAndDecodeToken from '@/utils/verify';

export const PUT = async (req, { params }) => {
  try {

    const { id } = params;

    const {
      title,
      description,
      price,
      location,
      rooms,
      baths,
      areaSqft,
      yearBuilt,
      category,
      listingType,
      status,
      mapLocation,
      featured,
      address,
      token
    } = await req.json();    
    // Verify token and check admin status
    const { isAdmin } = await verifyAndDecodeToken(token);

    // If user is not an admin, return unauthorized response
    if (!isAdmin) {
      return new NextResponse(JSON.stringify({ success: false, msg: 'Unauthorized' }), { status: 401 });
    }

   const updatedproperty = {
      title,
      description,
      price,
      location,
      propertyDetails: { rooms, baths, areaSqft },
      yearBuilt,
      category,
      listingType,
      status,
      mapLocation,
      featured,
      address,
    }
 
    // Update the property in the database
    await Property.findByIdAndUpdate(id, updatedproperty);

    // Return success response
    return new NextResponse(JSON.stringify({ success: true, msg: 'Property updated successfully' }), { status: 200 });
  } catch (error) {
    // Handle errors
    console.error('Error updating property:', error);
    return new NextResponse(JSON.stringify({ success: false, msg: 'Internal server error' }), { status: 500 });
  }
};
