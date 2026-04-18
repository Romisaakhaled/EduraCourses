import React from 'react';
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative bg-[#0B0F2F] overflow-hidden pt-12 pb-12">
     
      <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#6B46C1_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(at_bottom_left,#C026D3_0%,transparent_50%)] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 pt-8 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-purple-900/50 text-purple-300 text-sm font-medium px-5 py-2 rounded-full border border-purple-700">
              ✨ EDUCATION FOR EVERYONE
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
              Learn New Skills Online <br />
              With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500">
                Top Educators
              </span>
            </h1>

            <p className="text-base text-gray-300 max-w-md">
              Build skills with courses, certificates, and degrees online from world-class universities and companies.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link 
                to="/signup" 
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full text-sm transition-all duration-300 shadow-md shadow-purple-500/20"
              >
                Join for Free
              </Link>

              <Link 
                to="/courses" 
                className="px-6 py-3 border border-purple-500 hover:bg-purple-500/10 text-white font-semibold rounded-full text-sm transition-all duration-300 flex items-center gap-2"
              >
                Browse Courses 
                <span className="text-lg">→</span>
              </Link>
            </div>

         
            <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4">
              <div>
                <div className="flex items-center gap-2 text-xl font-semibold text-white">
                  <span>12M+</span>
                </div>
                <p className="text-gray-400 text-sm">Students</p>
              </div>
              <div>
                <div className="text-xl font-semibold text-white">60,000+</div>
                <p className="text-gray-400 text-sm">Courses</p>
              </div>
              <div>
                <div className="text-xl font-semibold text-white">Learn Anything</div>
                <p className="text-gray-400 text-sm">Online</p>
              </div>
            </div>
          </div>

        
          <div className="relative hidden lg:block">
            <div className="relative">
             
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" 
                alt="Student learning"
                className="rounded-3xl shadow-2xl w-full object-cover h-[380px]"
              />

             
              <div className="absolute -top-2 -right-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-xl w-60">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-2xl flex items-center justify-center text-xl">👨‍💼</div>
                  <div>
                    <p className="font-semibold text-white text-sm">Ali Tufan</p>
                    <p className="text-purple-300 text-xs">UI/UX Designer</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mt-2 text-lg">★★★★★</div>
              </div>

             
              <div className="absolute bottom-10 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 text-sm">
                <div className="w-9 h-9 bg-orange-100 rounded-xl flex items-center justify-center text-2xl">🎒</div>
                <div>
                  <p className="font-bold text-gray-900 text-base">3,000+</p>
                  <p className="text-gray-600 text-xs">Free Courses</p>
                </div>
              </div>

             
              <div className="absolute -bottom-4 right-8 bg-white rounded-2xl shadow-2xl p-3 flex items-center gap-3 text-sm">
                <div className="text-purple-600 text-2xl">🎉</div>
                <div>
                  <p className="font-semibold text-gray-900">Congrats!</p>
                  <p className="text-gray-600 text-xs">Admission Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 100C120 80 240 40 360 40C480 40 600 80 720 90C840 100 960 80 1080 60C1200 40 1320 20 1380 10L1440 0V120H0Z" fill="#ffffff"/>
        </svg>
      </div>
    </div>
  );
}