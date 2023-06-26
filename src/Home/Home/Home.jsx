import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopCategory from '../ShopCategory/ShopCategory';
import AboutUS from '../AboutUs/AboutUs';
import ChoosesUs from '../ChoosesUs/ChoosesUs';
import useTitle from '../../Hook/useTitle';


const Home = () => {

    useTitle("Home");

    return (
        <div>
            <Banner></Banner>
            <AboutUS data-aos="fade-up" className="aos-item"></AboutUS>
            <Gallery data-aos="fade-up" className="aos-item"></Gallery>
            <ShopCategory data-aos="fade-up" className="aos-item"></ShopCategory>
            <ChoosesUs data-aos="fade-up" className="aos-item"></ChoosesUs>
        </div>
    );
};

export default Home;