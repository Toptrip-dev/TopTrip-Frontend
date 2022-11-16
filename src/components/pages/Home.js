import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Benefits from '../Benefits';
import Carousel from '../Carousel';

function Home() {
  return (
    <>
      <HeroSection />
      <Benefits />
      <Cards />
      <Footer />

    </>
  );
}

export default Home;
