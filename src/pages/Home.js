import React from "react";
import Theory from "../components/home/Theory";
import Hero from "../components/home/hero";
import BookTable from "../components/home/BookTable";
import MapFooter from "../components/home/MapFooter";
import Media from "../components/home/Media";

const Home = () => {
  return ( 
  <>
      <Hero/>
      <Theory/>
      <Media/>
      <BookTable/>
      <MapFooter/>
  </>)
};

export default Home;
