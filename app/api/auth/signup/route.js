import { hash } from 'bcryptjs';
import User from '@/models/User';
import jwt from 'jsonwebtoken';
import connectDB from '@/utils/db';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
    try {
        await connectDB();

        const { username, email, password } = await req.json();

        // Check if the username or email already exists in the database
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return new NextResponse(JSON.stringify({ message: 'Email is already registered', success: false }, { status: 400 }));
        }

        // Hash the password before saving it
        const hashedPassword = await hash(password, 10);

        // Create a new user record
        const newUser = new User({
            email,
            username,
            password: hashedPassword,
        });

        // Save the new user to the database
        await newUser.save();

        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        // Return success message
        return new NextResponse(JSON.stringify({ message: 'User registered successfully', token, success: true }, { status: 201 }));
    } catch (error) {
        console.error('Error registering user:', error);
        return new NextResponse(JSON.stringify({ message: 'Internal server error', success: false }, { status: 500 }));
    }
}
