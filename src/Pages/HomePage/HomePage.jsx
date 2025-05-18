import React from "react";
import Navbar from "../../components/Navbar/Navbar"
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel"
import OurServices from "../../components/OurServices/OurServices"
import ContactComponent from "../../components/ContactComponent/ContactComponent";

const HomePage = () => {
  return (
    <div>
      <HeroCarousel />
      <OurServices />
      <ContactComponent/>
    </div>
  );
};

export default HomePage;
