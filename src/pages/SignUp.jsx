import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SignUp attempt:", formData);
  };

  return (
    <div className="min-h-screen bg-[#0B0F2F] flex items-center justify-center px-4 relative overflow-hidden text-[#1A162C]">
       {/* دوائر ديكور */}
      <div className="absolute top-[20%] right-[-5%] w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="bg-white w-full max-w-md rounded-[40px] p-10 shadow-2xl z-10 mt-10 mb-10">
        <header className="text-center mb-8">
          <h2 className="text-3xl font-black mb-2">Create Account</h2>
          <p className="text-gray-400 text-sm font-medium">Join our community of learners</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-[10px] font-black text-gray-300 uppercase tracking-widest mb-2 ml-1">Full Name</label>
            <input 
              type="text" 
              placeholder="Enter Your Name"
              className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-purple-500 focus:bg-white transition-all text-sm"
              onChange={(e) => setFormData({...formData, username: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="block text-[10px] font-black text-gray-300 uppercase tracking-widest mb-2 ml-1">Email Address</label>
            <input 
              type="email" 
              placeholder="john@example.com"
              className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-purple-500 focus:bg-white transition-all text-sm"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="block text-[10px] font-black text-gray-300 uppercase tracking-widest mb-2 ml-1">Password</label>
            <input 
              type="password" 
              placeholder="Min. 8 characters"
              className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-purple-500 focus:bg-white transition-all text-sm"
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>

          <div className="flex items-center gap-2 px-1">
            <input type="checkbox" id="terms" className="accent-purple-600" required />
            <label htmlFor="terms" className="text-[11px] text-gray-400 font-medium cursor-pointer">
              I agree to the <span className="text-purple-600 underline">Terms & Conditions</span>
            </label>
          </div>

          <button className="w-full py-4 bg-gradient-to-r from-[#8B2FF1] to-[#670DCC] text-white rounded-2xl font-bold text-sm shadow-lg shadow-purple-200 hover:scale-[1.02] active:scale-95 transition-all mt-4">
            Create Account
          </button>
        </form>

        <p className="mt-8 text-center text-gray-500 text-sm font-medium">
          Already have an account? <Link to="/login" className="text-[#8B2FF1] font-black hover:underline">Log In</Link>
        </p>
      </div>
    </div>
  );
}