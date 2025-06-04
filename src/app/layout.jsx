"use client";

import { useState, useEffect } from "react";
import Header from "@/components/navbar/Header";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";
import WhatsApp from "@/components/watsapp/Watsapp";
import Preloader from "@/components/loader/Preloader";
import Script from "next/script"; // ✅ Import Script

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <html lang="en">
      <head>
        {/* ✅ Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6743441506724698"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={poppins.className}>
        {loading && <Preloader />}
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
