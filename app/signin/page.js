"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
// import { signIn } from 'next-auth/react';
import { useAuth } from '@/providers/AuthProvider';
import toast from 'react-hot-toast';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { authenticated, setAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
if(authenticated) {
router.push('/')
}
  }, [authenticated])
  

  const handleSignInWithEmailPassword = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch('/api/auth/signin', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.success === true) {
          localStorage.setItem('token', data.token);
          setAuthenticated(true);
          router.push('/');
          // Display success toast message
          toast.success(data.message, {
              position: "top-right",
              
          });
      } else {
          console.error('Sign-in failed');
          // Display error toast message
          toast.error(data.message, {
              position: "top-right",
              
          });
      }
  } catch (error) {
      console.error('Error signing in:', error);

  } finally {
    setLoading(false);
  }
  
  };

//   const handleSignInWithGoogle = async () => {
//     try {
//         const result = await signIn('google', { callbackUrl: '/' });
//         if (!result.error) {
//             // Google sign-in successful, display success toast message
//             toast.success('Successfully signed in with Google', {
//                 position: "top-right",
                
//             });
//         } else {
//             // Google sign-in failed, display error toast message
//             toast.error('Google sign-in failed. Please try again later.', {
//                 position: "top-right",
                
//             });
//         }
//     } catch (error) {
//         console.error('Error during Google sign-in:', error);
//         // Display error toast message for unexpected errors
//         // toast.error('An unexpected error occurred. Please try again later.', {
//         //     position: "top-right",
//         //     
//         // });
//     }
// };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('images/h4.jpg')"}}>

{loading && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
        <div className="inline-block text-primary h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-middle motion-reduce:animate-spin_1.5s_linear_infinite"></div>
      </div>
      )}

    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="max-w-md mx-4 md:mx-0 w-full mt-24 bg-white bg-opacity-40 backdrop-blur-lg rounded-lg shadow-lg p-8">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in</h2>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSignInWithEmailPassword}>
        <input type="hidden" name="remember" value="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input id="email" name="email" type="email" autoComplete="email" required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input id="password" name="password" type="password" autoComplete="current-password" required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>

        <div>
          <button type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Sign in
          </button>
        </div>
        {/* <div>
          <button type="button" onClick={handleSignInWithGoogle}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            Sign in with Google
          </button>
        </div> */}
      </form>
    </div>
  </div>
  );
};

export default SignIn;
