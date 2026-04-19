import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CourseExplorer() {
  const [courses, setCourses] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    axios.get('http://localhost:5000/courses')
      .then(res => setCourses(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const filteredCards = courses.filter(card => 
    activeFilter === 'all' || card.tags?.some(tag => tag.toLowerCase().includes(activeFilter.toLowerCase()))
  );

  return (
    <div className="bg-[#FBF8FF] min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        
        <header className="text-center mb-12">
          <h1 className="text-3xl font-black text-[#1A162C]">Our Popular Courses</h1>
        </header>

        
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {['all', 'design', 'development', 'marketing'].map(f => (
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

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCards.map(card => (
            <CourseCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
function CourseCard({ card }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="bg-white rounded-[30px] overflow-hidden shadow-md border border-gray-50 group max-w-sm transition-transform hover:scale-[1.02]">
     
      <div className={`relative h-40 bg-gradient-to-br ${card.gradient || 'from-[#8B2FF1] to-[#670DCC]'} overflow-hidden`}>
        <div className="absolute top-6 left-[-15px] w-24 h-24 border-[10px] border-white/10 rounded-full"></div>
        <div className="absolute bottom-[-15px] right-[-10px] w-20 h-20 bg-white/10 rounded-full"></div>

        <button className="absolute top-4 left-5 text-white/70 hover:text-white">
          <i className="fas fa-ellipsis-v text-xs"></i>
        </button>

        <button 
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-5 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all hover:bg-white/40"
        >
          <i className={`${isLiked ? 'fas fa-heart text-white' : 'far fa-heart text-white'} text-sm`}></i>
        </button>
      </div>


      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-base font-bold text-[#1A162C] leading-tight w-[85%] line-clamp-1">
            {card.title || "UX/UI Design Bootcamp"}
          </h3>
          <div className="flex items-center gap-1">
            <i className="fas fa-star text-yellow-400 text-[10px]"></i>
            <span className="text-xs font-bold text-gray-400">{card.rating || "4.9"}</span>
          </div>
        </div>

   
        <div className="flex items-center gap-3 mb-5 text-[9px] font-bold text-gray-400 uppercase tracking-wider">
          <span className="flex items-center gap-1">
            <i className="fas fa-book-open text-[#8B2FF1]"></i> BEGINNER
          </span>
          <span className="flex items-center gap-1">
            <i className="fas fa-users text-[#8B2FF1]"></i> 75K
          </span>
          <span className="flex items-center gap-1">
            <i className="fas fa-clock text-[#8B2FF1]"></i> 40H
          </span>
        </div>

      
        <div className="mb-6">
          <p className="text-[8px] font-black text-gray-300 uppercase tracking-[1px] mb-1">Next Lesson</p>
          <p className="text-xs font-bold text-[#1A162C] truncate">{card.nextLesson || "Lesson 2.3: Interview Basics"}</p>
          <p className="text-xs font-extrabold text-[#8B2FF1] mt-1">Price: {card.price || "250$"}</p>
        </div>

        
        <div className="flex gap-3">
          <button className="flex-1 py-2.5 border-2 border-[#8B2FF1] text-[#8B2FF1] rounded-xl font-bold text-[10px] hover:bg-[#8B2FF1] hover:text-white transition-all">
            Details
          </button>
          <button className="flex-1 py-2.5 bg-[#8B2FF1] text-white rounded-xl font-bold text-[10px] hover:bg-[#670DCC] shadow-md shadow-purple-100 transition-all">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}