"use client";

import Link from "next/link";
import { ProfileButton } from "./profile-button";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-4">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Squada+One&family=Roboto+Condensed:wght@400;700&display=swap');
      `}</style>

    {/* Top Section */}
    <div className="container mx-auto max-w-[1280px] flex flex-col items-center py-12">
        {/* Logo */}
        <Link href="/">
          <span className="text-5xl leading-none" style={{ fontFamily: "'Squada One', sans-serif" }}>
            <span style={{ color: 'white', WebkitTextStroke: '2px black' }}>RE:</span>
            <span style={{ color: 'black' }}>BUILDING</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-base mt-12" style={{ fontFamily: 'Roboto Condensed, sans-serif' }}>
          <Link href="/" className="text-black hover:underline">
            List
          </Link>
          <Link href="/" className="text-black hover:underline">
            Details
          </Link>
          <Link href="/" className="text-black hover:underline">
            User Profile
          </Link>
          <Link href="/" className="text-black hover:underline">
            Business Application
          </Link>
          <Link href="/" className="text-black hover:underline">
            AboutUs
          </Link>
          <div className="flex items-center gap-3">
                    <ProfileButton />
                </div>
          {/* <Link href="/" className="text-black hover:underline underline">
            SignIn
          </Link>
          <Link href="/" className="text-black hover:underline underline">
            SignUp
          </Link> */}
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="w-full border-t border-gray-200 my-4" />

      {/* Bottom Section */}
      <div className="container mx-auto max-w-[1280px] flex items-center justify-between text-sm" style={{ fontFamily: 'Roboto Condensed, sans-serif' }}>
        {/* Copyright */}
        <div className="text-gray-600">
          © 2025 The Divsass
        </div>

        {/* Policy Links */}
        <div className="flex items-center gap-6">
          <Link href="/privacy-policy" className="text-black hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="text-black hover:underline">
            Terms of Service
          </Link>
          <Link href="/cookie-settings" className="text-black hover:underline">
            Cookies Settings
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;