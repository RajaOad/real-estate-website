import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '@/models/User';
import connectDB from '@/utils/db';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
    try {
        await connectDB();

        const { email, password } = await req.json();

        // Find the user by username
        const user = await User.findOne({ email });
        if (!user) {
            return new NextResponse(JSON.stringify({ message: 'Invalid email or password', success: false }, { status: 401 }));
        }

        // Compare the password with the hashed password stored in the database
        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) {
            return new NextResponse(JSON.stringify({ message: 'Invalid email or password', success: false }, { status: 401 }));
        }

        // If credentials are valid, generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        // Return the token to the client
        return new NextResponse(JSON.stringify({ message: 'Successfully signed in', token, success: true }), { status: 200 });
    } catch (error) {
        console.error('Error signing in:', error);
        return new NextResponse(JSON.stringify({ message: 'Internal server error', success: false }, { status: 500 }));
    }
}
