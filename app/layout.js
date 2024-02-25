import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import BackgroundMusic from "@/components/backgroundMusic/BackgroundMusic";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BAITUL SHABEERAN Real Estate Agency",
  description: "BAITUL SHABEERAN Real Estate Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <BackgroundMusic src="/music/music.mpeg" volume={0.1} />
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
