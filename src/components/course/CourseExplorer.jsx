import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 

import { WishlistContext } from "../../context/WishlistContext.jsx";

export default function CourseExplorer() {
  const [courses, setCourses] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { favorites, toggleWishlist } = useContext(WishlistContext);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = () => {
    setLoading(true);
    setError(null);   
    axios.get('http://localhost:5000/courses')
      .then(res => {
        setCourses(res.data);
        setLoading(false); 
      })
      .catch(err => {
        console.error("Error fetching courses:", err);
        setError("Failed to load courses. Please check your server."); // تحديد حالة الخطأ
        setLoading(false);
      });
  };

  const filteredCards = courses.filter(card => 
    activeFilter === 'all' || card.tags?.some(tag => tag.toLowerCase().includes(activeFilter.toLowerCase()))
  );

  return (
    <div id="CourseExplorer" className="bg-[#FBF8FF] min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto mt-10">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-black text-[#1A162C]">Our Popular Courses</h1>
        </header>

        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {['all', 'design', 'development', 'marketing', 'data science'].map(f => (
            <button 
              key={f} 
              onClick={() => setActiveFilter(f)}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === f ? 'bg-purple-600 text-white shadow-lg' : 'bg-white text-gray-400 border border-gray-100 hover:bg-purple-50'
              }`}
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>

       
        {loading && (
          <div className="text-center py-20">
             <div className="inline-block w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
             <p className="mt-4 text-purple-600 font-bold">Loading Courses...</p>
          </div>
        )}

        {!loading && error && (
          <div className="text-center py-20 bg-red-50 rounded-3xl border border-red-100">
            <p className="text-red-500 font-bold">{error}</p>
            <button onClick={fetchCourses} className="mt-4 px-6 py-2 bg-red-500 text-white rounded-full text-xs font-bold">Retry</button>
          </div>
        )}

  
        {!loading && !error && filteredCards.length === 0 && (
          <div className="text-center py-20">
            <i className="fas fa-search text-gray-200 text-5xl mb-4"></i>
            <p className="text-gray-400 font-bold">No courses found in this category.</p>
          </div>
        )}

    
        {!loading && !error && filteredCards.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCards.map(card => {
              const isFav = favorites.some(fav => fav.id === card.id);
              return (
                <CourseCard 
                  key={card.id} 
                  card={{...card, isFavorite: isFav}} 
                  onToggleFavorite={() => toggleWishlist(card)} 
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}


function CourseCard({ card, onToggleFavorite }) {
  return (
    <div className="bg-white rounded-[30px] overflow-hidden shadow-md border border-gray-50 group max-w-sm transition-transform hover:scale-[1.02]">
      <div className={`relative h-40 bg-gradient-to-br ${card.gradient || 'from-[#8B2FF1] to-[#670DCC]'} overflow-hidden`}>
        <button 
          onClick={onToggleFavorite}
          className="absolute top-4 right-5 w-9 h-9 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all hover:bg-white/40 z-10"
        >
          <i className={`${card.isFavorite ? 'fas fa-heart text-red-500' : 'far fa-heart'} text-lg`}></i>
        </button>
        <div className="absolute top-6 left-[-15px] w-24 h-24 border-[10px] border-white/10 rounded-full"></div>
        <div className="absolute bottom-[-15px] right-[-10px] w-20 h-20 bg-white/10 rounded-full"></div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-base font-bold text-[#1A162C] leading-tight w-[85%] line-clamp-1">{card.title}</h3>
          <div className="flex items-center gap-1">
            <i className="fas fa-star text-yellow-400 text-[10px]"></i>
            <span className="text-xs font-bold text-gray-400">{card.rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-5 text-[9px] font-bold text-gray-400 uppercase tracking-wider">
          <span className="flex items-center gap-1"><i className="fas fa-book-open text-[#8B2FF1]"></i> BEGINNER</span>
          <span className="flex items-center gap-1"><i className="fas fa-users text-[#8B2FF1]"></i> 75K</span>
          <span className="flex items-center gap-1"><i className="fas fa-clock text-[#8B2FF1]"></i> 40H</span>
        </div>

        <div className="mb-6">
          <p className="text-[8px] font-black text-gray-300 uppercase tracking-[1px] mb-1">Price</p>
          <p className="text-sm font-extrabold text-[#8B2FF1]">{card.price}</p>
        </div>

        <div className="flex gap-3">
          <Link 
            to={`/courses/${card.id}`} 
            className="flex-1 py-2.5 border-2 border-[#8B2FF1] text-[#8B2FF1] rounded-xl font-bold text-[10px] hover:bg-[#8B2FF1] hover:text-white transition-all text-center flex items-center justify-center"
          >
            Details
          </Link>
          <button className="flex-1 py-2.5 bg-[#8B2FF1] text-white rounded-xl font-bold text-[10px] hover:bg-[#670DCC] shadow-md transition-all">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}