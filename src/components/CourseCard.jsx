// src/pages/Wishlist.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CourseCard from '../components/CourseCard'; // اتأكدي إن المسار صح حسب ترتيب الفولدرات عندك

export default function Wishlist() {
  const [favorites, setFavorites] = useState([]);

  const fetchFavorites = () => {
    axios.get('http://localhost:5000/courses?isFavorite=true')
      .then(res => setFavorites(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  const handleRemoveFavorite = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/courses/${id}`, { isFavorite: false });
      fetchFavorites(); 
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-[#FBF8FF] min-h-screen py-24 px-4">
       <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-black text-[#1A162C]">My Wishlist ❤️</h1>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favorites.map(card => (
            <CourseCard 
              key={card.id} 
              card={card} 
              onToggleFavorite={() => handleRemoveFavorite(card.id)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}