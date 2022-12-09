import React from "react";
import Theory from "../components/home/Theory";
import Hero from "../components/home/Hero";
import BookTable from "../components/home/BookTable";
import MapFooter from "../components/home/MapFooter";
import Media from "../components/home/Media";
import AboutUs from "../components/home/AboutUs";
import Menu from "../components/home/Menu";
import Footer from "../components/Footer";
import MyCarousel from "../components/home/Review"

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Media />
      <Menu />
      <Theory />
      <BookTable />
      <MyCarousel />
      <MapFooter />
      <Footer />
    </>
  );
};

export default Home;
