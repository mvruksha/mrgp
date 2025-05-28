"use client";

import { useState, useEffect } from "react";
import Header from "@/components/navbar/Header";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";
import WhatsApp from "@/components/watsapp/Watsapp";
import Preloader from "@/components/loader/Preloader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading completion after 3 seconds
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <html lang="en">
      <body className={poppins.className}>
        {loading && <Preloader />} {/* Show loader if loading state is true */}
        <div className={loading ? "hidden" : "visible"}>
          <Header />
          {children}
          <WhatsApp />
          <Footer />
        </div>
      </body>
    </html>
  );
}
