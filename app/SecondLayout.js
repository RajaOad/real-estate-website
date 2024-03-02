"use client"

import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import { usePathname } from 'next/navigation';
import React from 'react'
import AdminNavbar from './admin/components/AdminNavbar';
import Sidebar from './admin/components/Sidebar';

const SecondLayout = ({ children }) => {
    const pathname = usePathname();
    const isAdminPath = pathname.startsWith("/admin");
    return (
        <>
            {!isAdminPath && <Navbar />}
            {isAdminPath && <AdminNavbar />}
            {isAdminPath && <Sidebar />}
            {children}
            <Footer />
        </>
    )
}

export default SecondLayout