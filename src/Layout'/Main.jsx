import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../Shared/Footer/Footer';
import NavigationPanel from '../Shared/Navbar/NavigationPanel';

const Main = () => {
    return (
        <div>
           <NavigationPanel></NavigationPanel>   
      
            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default Main;