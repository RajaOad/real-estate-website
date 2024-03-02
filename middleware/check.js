import User from '@/models/User';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

const secretKey = process.env.JWT_SECRET; // Use environment variable for secret key

export async function admincheck(request) {
  const { token } = await request.json();
  console.log(token)

  try {
    const decoded = jwt.verify(token, secretKey, { algorithms: ['HS256'] });
    const userId = decoded.userId;

    // Fetch user data from MongoDB using Mongoose
    const user = await User.findById(userId);
    console.log(user)

    if (!user || !user.admin) {
      // User is not found or is not an admin
       return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // User is an admin, proceed with the request
    return null;
  } catch (error) {
    console.error('JWT verification failed:', error);
     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};
