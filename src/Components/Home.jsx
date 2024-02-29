import React from 'react';
import Navbar from './Navbar'
import SimpleSlider from './Slider';
import Cards from './Cards';
import Discount from './Discount';
import Newarrivals from './Newarrivals';
import Sales from './Sales';
import Footer from './Footer';

function Home() {
  return (
    <div>
      < Navbar/>
      <SimpleSlider/>
      <Cards/>
      <Discount/>
      <Newarrivals/>
      <Sales/>
      <Footer/>
    </div>
  );
}

export default Home;