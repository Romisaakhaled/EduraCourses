import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/hero';
import TopCategories from '../components/home/topCategories';
import Footer from '../components/layout/Footer'; 


 


const Home = () => {
  return (
    <>
      <Navbar /> 
     <Hero/>
     <TopCategories/>
     <Footer/>
    </>
  );
};

export default Home;