import React, { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext.jsx";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const { favorites, toggleWishlist, loading, error } = useContext(WishlistContext);

  return (
    <>
      <Navbar />
      <div className="bg-[#FBF8FF] min-h-screen py-16 px-6">
        <div className="max-w-6xl mx-auto mt-10">
          
          {/* Header */}
          <header className="text-center mb-10">
            <div className="inline-block px-3 py-1 mb-3 rounded-full bg-purple-50 border border-purple-100">
               <span className="text-[9px] font-black text-purple-600 uppercase tracking-[2px]">Saved Courses</span>
            </div>
            <h1 className="text-3xl font-black text-[#1A162C] mb-2 tracking-tight">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B2FF1] to-[#670DCC] italic">Wishlist</span>
            </h1>
          </header>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-10 h-10 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mb-4"></div>
              <p className="text-purple-600 font-bold animate-pulse text-sm">Loading...</p>
            </div>
          ) : favorites.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-[35px] shadow-sm border border-gray-100 max-w-xl mx-auto border-dashed">
              <div className="text-6xl mb-4 opacity-20">💖</div>
              <h2 className="text-xl font-bold text-[#1A162C] mb-3">Your wishlist is empty</h2>
              <Link to="/" className="bg-[#1A162C] text-white px-8 py-3 rounded-full font-bold text-xs shadow-xl hover:bg-[#8B2FF1] transition-all inline-block">
                Browse Courses
              </Link>
            </div>
          ) : (
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((course) => (
                <div 
                  key={course.id} 
                  className="bg-white rounded-[30px] overflow-hidden shadow-lg shadow-purple-100/20 border border-gray-50 group transition-all duration-300 hover:translate-y-[-5px]"
                >
                 
                  <div className={`relative h-44 bg-gradient-to-br ${course.gradient || 'from-[#8B2FF1] to-[#670DCC]'} p-5 overflow-hidden`}>
                    
                    <button 
                      onClick={() => toggleWishlist(course)}
                      className="absolute top-4 right-4 w-9 h-9 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-all z-20 shadow-md"
                    >
                      <i className="fas fa-heart text-sm"></i>
                    </button>

                    <div className="absolute top-6 left-5 w-16 h-16 border-[3px] border-white/10 rounded-full"></div>
                    <div className="absolute top-[-25px] right-[-15px] w-36 h-36 border-[20px] border-white/5 rounded-full"></div>
                    <div className="absolute bottom-[-10px] right-2 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                  </div>

               
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold text-[#1A162C] leading-tight line-clamp-1 group-hover:text-purple-600 transition-colors">
                        {course.title}
                      </h3>
                      <div className="flex items-center gap-1">
                        <i className="fas fa-star text-yellow-400 text-[10px]"></i>
                        <span className="text-[11px] font-bold text-gray-300">{course.rating || "4.9"}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                      <span className="flex items-center gap-1 text-[8px] font-bold text-gray-400 uppercase tracking-wide">
                        <i className="fas fa-book-open text-purple-600"></i> Beginner
                      </span>
                      <span className="flex items-center gap-1 text-[8px] font-bold text-gray-400 uppercase tracking-wide">
                        <i className="fas fa-users text-purple-600"></i> 75K
                      </span>
                      <span className="flex items-center gap-1 text-[8px] font-bold text-gray-400 uppercase tracking-wide">
                        <i className="fas fa-clock text-purple-600"></i> 40H
                      </span>
                    </div>

                    <div className="mb-6">
                      <p className="text-[8px] font-black text-gray-300 uppercase mb-0.5 tracking-tighter">Price</p>
                      <p className="text-xl font-black text-[#8B2FF1]">{course.price}</p>
                    </div>

                    <div className="flex gap-3">
                      <Link 
                        to={`/courses/${course.id}`}
                        className="flex-1 py-3 border-2 border-purple-600 text-purple-600 rounded-xl font-bold text-[9px] uppercase tracking-widest text-center hover:bg-purple-50 transition-all"
                      >
                        Details
                      </Link>
                      <button className="flex-1 py-3 bg-gradient-to-r from-[#8B2FF1] to-[#670DCC] text-white rounded-xl font-bold text-[9px] uppercase tracking-widest shadow-md hover:brightness-110 transition-all">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}