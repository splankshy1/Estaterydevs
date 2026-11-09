import React from 'react';
import Hero from './Hero'; // Adjust path if your Hero file is placed differently
import SearchBar from './SearchBar';
import PropertyListings from './PropertyListings';
import Services from './Services';
import AboutUs from './AboutUs';
import PropertyInArea from './PropertyInArea';
import AgentsSection from './AgentsSection';
import ExploreBanner from './ExploreBanner';
import OurBlog from './OurBlog';



export const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <SearchBar/>
      <PropertyListings />
      <Services />
      <AboutUs />
      <PropertyInArea/>
      <AgentsSection/>
      <ExploreBanner/>
      <OurBlog/> 
    </div>
  );
};