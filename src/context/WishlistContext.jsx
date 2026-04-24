import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";


export const WishlistContext = createContext();


export const WishlistProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const res = await axios.get("http://localhost:5000/favorites");
        setFavorites(res.data);
      } catch (err) {
        console.error("Error fetching wishlist:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchFavorites();

  }, []);


  const toggleWishlist = async (course) => {
   
    const isExist = favorites.find((fav) => fav.id === course.id);

    if (isExist) {

      const updatedFavorites = favorites.filter((fav) => fav.id !== course.id);
      setFavorites(updatedFavorites);

      try {
        
        await axios.delete(`http://localhost:5000/favorites/${course.id}`);
      } catch (err) {
        console.error("Failed to delete from wishlist:", err);
  
      }
    } else {
      
      const updatedFavorites = [...favorites, course];
      setFavorites(updatedFavorites);

      try {
       
        await axios.post("http://localhost:5000/favorites", course);
      } catch (err) {
        console.error("Failed to add to wishlist:", err);
      }
    }
  };

  
  const isInWishlist = (id) => {
    return favorites.some((fav) => fav.id === id);
  };

  return (
    <WishlistContext.Provider value={{ favorites, toggleWishlist, isInWishlist, loading }}>
      {children}
    </WishlistContext.Provider>
  );
};


export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};