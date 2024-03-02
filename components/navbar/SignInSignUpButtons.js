"use client"

import { useAuth } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";

const SignInSignUpButtons = () => {
    const { authenticated } = useAuth();
    const router = useRouter();

    return !authenticated ? (
        <div>
            <button
                onClick={() => router.push('/signin')}
                className="inline-flex items-center px-4 py-2 border border-transparent text-xs md:text-base font-medium text-white bg-[#001F5B] hover:bg-blue-700 transition duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 mr-2"
            >
                Sign In
            </button>
            <button
                onClick={() => router.push('/signup')}
                className="inline-flex items-center px-4 py-2 border border-transparent text-xs md:text-base font-medium text-white bg-[#001F5B] hover:bg-blue-700 transition duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
            >
                Sign Up
            </button>
        </div>
    ) : null;
};

export default SignInSignUpButtons;
