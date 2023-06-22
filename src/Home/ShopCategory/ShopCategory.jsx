import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopCategory = () => {
    return (
        <div className='mt-24 md:w-[1140px] md:mx-auto '>
            <h1 className='text-3xl font-bold text-center'> Our Shopping Category </h1>
            <p className='text-center mt-5'>Welcome to our online toy car shop in the "Shop" category section. We take pride in offering a vast selection of high-quality toy cars that will ignite the imagination of kids of all ages. Whether you're looking for a speedy sports car, a rugged fire truck, or an adventurous police car, you'll find it all here. Our collection showcases a variety of styles, designs, and colors to suit every preference. We are committed to providing a seamless shopping experience, ensuring competitive prices and excellent customer service. Explore our toy car website today and embark on a thrilling journey of joy and excitement for your little ones.</p>

            <Tabs className='mt-7'>
                <TabList>
                    <Tab>Toy Sports Car</Tab>
                    <Tab>Toy Fire Truck</Tab>
                    <Tab> Toy Police Car  </Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopCategory;