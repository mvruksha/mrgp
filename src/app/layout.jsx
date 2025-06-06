"use client";

import { useState, useEffect } from "react";
import Header from "@/components/navbar/Header";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";
import WhatsApp from "@/components/watsapp/Watsapp";
import Preloader from "@/components/loader/Preloader";
import Script from "next/script"; // ✅ Still used for GA

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
        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F3GXS22XZ7"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F3GXS22XZ7');
          `}
        </Script>

        {/* ✅ Google AdSense: now plain HTML for crawler detection */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6743441506724698"
          crossOrigin="anonymous"
        ></script>
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
