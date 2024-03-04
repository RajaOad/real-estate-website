"use client"

import { useRouter } from 'next/navigation';
// AuthProvider.js

import React, { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [mounted, setMounted] = useState(false)
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
    const router = useRouter();
    
    const getTokenFromLocalStorage = () => {
        if (typeof window !== "undefined") {
          return localStorage.getItem("token");
        }
        return null;
      };
      

      const token = getTokenFromLocalStorage();
      
    const fetchUserInfo = async () => {
        try {
            // Retrieve the token from local storage
    
            if (!token) {
                // Token is missing, handle accordingly (e.g., redirect to login)
                setLoading(false);
                return;
            }
    
            const response = await fetch('/api/userinfo', {
                method: 'POST', // Use POST method
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token }), // Send token in the request body
            });
    
            
            const res = await response.json();
            if (res.success === true) {
                setUser(res.user);
                setAuthenticated(true);
            } else {
                // Handle non-okay responses (e.g., display error message)
                setUser(null);
            }
    
            setLoading(false);
        } catch (error) {
            // console.error('Error fetching user information:', JSON.stringify(error));
            // Handle network errors or other exceptions
            setLoading(false);
        }
    };

    useEffect(() => {

        fetchUserInfo();
        setMounted(true)

    }, [authenticated, token]);



    const signOut = async () => {
        try {
    
            localStorage.removeItem('token');
            setUser(null); // Clear user state
            setAuthenticated(false)
            router.push('/signin'); // Redirect to login page after successful logout
            // Display success toast message
            toast.success('Successfully signed out', {
                position: "top-right",
                
            });
        } catch (error) {
            // Display error toast message
            toast.error('Error signing out. Please try again later.', {
                position: "top-right",
                
            });
        }
    };

    
    if(mounted) {

        return (
            <AuthContext.Provider value={{ user, loading, authenticated, setAuthenticated, signOut, fetchUserInfo }}>
            {children}
        </AuthContext.Provider>
    );
}
};

export const useAuth = () => useContext(AuthContext);
