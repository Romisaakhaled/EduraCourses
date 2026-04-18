import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        bg-[#0B0F2F] ${scrolled ? "shadow-md" : ""}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <img
            src="/logo.png"
            alt="Edura"
            className="h-36 w-auto object-contain cursor-pointer"
          />
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-10 text-sm">
          <li className="relative group text-gray-300">
            <Link to="/">Home</Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group text-gray-300">
            <Link to="/courses">Courses</Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group text-gray-300">
            <Link to="/about">About Us</Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          
        
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 cursor-pointer text-gray-300 hover:text-white transition-colors"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 01-14 0 7 7 0 0114 0z"
            />
          </svg>

        
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 cursor-pointer text-gray-300 hover:text-white transition-colors"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>

          {/* Log in Button */}
          <button className="px-6 py-2.5 rounded-full text-white text-sm font-medium 
                           hover:bg-purple-600 hover:border-purple-600 transition-all duration-300">
            Log in
          </button>

          {/* Sign Up Button */}
          <button className="px-6 py-2.5 rounded-full border border-purple-500 text-white text-sm font-medium 
                           hover:bg-purple-700 transition-all duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}