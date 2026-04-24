import { useEffect, useState, useContext } from "react"; 
import { Link, useLocation } from "react-router-dom";
import { WishlistContext } from "../../context/WishlistContext.jsx"; 

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [courses, setCourses] = useState([]);
  
  const { favorites } = useContext(WishlistContext); 
  const location = useLocation();

  useEffect(() => {
   
    const fetchData = () => {
      fetch("http://localhost:5000/courses")
        .then((res) => res.json())
        .then((data) => setCourses(data))
        .catch((err) => console.error("Error fetching data:", err));
    };

    fetchData();

    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const wishlistCount = favorites ? favorites.length : 0;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        bg-[#0B0F2F] ${scrolled ? "shadow-md py-2" : "py-4"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-12">
        
       
        <div className="flex items-center flex-shrink-0">
          <Link to="/" onClick={handleHomeClick}>
            <img
              src="/logo.png"
              alt="Edura"
              className="h-28 w-auto object-contain cursor-pointer"
            />
          </Link>
        </div>

  
        <ul className={`${isSearchOpen ? "hidden lg:flex" : "hidden md:flex"} gap-10 text-sm font-medium`}>
          <li>
            <Link 
              to="/" 
              onClick={handleHomeClick} 
              className="relative text-gray-300 hover:text-white transition-colors duration-300 py-1 group"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#8B2FF1] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#8B2FF1]"></span>
            </Link>
          </li>
          <li>
            <a 
              href="/#CourseExplorer" 
              className="relative text-gray-300 hover:text-white transition-colors duration-300 py-1 group"
            >
              Courses
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#8B2FF1] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#8B2FF1]"></span>
            </a>
          </li>
          <li>
            <a 
              href="/#about-us" 
              className="relative text-gray-300 hover:text-white transition-colors duration-300 py-1 group"
            >
              About Us
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#8B2FF1] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#8B2FF1]"></span>
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-5">
       
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
                      <span className="text-white text-[13px] font-medium">{course.title}</span>
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

         
          <Link 
            to="/wishlist" 
            className="relative p-2 hover:bg-white/10 rounded-full transition-all group"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`w-7 h-7 transition-colors ${wishlistCount > 0 ? "text-red-500 fill-current" : "text-gray-300 group-hover:text-white"}`} 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            
            {wishlistCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#0B0F2F] shadow-lg transform translate-x-1 -translate-y-1">
                {wishlistCount}
              </span>
            )}
          </Link>

         
          <div className="flex items-center gap-2">
            <Link 
              to="/login" 
              className="hidden sm:block px-4 py-2 text-gray-300 text-sm font-medium hover:text-white transition-colors"
            >
              Log in
            </Link>
            <Link 
              to="/signup" 
              className="px-6 py-2.5 rounded-full border border-purple-500 text-white text-sm font-medium hover:bg-purple-600 transition-all shadow-lg shadow-purple-500/20"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}