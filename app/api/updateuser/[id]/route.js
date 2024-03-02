import User from '@/models/User';
import { NextResponse } from 'next/server';
import verifyAndDecodeToken from '@/utils/verify';

export const PUT = async (req, { params }) => {
  try {
    
    const { id } = params;

        const { token, ...updates } = await req.json();

    // Verify token and check admin status
    const { isAdmin } = await verifyAndDecodeToken(token);

    // If user is not an admin, return unauthorized response
    if (!isAdmin) {
      return new NextResponse(JSON.stringify({ success: false, msg: 'Unauthorized' }), { status: 401 });
    }

    // Update the user in the database
    await User.findByIdAndUpdate(id, updates);

    // Return success response
    return new NextResponse(JSON.stringify({ success: true, msg: 'User updated successfully' }), { status: 200 });
  } catch (error) {
    // Handle errors
    console.error('Error updating user:', error);
    return new NextResponse(JSON.stringify({ success: false, msg: 'Internal server error' }), { status: 500 });
  }
};
