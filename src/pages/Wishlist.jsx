import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Wishlist() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFavorites = () => {
    setLoading(true);
    axios
      .get("http://localhost:5000/courses?isFavorite=true")
      .then((res) => {
        setFavorites(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  const removeFromWishlist = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/courses/${id}`, {
        isFavorite: false,
      });
  
      setFavorites(favorites.filter(course => course.id !== id));
    } catch (err) {
      console.error("Error removing from wishlist", err);
    }
  };

  return (
    <>
      <Navbar />

      <div className="bg-[#FBF8FF] min-h-screen py-24 px-6">
        <div className="max-w-7xl mx-auto mt-10">
          <header className="text-center mb-16">
            <h1 className="text-4xl font-Satoshi bold text-[#1A162C]">
              My Wishlist 
            </h1>
            <p className="text-gray-500 mt-2 font-medium">Courses you've saved for your future</p>
          </header>

          {loading ? (
             <div className="text-center py-20 text-purple-600 font-bold">Loading your favorites...</div>
          ) : favorites.length === 0 ? (
            <div className="text-center py-20 flex flex-col items-center gap-4">
              <div className="text-6xl italic text-gray-300">" "</div>
              <p className="text-gray-400 text-lg italic">Your wishlist is looking a bit lonely.</p>
            </div>
          ) : (
   
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
              {favorites.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-[30px] overflow-hidden shadow-md border border-gray-50 group w-full max-w-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                >
                 
                  <div className={`relative h-44 bg-gradient-to-br ${course.gradient || 'from-purple-600 to-indigo-800'} overflow-hidden`}>
                  
                    <button
                      onClick={() => removeFromWishlist(course.id)}
                      className="absolute top-4 right-5 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all hover:bg-white/40 z-10"
                    >
                      <i className="fas fa-heart text-white"></i>
                    </button>

                 
                    <div className="absolute top-6 left-[-15px] w-24 h-24 border-[10px] border-white/10 rounded-full"></div>
                    <div className="absolute bottom-[-15px] right-[-10px] w-20 h-20 bg-white/10 rounded-full"></div>
                  </div>

                  
                  <div className="p-7">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-[17px] font-bold text-[#1A162C] leading-tight w-[80%] line-clamp-1">
                        {course.title}
                      </h3>
                      <div className="flex items-center gap-1">
                        <i className="fas fa-star text-yellow-400 text-[10px]"></i>
                        <span className="text-[12px] font-bold text-gray-400">{course.rating}</span>
                      </div>
                    </div>

               
                    <div className="flex flex-wrap gap-2 mb-5">
                      {course.tags?.map((tag, index) => (
                        <span key={index} className="text-[10px] font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mb-6">
                      <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest mb-1">Price</p>
                      <p className="text-lg font-extrabold text-[#8B2FF1]">{course.price}</p>
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 py-3 bg-[#8B2FF1] text-white rounded-xl font-bold text-xs hover:bg-[#670DCC] shadow-md shadow-purple-200 transition-all active:scale-95">
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