import { Inter } from "next/font/google";
import "./globals.css";
import SessionHandler from "@/utils/SessionHandler";
import { AuthProvider } from "@/providers/AuthProvider";
import { Toaster } from "react-hot-toast";
import SecondLayout from "./SecondLayout";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BIN SHABEERAN",
  description: "BIN SHABEERAN The Real Estate and Property consultant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
      <SessionHandler>
      <SecondLayout>
        {children}
        </SecondLayout>
        </SessionHandler>
        </AuthProvider>
        <Toaster />
        </body>
    </html>
  );
}
