import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

const secretKey = 'your-secret-key'; // Change this to your actual secret key

export function authcheck(request) {
  // Extract the token from the request body
  const { token } = request.body;

  // Verify the token
  try {
    const decoded = jwt.verify(token, secretKey);
    
    // If verification successful, you can proceed with the request
    // For example, you can pass the decoded token to the next handler
    return NextResponse.next({ token: decoded });
  } catch (error) {
    // If token verification fails, return an unauthorized response
    return new NextResponse.Unauthorized();
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};
