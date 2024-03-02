import connectDB from '@/utils/db';
import User from '@/models/User';

export const GET = async () => {
  try {

    await connectDB();

    const agents = await User.find({ admin: true });

    if (agents.length === 0) {
      return new NextResponse(JSON.stringify({ success: true, message: 'No agents found' }), { status: 200 });
    }

    return new NextResponse(JSON.stringify({ success: true, agents }), { status: 200 });
  } catch (error) {
    
    console.error('Error fetching admin users:', error);
    return new NextResponse(JSON.stringify({ success: false, message: 'Internal server error' }), { status: 500 });
  }
};
