import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
  
  };

  return (
    <div className="min-h-screen bg-[#0B0F2F] flex items-center justify-center px-4 relative overflow-hidden">
     
      <div className="absolute top-[-10%] left-[-5%] w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl"></div>

      <div className="bg-white w-full max-w-md rounded-[40px] p-10 shadow-2xl z-10">
        <header className="text-center mb-8">
          <h2 className="text-3xl font-black text-[#1A162C] mb-2">Welcome Back!</h2>
          <p className="text-gray-400 text-sm font-medium">Please enter your details</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[10px] font-black text-gray-300 uppercase tracking-widest mb-2 ml-1">Email Address</label>
            <input 
              type="email" 
              placeholder="name@company.com"
              className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-purple-500 focus:bg-white transition-all text-sm"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-[10px] font-black text-gray-300 uppercase tracking-widest mb-2 ml-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-purple-500 focus:bg-white transition-all text-sm"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-end">
            <a href="#" className="text-xs font-bold text-purple-600 hover:text-purple-700">Forgot Password?</a>
          </div>

          <button className="w-full py-4 bg-gradient-to-r from-[#8B2FF1] to-[#670DCC] text-white rounded-2xl font-bold text-sm shadow-lg shadow-purple-200 hover:scale-[1.02] active:scale-95 transition-all">
            Log In
          </button>
        </form>

        <p className="mt-8 text-center text-gray-500 text-sm font-medium">
          Don't have an account? <Link to="/signup" className="text-[#8B2FF1] font-black hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}