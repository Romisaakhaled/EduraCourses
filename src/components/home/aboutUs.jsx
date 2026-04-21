import React from 'react';
import { motion } from 'framer-motion';

const AboutEdura = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.8 }
    })
  };

  return (
    <section id="about-us" className="py-24 bg-[#FBF8FF] overflow-hidden">
      <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
        
      
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-[#1A162C] mb-4">About Our Academy</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Empowering students worldwide through accessible, high-quality online education and expert mentorship.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="space-y-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeIn}>
              <h3 className="text-3xl font-bold text-[#1A162C] mb-6 leading-tight">
                Leading the Way in <span className="text-purple-600">Digital Learning</span>
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded with a vision to bridge the gap between academic learning and industry demands, 
                Edura has helped over 10,000 students master modern technologies.
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                { title: "Expert Instructors", desc: "Learn from industry leaders with 10+ years of experience.", icon: "fa-chalkboard-teacher" },
                { title: "Flexible Learning", desc: "Access your courses anytime, anywhere, on any device.", icon: "fa-laptop-house" },
                { title: "Verified Certificates", desc: "Boost your career with industry-recognized certifications.", icon: "fa-certificate" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} custom={idx + 2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                  className="flex gap-4 items-start"
                >
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 shrink-0 shadow-sm">
                    <i className={`fas ${item.icon} text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1A162C]">{item.title}</h4>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

         
          <motion.div 
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" 
                alt="Students collaborating" 
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-1000"
              />
              
              {/* Overlay Card */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-purple-50">
                  <div className="flex justify-around items-center text-center">
                    <div>
                      <div className="text-3xl font-bold text-purple-700">15K+</div>
                      <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Students</div>
                    </div>
                    <div className="h-10 w-[1px] bg-purple-100"></div>
                    <div>
                      <div className="text-3xl font-bold text-purple-700">4.9</div>
                      <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Rating</div>
                    </div>
                    <div className="h-10 w-[1px] bg-purple-100"></div>
                    <div>
                      <div className="text-3xl font- text-purple-700">200+</div>
                      <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Courses</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
           
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutEdura;