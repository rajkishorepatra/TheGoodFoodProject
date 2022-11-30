import React from "react";
import AboutUs from "../components/home/AboutUs";
import Hero from "../components/home/Hero";
import Menu from "../components/home/Menu";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Menu />
    </>
  );
};

export default Home;
