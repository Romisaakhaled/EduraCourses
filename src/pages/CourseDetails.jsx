import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/courses/${id}`)
      .then(res => setCourse(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!course) return <div className="min-h-screen flex items-center justify-center font-bold text-purple-600">Loading Experience...</div>;

  return (
    <div className="min-h-screen bg-[#FBF8FF]">
     
      <div className="relative h-[450px] w-full bg-[#1A162C] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80" 
          className="w-full h-full object-cover opacity-40"
          alt="Course thumbnail"
        />
        
      
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
           <Link to="/" className="absolute top-10 left-10 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#1A162C] transition-all z-20">
            <i className="fas fa-arrow-left"></i>
          </Link>

          <div className="w-20 h-20 bg-[#8B2FF1] rounded-full flex items-center justify-center mb-6 cursor-pointer hover:scale-110 transition-all shadow-2xl border-4 border-white/20">
            <i className="fas fa-play text-white text-2xl ml-1"></i>
          </div>
          
          <h1 className="text-white text-4xl md:text-6xl font-black leading-tight max-w-4xl">
            {course.title}
          </h1>
          
          <div className="flex gap-4 mt-6">
             <span className="px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-[10px] font-black tracking-widest uppercase">
                {course.category || "Development"}
              </span>
              <div className="flex items-center gap-1 text-yellow-400 font-bold bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <i className="fas fa-star"></i>
                <span>{course.rating}</span>
              </div>
          </div>
        </div>
      </div>

     
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-[11px] font-black text-purple-600 uppercase tracking-[3px] mb-4">About Course</h2>
              <p className="text-[#1A162C] text-xl font-medium leading-relaxed opacity-90">
                Master the art of {course.title} with a hands-on approach. This course is designed to take you from a complete beginner to a professional level with real-world projects.
              </p>
            </section>

            <section>
              <h2 className="text-[11px] font-black text-purple-600 uppercase tracking-[3px] mb-6">Course Curriculum</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4, 5, 6].map((lesson) => (
                  <div key={lesson} className="flex items-center justify-between p-5 bg-white border border-gray-100 rounded-2xl group hover:shadow-lg hover:border-purple-200 cursor-pointer transition-all">
                    <div className="flex items-center gap-4">
                      <span className="w-8 h-8 flex items-center justify-center rounded-xl bg-purple-50 text-[10px] font-black text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all">
                        {lesson}
                      </span>
                      <h4 className="font-bold text-[#1A162C] text-sm">Lesson Title {lesson}</h4>
                    </div>
                    <i className="fas fa-lock text-gray-300 text-xs"></i>
                  </div>
                ))}
              </div>
            </section>
          </div>

       
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-2xl sticky top-28">
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">Total Investment</p>
                  <div className="flex items-center gap-3">
                    <h3 className="text-5xl font-black text-[#1A162C]">{course.price}</h3>
                    <span className="text-gray-300 line-through font-bold text-lg">$199.00</span>
                  </div>
                </div>

                <div className="space-y-4 py-6 border-t border-b border-gray-50">
                  <div className="flex items-center gap-3 text-sm font-bold text-gray-600">
                    <i className="fas fa-clock text-purple-500"></i>
                    40 Hours of Content
                  </div>
                  <div className="flex items-center gap-3 text-sm font-bold text-gray-600">
                    <i className="fas fa-infinity text-purple-500"></i>
                    Lifetime Access
                  </div>
                  <div className="flex items-center gap-3 text-sm font-bold text-gray-600">
                    <i className="fas fa-certificate text-purple-500"></i>
                    Certificate of Completion
                  </div>
                </div>

                <button className="w-full py-5 bg-[#8B2FF1] text-white rounded-[20px] font-black text-sm hover:bg-[#1A162C] transition-all shadow-xl shadow-purple-200">
                  Enroll Now
                </button>
                
                <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                  30-Day Money-Back Guarantee
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}