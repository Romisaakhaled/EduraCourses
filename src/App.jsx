import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CourseDetails from "./pages/CourseDetails";

import { WishlistProvider } from "./context/WishlistContext.jsx";

function App() {
  return (
  
    <WishlistProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
      </Routes>
    </WishlistProvider>
  );
}

export default App;