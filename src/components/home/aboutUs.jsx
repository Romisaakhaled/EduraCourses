import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const features = [
  {
    title: "Expert Instructors",
    desc: "Learn from real industry professionals, not just theory.",
    icon: "fa-chalkboard-teacher"
  },
  {
    title: "Flexible Learning",
    desc: "Study anytime, anywhere — your pace, your rules.",
    icon: "fa-laptop-house"
  },
  {
    title: "Career Focused",
    desc: "We prepare you for real jobs, not just certificates.",
    icon: "fa-briefcase"
  }
];

export default function AboutEdura() {
  return (
    <section id="about-us" className="relative py-28 bg-[#FBF8FF] overflow-hidden">

    
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-300 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4">

   
        <div className="text-center mb-20">
          <span className="px-4 py-1 bg-purple-100 text-purple-600 text-xs rounded-full font-bold tracking-wide">
            WHY EDURA
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A162C] mt-6 mb-4">
            More Than Just Courses
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            We’re building a new way of learning — one that actually prepares you 
            for the real world, not just exams.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

      
          <div className="relative">

            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white relative">
              
              <img
                src="https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=1200&q=80"
                alt="coding setup"
                className="w-full h-[500px] object-cover hue-rotate-[250deg] saturate-150"
              />

         
              <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-xl shadow text-xs font-bold text-purple-600">
                🚀 Fast Growing Platform
              </div>

          
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 40px rgba(139, 47, 241, 0.4)"
                }}
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-3xl cursor-pointer"
              >
                <div className="flex justify-around text-center">
                  <Counter end={15000} label="Students" />
                  <Divider />
                  <Counter end={4.9} label="Rating" decimal />
                  <Divider />
                  <Counter end={200} label="Courses" />
                </div>
              </motion.div>

            </div>

           
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>

          </div>

        
          <div className="space-y-10">

            <h3 className="text-3xl font-bold text-[#1A162C] leading-snug">
              Learn Smarter, <br />
              <span className="text-purple-600">Grow Faster 🚀</span>
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed">
              At Edura, we don’t just teach — we guide, mentor, and support you 
              every step of the way. Our mission is simple: help you become 
              confident, job-ready, and future-proof.
            </p>

            
            <div className="space-y-6">
              {features.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, type: "spring", stiffness: 80 }}
                  viewport={{ once: true }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 shadow-sm">
                    <i className={`fas ${item.icon}`} />
                  </div>

                  <div>
                    <h4 className="font-bold text-[#1A162C]">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}


const Counter = ({ end, label, decimal }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(decimal ? start.toFixed(1) : Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, decimal]);

  return (
    <div>
      <div className="text-2xl font-bold text-purple-700">
        {count}{!decimal && "+"}
      </div>
      <div className="text-[10px] uppercase text-gray-400">
        {label}
      </div>
    </div>
  );
};

const Divider = () => (
  <div className="h-8 w-[1px] bg-purple-100"></div>
);