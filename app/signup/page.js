"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useNavigation
import { signIn } from 'next-auth/react';
import { useAuth } from '@/providers/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { authenticated, setAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
if(authenticated) {
router.push('/')
}
  }, [authenticated])

const handleSignUpEmailPassword = async (e) => {
  e.preventDefault();
  try {
    setLoading(true)
      const response = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, username, password }),
      });

      const res = await response.json();
      if (res.success === true) {
          // Show success message
          localStorage.setItem('token', res.token);
          setAuthenticated(true);
          toast.success(res.message, {
              position: "top-right",
          });
          setUsername('')
          setEmail('')
          setPassword('')
          setConfirmPassword('')
          router.push('/');
          // Automatically sign in after successful sign-up
          // await signIn('email', { email, password, callbackUrl: '/' });
      } else {
          // Show error message
          toast.error(res.message, {
              position: "top-right",
              
          });
      }
  } catch (error) {
    toast.error('An error occurred while signing up please try again later', {
      position: "top-right",
      
  });
  } finally {
    setLoading(false);
  }
};

// const handleGoogleSignUp = async () => {
//   try {
//       const result = await signIn('google', { callbackUrl: '/' });
//       if (!result.error) {
//           // Google sign-up successful, display success toast message
//           toast.success('Successfully signed up with Google', {
//               position: "top-right",
              
//           });
//       } else {
//           // Google sign-up failed, display error toast message
//           toast.error('Google sign-up failed. Please try again later.', {
//               position: "top-right",
              
//           });
//       }
//   } catch (error) {
//       console.error('Error during Google sign-up:', error);
//       // Display error toast message for unexpected errors
//       toast.error('An unexpected error occurred. Please try again later.', {
//           position: "top-right",
          
//       });
//   }
// };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('images/h3.jpg')"}}>
  {loading && (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
      <div className="inline-block text-primary h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-middle motion-reduce:animate-spin_1.5s_linear_infinite"></div>
    </div>
  )}
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="max-w-md w-full mx-4 md:mx-0 mt-24 bg-white bg-opacity-40 backdrop-blur-lg rounded-lg shadow-lg p-8">
    <div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up</h2>
    </div>
    <form className="mt-8 space-y-6" onSubmit={handleSignUpEmailPassword}>
      <input type="hidden" name="remember" value="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="email" className="sr-only">Email address</label>
          <input id="email" name="email" type="email" autoComplete="email" required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="username" className="sr-only">Username</label>
          <input id="username" name="username" type="text" autoComplete="username" required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">Password</label>
          <input id="password" name="password" type="password" autoComplete="new-password" required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
          <input id="confirmPassword" name="confirmPassword" type="password" autoComplete="new-password" required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
      </div>
      {password !== confirmPassword && <p className="text-red-500 text-sm italic">Passwords do not match.</p>}
      <div>
        <button type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#001F5B] hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Sign up
        </button>
      </div>
    </form>
  </div>
</div>

  );
};

export default SignUp;
