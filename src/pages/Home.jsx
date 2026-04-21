import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/hero';
import TopCategories from '../components/home/topCategories';
import CourseExplorer from '../components/course/CourseExplorer';
import AboutUs from '../components/home/aboutUs';
import Footer from '../components/layout/Footer'; 


 


const Home = () => {
  return ( 
    <>
     <Navbar /> 
     <Hero/>
     <TopCategories/>
     <CourseExplorer/>
     <AboutUs/>
     <Footer/>
    </>
  );
};

export default Home;