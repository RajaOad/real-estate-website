import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundMusic from "@/components/backgroundMusic/BackgroundMusic";
import SessionHandler from "@/utils/SessionHandler";
import { AuthProvider } from "@/providers/AuthProvider";
import { Toaster } from "react-hot-toast";
import SecondLayout from "./SecondLayout";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BAITUL SHABEERAN",
  description: "BAITUL SHABEERAN A Real Estate and Construction Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
      <SessionHandler>
      {/* <BackgroundMusic src="/music/music.mpeg" volume={0.1} /> */}
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
