import { NextResponse } from 'next/server';
import connectDB from '@/utils/db';
import User from '@/models/User';
import verifyAndDecodeToken from '@/utils/verify';

export const POST = async (req) => {
    try {
        await connectDB(); // Connect to the database
        
        // Extract the token from the request body
        const { token } = await req.json();

        // If token is missing, return Unauthorized response
        if (!token) {
            return new NextResponse(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
        }

        // Verify and decode the token to get the user ID
        const { userId } = await verifyAndDecodeToken(token);
        
        // Find the user by ID from the decoded token
        const user = await User.findById(userId);

        // If user not found, return Unauthorized response
        if (!user) {
            return new NextResponse(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
        }

        // Return the user information
        return new NextResponse(JSON.stringify({ user, success: true }), { status: 200 });
    } catch (error) {
        console.error('Error retrieving user information:', error);
        return new NextResponse(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
    }
};
