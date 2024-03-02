import Property from '@/models/Property';
import User from '@/models/User';
import { NextResponse } from 'next/server';
import verifyAndDecodeToken from '@/utils/verify';

// Delete property route
export const DELETE = async (req, { params }) => {
  try {
    const { id } = params;

        const { token } = await req.json();
    
    // Verify token and check admin status
    const { isAdmin } = await verifyAndDecodeToken(token);

    // If user is not an admin, return unauthorized response
    if (!isAdmin) {
      return new NextResponse(JSON.stringify({ success: false, msg: 'Unauthorized' }), { status: 401 });
    }

    // Find the property to be deleted
    const property = await Property.findById(id);

    // If property does not exist, return not found response
    if (!property) {
      return new NextResponse(JSON.stringify({ success: false, msg: 'Property not found' }), { status: 404 });
    }

    // Fetch the user who posted the property
    const user = await User.findById(property.userId);    

    // Remove the property ID from the user's properties array
    user.properties = user.properties.filter(propertyId => String(propertyId) !== String(id));

    // Save the updated user document
    await user.save();

    // Delete the property from the database
    await Property.findByIdAndDelete(id);

    // Return success response
    return new NextResponse(JSON.stringify({ success: true, msg: 'Property deleted successfully' }), { status: 200 });
  } catch (error) {
    // Handle errors
    console.error('Error deleting property:', error);
    return new NextResponse(JSON.stringify({ success: false, msg: 'Internal server error' }), { status: 500 });
  }
};
