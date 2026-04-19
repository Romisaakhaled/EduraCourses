
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Error fetching data:", err));

    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        bg-[#0B0F2F] ${scrolled ? "shadow-md py-2" : "py-4"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <img
            src="/logo.png"
            alt="Edura"
            className="h-28 w-auto object-contain cursor-pointer"
          />
        </div>

        {/* Menu */}
        <ul className={`${isSearchOpen ? "hidden lg:flex" : "hidden md:flex"} gap-10 text-sm`}>
          <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
          <li><Link to="/courses" className="text-gray-300 hover:text-white">Courses</Link></li>
          <li><a href="#about-us" className="text-gray-300 hover:text-white">About Us</a></li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          
          {/* Search Area */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`transition-all duration-500 ease-in-out bg-[#1A1F4D] text-white text-sm rounded-full outline-none 
                ${isSearchOpen ? "w-44 md:w-72 px-4 py-2 border border-purple-500/50" : "w-0 opacity-0"}`}
            />
            
            <button 
              onClick={() => {
                setIsSearchOpen(!isSearchOpen);
                if (isSearchOpen) setSearchTerm("");
              }}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300 hover:text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 01-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Search Results Dropdown */}
            {isSearchOpen && searchTerm && (
              <div className="absolute top-14 right-0 w-64 md:w-80 bg-[#0B0F2F] border border-gray-700 rounded-2xl shadow-2xl overflow-hidden z-[100]">
                {filteredCourses.length > 0 ? (
                  filteredCourses.map((course) => (
                    <Link
                      key={course.id}
                      to={`/courses/${course.id}`}
                      className="flex items-center justify-between p-4 hover:bg-purple-900/40 transition-all border-b border-gray-800 last:border-0"
                      onClick={() => {
                        setIsSearchOpen(false);
                        setSearchTerm("");
                      }}
                    >
                      <div>
                        <span className="text-white text-[13px] font-medium">{course.title}</span>
                      </div>
                      <span className="text-white text-xs font-bold bg-purple-600/20 px-2 py-1 rounded">
                        {course.price || "Free"}
                      </span>
                    </Link>
                  ))
                ) : (
                  <div className="p-4 text-gray-400 text-xs text-center italic">No results found</div>
                )}
              </div>
            )}
          </div>

          {/* Wishlist Icon - جديد */}
          <Link to="/wishlist" className="text-gray-300 hover:text-red-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </Link>

          {/* Auth Buttons */}
          <div className="flex items-center gap-2">
            <button className="hidden sm:block px-4 py-2 text-gray-300 text-sm font-medium hover:text-white transition-colors">
              Log in
            </button>
            <button className="px-6 py-2.5 rounded-full border border-purple-500 text-white text-sm font-medium hover:bg-purple-600 transition-all">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
