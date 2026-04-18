
import React from 'react';
import { motion } from 'framer-motion'; // استيراد مكتبة الانيميشن

const categories = [

  { 
    id: 1, 
    title: "Art & Humanities", 
    count: "1 Course", 
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
        <path d="M12 20.94c1.88-1.1 3.24-2.49 4.15-4.07 1.22-2.14 1.58-4.23 1.08-6.21a6.73 6.73 0 0 0-4.47-4.72 6.73 6.73 0 0 0-6.15.82 6.73 6.73 0 0 0-3.19 5.3c-.15 2 .42 4.03 1.62 6.07.9 1.54 2.25 2.89 4.11 3.96l.85.45.85-.45Z"/>
        <circle cx="9" cy="9" r="1"/><circle cx="15" cy="9" r="1"/><circle cx="12" cy="13" r="1"/>
      </svg>
    )
  },
  { 
    id: 2, 
    title: "Personal Development", 
    count: "1 Course", 
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8l2 2-2 2"/>
      </svg>
    )
  },
  { 
    id: 3, 
    title: "Finance & Accounting", 
    count: "3 Courses", 
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    )
  },
  { 
    id: 4, 
    title: "Graphic Design", 
    count: "5 Courses", 
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
        <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
      </svg>
    )
  },
  { 
    id: 5, 
    title: "Sales Marketing", 
    count: "1 Course", 
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    )
  },

];

export default function TopCategories() {
  return (
    <section className="py-12 bg-white"> {/* قللنا الـ padding الطولي لتصغير الحجم الكلي */}
      <div className="max-w-5xl mx-auto px-4"> {/* صغرنا الـ max-width لتقريب العناصر */}
        
        {/* Title Section مع انيميشن بسيط */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Top Categories</h2>
          <p className="text-sm text-gray-500">Explore our most popular categories.</p>
        </motion.div>

        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"> {/* صغرنا الـ gap */}
          {categories.map((cat, index) => (
            <motion.div 
              key={cat.id} 
              // --- منطق الانيميشن هنا ---
              initial={{ opacity: 0, y: 30 }} // يبدأ شفاف ونازل لتحت
              whileInView={{ opacity: 1, y: 0 }} // يظهر ويطلع مكانه لما يظهر في السكرول
              viewport={{ once: true, margin: "-50px" }} // يشتغل مرة واحدة بس
              transition={{ duration: 0.5, delay: index * 0.1 }} // كل كارد يتأخر عن اللي قبله (Stagger)
              // -----------------------
              className="group flex flex-col items-center justify-center p-6 rounded-[1.5rem] bg-[#F9F9FB] border border-transparent hover:border-purple-600 hover:bg-white hover:shadow-xl hover:shadow-purple-100 transition-all duration-300 cursor-pointer"
            >
              {/* Icon Container - صغرنا الحاوية */}
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                {/* صغرنا الـ SVG جوه الـ container */}
                <div className="scale-75"> 
                  {cat.icon}
                </div>
              </div>

              {/* Text Info - صغرنا الخطوط */}
              <h3 className="text-[15px] font-bold text-gray-800 text-center mb-1 group-hover:text-purple-600 transition-colors">
                {cat.title}
              </h3>
              <p className="text-[12px] text-gray-400 font-medium">{cat.count}</p>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-2">
           <span className="w-2 h-2 rounded-full bg-purple-600"></span>
           <span className="w-2 h-2 rounded-full bg-gray-200"></span>
           <span className="w-2 h-2 rounded-full bg-gray-200"></span>
        </div>

      </div>
    </section>
  );
}