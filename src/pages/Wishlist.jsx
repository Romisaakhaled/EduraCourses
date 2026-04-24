import React, { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext.jsx";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const { favorites, toggleWishlist, loading } = useContext(WishlistContext);

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFBFF]">
      <Navbar />

      <main className="flex-grow py-20 px-4 md:px-10">
        <div className="max-w-5xl mx-auto mt-10">
          
        
          <header className="mb-16 text-left relative">
            <div className="flex items-center gap-4 mb-4">
               <span className="h-[2px] w-12 bg-[#8B2FF1] shadow-[0_0_10px_rgba(139,47,241,0.4)]"></span>
               <span className="text-[10px] font-black text-[#8B2FF1] uppercase tracking-[4px]">Your Collection</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#1A162C]">
              My <span className="text-[#8B2FF1] italic underline decoration-wavy decoration-purple-100 underline-offset-8">Wishlist</span>
            </h1>
          </header>

          {loading && (
            <div className="flex flex-col items-center justify-center py-24">
              <div className="w-14 h-14 border-[5px] border-purple-50 border-t-[#8B2FF1] rounded-full animate-spin shadow-xl"></div>
            </div>
          )}

          {!loading && favorites.length === 0 && (
            <div className="relative py-20 overflow-hidden">
              {/* Glows in background */}
              <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-purple-200/30 rounded-full blur-[120px] animate-pulse"></div>
              <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-orange-100/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="bg-white/40 backdrop-blur-3xl p-16 rounded-[60px] shadow-[0_40px_100px_rgba(139,47,241,0.12)] border border-white/60 max-w-lg text-center">
                  
              
                  <div className="w-24 h-24 bg-gradient-to-tr from-[#8B2FF1] to-[#AB69FF] rounded-[32px] flex items-center justify-center shadow-[0_25px_50px_rgba(139,47,241,0.4)] mx-auto mb-10 animate-bounce" style={{ animationDuration: '3s' }}>
                    <i className="fas fa-heart text-white text-4xl drop-shadow-[0_5px_10px_rgba(0,0,0,0.2)]"></i>
                  </div>

                  <h2 className="text-3xl font-black text-[#1A162C] mb-4 tracking-tight">
                    Wishlist is <span className="text-[#8B2FF1]">Empty</span>
                  </h2>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-12 px-4">
                    Build your dream curriculum by adding courses you're interested in. We'll keep them safe for you here.
                  </p>

                  <Link 
                    to="/" 
                    className="group relative inline-flex items-center gap-4 bg-[#1A162C] text-white px-12 py-5 rounded-[22px] font-bold text-[11px] uppercase tracking-[2px] transition-all hover:bg-[#8B2FF1] hover:shadow-[0_20px_40px_rgba(139,47,241,0.3)]"
                  >
                    Discover Courses
                    <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
                  </Link>
                </div>
              </div>
            </div>
          )}

        
          {!loading && favorites.length > 0 && (
            <div className="space-y-12">
              {favorites.map((course) => (
                <div 
                  key={course.id} 
                  className="group bg-white rounded-[45px] p-6 flex flex-col md:flex-row items-center gap-10 
                             shadow-[0_15px_60px_rgba(26,22,44,0.04)] hover:shadow-[0_40px_90px_rgba(139,47,241,0.15)] 
                             transition-all duration-700 border border-transparent hover:border-purple-50/50"
                >
            
                  <div className={`relative w-full md:w-80 h-56 rounded-[35px] overflow-hidden 
                                  bg-gradient-to-br ${course.gradient || 'from-[#8B2FF1] to-[#670DCC]'} 
                                  flex-shrink-0 flex items-center justify-center 
                                  shadow-[0_20px_40px_rgba(139,47,241,0.25)] group-hover:shadow-[0_30px_60px_rgba(139,47,241,0.4)] transition-all duration-500`}>
                    
                    <div className="absolute inset-0 bg-black/5 opacity-40 group-hover:opacity-0 transition-opacity"></div>
                    <i className="fas fa-play-circle text-white text-6xl drop-shadow-[0_12px_15px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform"></i>
                    
                    <span className="absolute top-6 left-6 bg-black/20 backdrop-blur-md text-white text-[9px] font-black px-5 py-2.5 rounded-2xl uppercase tracking-[2px] border border-white/10 shadow-xl">
                       {course.category || 'Beginner'}
                    </span>
                  </div>

            
                  <div className="flex-1 w-full text-center md:text-left py-2">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                       <h3 className="text-2xl md:text-3xl font-black text-[#1A162C] group-hover:text-[#8B2FF1] transition-colors leading-tight tracking-tight">
                        {course.title}
                      </h3>
                      
                    
                      <button 
                        onClick={() => toggleWishlist(course)}
                        className="w-14 h-14 bg-white text-[#E11D48] rounded-[24px] flex items-center justify-center 
                                   shadow-[0_10px_25px_rgba(0,0,0,0.04)] hover:bg-[#E11D48] hover:text-white 
                                   hover:shadow-[0_15px_30px_rgba(225,29,72,0.35)] transition-all duration-500 group/btn"
                      >
                        <i className="fas fa-heart text-xl drop-shadow-[0_2px_5px_rgba(225,29,72,0.2)] group-hover/btn:drop-shadow-none transition-all"></i>
                      </button>
                    </div>

                
                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-8 mb-10">
                      <div className="flex items-center gap-2.5 bg-[#FBF8FF] px-4 py-2 rounded-2xl border border-purple-50 shadow-inner">
                        <i className="fas fa-star text-yellow-500 drop-shadow-sm"></i>
                        <span className="text-sm font-black text-[#1A162C]">{course.rating || "4.9"}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <i className="fas fa-users text-[#670DCC] text-xs opacity-80"></i>
                        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">75k Students</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <i className="fas fa-clock text-[#670DCC] text-xs opacity-80"></i>
                        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">40H Masterclass</span>
                      </div>
                    </div>

                
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-gray-100">
                      <div>
                        <span className="text-[10px] font-black text-gray-300 uppercase tracking-[2px] block mb-1">Total Investment</span>
                        <p className="text-4xl font-black text-[#1A162C] tracking-tighter drop-shadow-sm">{course.price}</p>
                      </div>
                      
                      <div className="flex items-center gap-5 w-full md:w-auto">
                         <Link 
                          to={`/courses/${course.id}`}
                          className="px-6 py-4 text-[#1A162C] font-black text-[11px] uppercase tracking-[2px] hover:text-[#8B2FF1] transition-all"
                        >
                          Details
                        </Link>
                        <button className="flex-1 md:flex-none px-12 py-5 bg-[#1A162C] text-white rounded-[24px] 
                                         font-black text-[11px] uppercase tracking-[2px] 
                                         shadow-[0_20px_40px_rgba(26,22,44,0.2)] hover:bg-[#8B2FF1] 
                                         hover:shadow-[0_20px_40px_rgba(139,47,241,0.3)] transition-all hover:scale-[1.03]">
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}