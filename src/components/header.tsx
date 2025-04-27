"use client";

import Link from "next/link";
import { ProfileButton } from "./profile-button";
// import { SearchInput } from "@/components/search-input";
// import { ProfileButton } from "./profile-button";

export const Header = () => {
  return (
    <header className="border-b">
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Squada+One&family=Roboto+Condensed:wght@400;700&display=swap');
      `}</style>
        <div className="container mx-auto max-w-[1280px] flex flex-col items-center py-2">
        <div className="flex justify-between items-center w-full">
           
            <Link href="/">
            <span className="text-5xl leading-none" style={{ fontFamily: "'Squada One', sans-serif" }}>
                <span style={{ color: 'white', WebkitTextStroke: '2px black' }}>RE:</span>
                <span style={{ color: 'black' }}>BUILDING</span>
            </span>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-6 text-base" style={{ fontFamily: 'Roboto Condensed, sans-serif' }}>
            <Link href="/" className="text-black hover:underline">
                List
            </Link>
            <Link href="/" className="text-black hover:underline">
                Details
            </Link>
            
            {/* <Link href="/" className="text-black hover:underline">
                User Profile
            </Link> */}
            <Link href="/" className="text-black hover:underline">
                Business Application
            </Link>
            <Link href="/aboutus" className="text-black hover:underline">
                AboutUs
            </Link>
            <div className="flex items-center gap-3">
                    <ProfileButton />
            </div>
            {/* <Link href="/" className="text-black hover:underline">
                SignIn
            </Link>
            <Link href="/" className="text-black hover:underline">
                SignUp
            </Link> */}
            </div>
        </div>
        </div>
    </header>
  );
};

export default Header;