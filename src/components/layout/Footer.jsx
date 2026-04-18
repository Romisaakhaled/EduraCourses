import React from 'react';

const Footer = () => {
  return (

    <footer className="bg-[#0B0F2F] text-gray-200 px-6 py-16 relative overflow-hidden mt-auto border-t border-white/5">
     
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-80 h-80 rounded-full bg-purple-900 opacity-20 animate-blob-slow blur-3xl"></div>
        <div className="w-60 h-60 rounded-full bg-indigo-900 opacity-20 animate-blob-reverse blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
         
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
                <span className="text-white font-bold text-xl italic">E</span>
              </div>
              <span className="text-2xl font-bold text-white italic tracking-tight">Edura.</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Build skills with courses, certificates, and degrees online from world-class universities and companies.
            </p>
         
            <div className="flex space-x-4">
              <SocialLink href="#" icon="facebook-f" />
              <SocialLink href="#" icon="twitter" />
              <SocialLink href="#" icon="instagram" />
            </div>
          </div>


          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Courses</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>

        
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Newsletter</h3>
            <p className="text-gray-400 text-xs mb-4">Get the latest updates right in your inbox.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email" 
                
                  className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500 transition-all text-sm" 
                />
                <button 
                  type="submit" 
                  className="absolute right-2 top-2 bottom-2 bg-purple-600 hover:bg-purple-700 text-white px-4 rounded-lg transition duration-300 shadow-md shadow-purple-900/20"
                >
                  <i className="fas fa-paper-plane text-xs"></i>
                </button>
              </div>
            </form>
          </div>

    
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Contact Us</h3>
            <div className="space-y-4 text-gray-400 text-sm">
              <p className="flex items-center gap-3">
                <i className="fas fa-map-marker-alt text-purple-500"></i>
                123 Main Street, City, Country
              </p>
              <p className="flex items-center gap-3">
                <i className="fas fa-envelope text-purple-500"></i>
                info@edura.com
              </p>
              <p className="flex items-center gap-3">
                <i className="fas fa-phone text-purple-500"></i>
                +123 456 7890
              </p>
            </div>
          </div>
        </div>

      
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Edura. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
    </footer>
  );
};


const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
   
    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all duration-300 border border-white/10 shadow-sm"
  >
    <i className={`fab fa-${icon}`}></i>
  </a>
);

export default Footer;