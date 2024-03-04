import { compare, hash } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '@/models/User';
import connectDB from '@/utils/db';
import { NextResponse } from 'next/server';
import verifyAndDecodeToken from '@/utils/verify';

export const PUT = async (req) => {
  try {
    await connectDB();

    const { passwords, token } = await req.json();
    const { currentPassword, newPassword } = passwords;

    const { userId, isAdmin } = await verifyAndDecodeToken(token);

    if (!isAdmin) {
      return new NextResponse(JSON.stringify({ success: false, message: 'Unauthorized' }), { status: 401 });
    }

    const user = await User.findById(userId);
    if (!user) {
      return new NextResponse(JSON.stringify({ message: 'User not found', success: false }, { status: 404 }));
    }

    // Compare the current password with the hashed password stored in the database
    const passwordMatch = await compare(currentPassword, user.password);
    if (!passwordMatch) {
      return new NextResponse(JSON.stringify({ message: 'Current password is incorrect', success: false }, { status: 401 }));
    }

    // Hash the new password
    const hashedNewPassword = await hash(newPassword, 10);

    // Update the user's password
    user.password = hashedNewPassword;
    await user.save();

    const newToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    // Return success response with the new token
    return new NextResponse(JSON.stringify({ message: 'Password updated successfully', token: newToken, success: true }), { status: 200 });
  } catch (error) {
    console.error('Error updating password:', error);
    return new NextResponse(JSON.stringify({ message: 'Internal server error', success: false }, { status: 500 }));
  }
};
