import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopCategory from '../ShopCategory/ShopCategory';
import AboutUS from '../AboutUs/AboutUs';
import ChoosesUs from '../ChoosesUs/ChoosesUs';

const Home = () => {
   
    
    return (
        <div>
           <Banner></Banner>
           <AboutUS></AboutUS>
           <Gallery></Gallery>
           <ShopCategory></ShopCategory>
           <ChoosesUs></ChoosesUs>
        </div>
    );
};

export default Home;