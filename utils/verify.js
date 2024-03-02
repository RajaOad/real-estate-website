import jwt from 'jsonwebtoken';
import User from '@/models/User';

async function verifyAndDecodeToken(token) {
  try {
    // Verify the token using the secret key
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    
    // Fetch user from the database using the user ID
    const user = await User.findById(decoded.userId);

    // If user not found, throw an error
    if (!user) {
      throw new Error('User not found');
    }

    // Return both user ID and admin status
    return {
      userId: decoded.userId,
      isAdmin: user.admin
    };
  } catch (error) {
    // If verification fails or user not found, handle the error
    console.error('Error verifying token or fetching user:', error);
    throw error;
  }
}

export default verifyAndDecodeToken;
