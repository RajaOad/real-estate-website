"use client"

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LogoutButton = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // Attempt to sign out the user
      await signOut({ redirect: false, callbackUrl: '/signin' });
      
      // If sign out is successful, display a success message
      toast.success('Successfully logged out', {
        position: 'top-right',
        duration: 5000 // Milliseconds
      });
  
      // Redirect the user to the login page upon successful logout
      router.push('/signin');
    } catch (error) {
      // If an error occurs during logout, display an error message
      console.error('Logout failed:', error);
  
      toast.error('Logout failed. Please try again.', {
        position: 'top-right',
        duration: 5000 // Milliseconds
      });
    }
  };

  return (
    <>
      {session ? (
        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              onClick={toggleDropdown}
              className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-800 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              id="user-menu"
              aria-expanded="true"
              aria-haspopup="true"
            >
              {/* You can replace the user icon with your own */}
              <svg
                className="h-5 w-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-10a1 1 0 00-1 1v1a1 1 0 002 0V1a1 1 0 00-1-1zm1 18v-1a4 4 0 00-3.87-3.995L7 15a5 5 0 1110 0l-.13.005A4 4 0 0011 19z"
                  clipRule="evenodd"
                />
              </svg>
              {session.user.name}
              {/* You can change 'name' to any property you want to display */}
            </button>
          </div>

          {showDropdown ? (
            <div
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu"
            >
              <div className="py-1" role="none">
                <button
                  type="button"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        // <div>
        //   <button
        //     onClick={() => router.push('/signin')}
        //     className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 mr-2"
        //   >
        //     Sign In
        //   </button>
        //   <button
        //     onClick={() => router.push('/signup')}
        //     className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
        //   >
        //     Sign Up
        //   </button>
        // </div>
        null
      )}
    </>
  );
};

export default LogoutButton;
