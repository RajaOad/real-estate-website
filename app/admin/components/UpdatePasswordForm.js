"use client"

import { useState } from 'react';
import toast from 'react-hot-toast';

const UpdatePasswordForm = () => {
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        setLoading(true);

        const token = localStorage.getItem('token')

      const response = await fetch('/api/auth/updatepassword', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({passwords, token})
      });

      const res = await response.json();

      if (res.success === true) {
        localStorage.setItem('token', res.token);

        toast.success(res.message, { position: 'top-right' });

        setPasswords({
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
          });

      } else {
        toast.error(res.message, { position: 'top-right' });
        
      }
    } catch (error) {
    //   console.error('Error updating password:', error.toString());
      toast.error('An error occurred while updating password please try again later', { position: 'top-right' });
    } finally {
        setLoading(false);
    }
  };

  return (
    <>

    {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
        <div className="inline-block text-primary h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-middle motion-reduce:animate-spin_1.5s_linear_infinite"></div>
      </div>
      )}

      <div>
    <form onSubmit={handleSubmit} className="space-y-6 md:space-y-0 md:grid grid-cols-1 md:grid-cols-2 gap-6 gap-x-16">
      <div>
        <label htmlFor="currentPassword" className="block text-lg font-semibold mb-2">Current Password</label>
        <input
          id="currentPassword"
          type="password"
          name="currentPassword"
          value={passwords.currentPassword}
          onChange={handleChange}
          className="w-full border-gray-300 border shadow-sm rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="newPassword" className="block text-lg font-semibold mb-2">New Password</label>
        <input
          id="newPassword"
          type="password"
          name="newPassword"
          value={passwords.newPassword}
          onChange={handleChange}
          className="w-full border-gray-300 rounded-md border shadow-sm px-4 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="confirmPassword" className="block text-lg font-semibold mb-2">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          value={passwords.confirmPassword}
          onChange={handleChange}
          className="w-full border-gray-300 rounded-md border shadow-sm px-4 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="col-span-2">
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md focus:outline-none focus:shadow-outline">Update Password</button>
      </div>
      {passwords.newPassword !== passwords.confirmPassword && <p className="text-red-500 text-xs">New password and confirm password do not match</p>}
    </form>
    </div>

    </>
  );
};

export default UpdatePasswordForm;
