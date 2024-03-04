import mongoose from 'mongoose';

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    // console.log('MongoDB connected successfully');
  } catch (error) {
    // console.error('Error connecting to MongoDB:', error);
    // Optionally, handle the error or throw it to be caught elsewhere
    // throw new Error('Database connection failed');
  }
}

export default connectDB;
