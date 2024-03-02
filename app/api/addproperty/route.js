import Property from '@/models/Property';
import User from '@/models/User';
import connectDB from '@/utils/db';
import verifyAndDecodeToken from '@/utils/verify';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
  try {
    // Extract data from the request body
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
      images,
      featured,
      address,
      token
    } = await req.json();

    // Verify token and check admin status
    const { userId, isAdmin } = await verifyAndDecodeToken(token);

    // If user is not admin, return unauthorized response
    if (!isAdmin) {
      return new NextResponse(JSON.stringify({ success: false, msg: 'Unauthorized' }), { status: 401 });
    }

    // Connect to the database
    await connectDB();

    // Create a new property instance
    const newProperty = new Property({
      title,
      description,
      price,
      location,
      images,
      propertyDetails: { rooms, baths, areaSqft },
      yearBuilt,
      category,
      listingType,
      status,
      mapLocation,
      featured,
      address,
      userId
    });

    // Save the property to the database
    await newProperty.save();

     // Retrieve the user document based on userId
     const user = await User.findById(userId);

     // Update the properties array of the user document
     user.properties.push(newProperty._id);
 
     // Save the updated user document
     await user.save();

    // Return success response
    return new NextResponse(JSON.stringify({ success: true, msg: 'Property added successfully' }), { status: 201 });
  } catch (error) {
    // Handle errors
    console.error('Error adding property:', error);
    return new NextResponse(JSON.stringify({ success: false, msg: 'Internal server error' }), { status: 500 });
  }
};
