
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CourseExplorer({ wishlist, toggleWishlist }) {
  const [courses, setCourses] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch courses
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/courses');
        setCourses(response.data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("No Courses Found");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Filter courses
  const filteredCards = courses.filter(card => {
    if (activeFilter === 'all') return true;
    return card.tags?.some(tag => tag.toLowerCase().includes(activeFilter));
  });

  return (
    <div className="bg-[#FBF8FF] min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#1A162C] mb-3">
            Our Most Popular Courses
          </h1>
        </header>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {['all', 'design', 'development', 'marketing', 'data science'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-500 hover:bg-purple-50 shadow-sm'
              }`}
            >
              {filter === 'all' ? 'All Courses' : filter.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-20 flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mb-4"></div>
            <p className="text-gray-500">Loading awesome courses...</p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="text-center py-20 bg-red-50 rounded-3xl border border-red-100">
            <p className="text-red-500 font-bold">{error}</p>
          </div>
        )}

        {/* Courses Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-[20px] shadow-sm border border-purple-50 overflow-hidden hover:shadow-xl hover:shadow-purple-100 transition-all duration-300 group relative"
              >
                {/* Image Section */}
                <div className={`relative h-44 bg-gradient-to-br ${card.gradient || 'from-purple-500 to-pink-500'} flex items-center justify-center overflow-hidden`}>

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(card);
                    }}
                    className="absolute top-4 right-4 w-9 h-9 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-all z-10"
                  >
                    <i
                      className={`fas fa-heart text-xl transition-all ${
                        wishlist.some((item) => item.id === card.id)
                          ? 'text-red-500'
                          : 'text-white/70'
                      }`}
                    ></i>
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">
                      {card.title}
                    </h3>
                    <div className="flex items-center text-yellow-400 text-sm">
                      <i className="fas fa-star mr-1"></i>
                      <span className="font-bold text-gray-400">{card.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-[11px] text-gray-400 font-bold mb-6">
                    <span className="flex items-center gap-1.5">
                      <i className="fas fa-book-open text-purple-600"></i> BEGINNER
                    </span>
                    <span className="flex items-center gap-1.5">
                      <i className="fas fa-clock text-purple-600"></i> 40H
                    </span>
                  </div>

                  <div className="mb-8 p-3 bg-purple-50/50 rounded-xl">
                    <p className="text-[10px] uppercase text-purple-400 font-extrabold tracking-widest mb-1">Price</p>
                    <p className="text-lg font-bold text-purple-700">{card.price || "Free"}</p>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 py-3 border border-purple-600 text-purple-600 rounded-xl font-bold text-xs hover:bg-purple-600 hover:text-white transition-all">
                      Details
                    </button>
                    <button className="flex-1 py-3 bg-purple-600 text-white rounded-xl font-bold text-xs hover:bg-purple-700 transition-all">
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
  );
}

