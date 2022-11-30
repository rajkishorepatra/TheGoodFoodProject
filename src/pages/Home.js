import React from "react";
import Theory from "../components/home/Theory";
import Hero from "../components/home/Hero";
import BookTable from "../components/home/BookTable";
import MapFooter from "../components/home/MapFooter";
import Media from "../components/home/Media";
import AboutUs from "../components/home/AboutUs";
import Menu from "../components/home/Menu";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Theory />
      <Media />
      <BookTable />
      <Menu />
      <MapFooter />
    </>
  );
};

export default Home;
