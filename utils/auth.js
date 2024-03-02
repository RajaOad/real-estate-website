import GoogleProvider from "next-auth/providers/google";
import { getServerSession } from "next-auth";
import connectDB from "./db";

// Exporting function to get authentication session
export const getAuthSession = async () => {
  await connectDB(); // Connect to MongoDB using your existing function
  const options = {
    database: mongoose.connection.db,
    session: {
      jwt: true,
    },
  };
  return getServerSession(options);
};

// Exporting authentication options
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
};
