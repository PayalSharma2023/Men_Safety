// import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/HomePage/Hero";
import WhatWeDo from "../components/HomePage/WhatWeDo";
import OurStories from "../components/HomePage/OurStories";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center">
      <Navbar />
      <Hero />
      <WhatWeDo/>
      <OurStories/>
      <Footer/>
    </div>
  );
};

export default HomePage;
