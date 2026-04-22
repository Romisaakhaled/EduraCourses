import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);

 
  const fetchFavorites = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5000/courses?isFavorite=true");
      setFavorites(res.data);
    } catch (err) {
      console.error("Error fetching favorites:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  const toggleWishlist = async (course) => {
    const isAlreadyFav = favorites.some((fav) => fav.id === course.id);


    if (isAlreadyFav) {
      setFavorites((prev) => prev.filter((fav) => fav.id !== course.id));
    } else {
      setFavorites((prev) => [...prev, { ...course, isFavorite: true }]);
    }

    try {
  
      await axios.patch(`http://localhost:5000/courses/${course.id}`, {
        isFavorite: !isAlreadyFav,
      });
    } catch (err) {
      console.error("Error updating wishlist:", err);
     
      fetchFavorites();
    }
  };

  return (
    <WishlistContext.Provider value={{ favorites, toggleWishlist, loading }}>
      {children}
    </WishlistContext.Provider>
  );
};