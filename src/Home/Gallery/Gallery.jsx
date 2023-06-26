import img1 from '../../assets/Gallery Pic/51VBnpoRUcL._AC_SY580_.jpg';
import img2 from '../../assets/Gallery Pic/61gdfLGYO5L.jpg';
import img3 from '../../assets/Gallery Pic/arunsphotography-diecast-cars-diecast-photography-red-car-wallpaper-preview.jpg';
import img4 from '../../assets/Gallery Pic/cop-policewoman-colleagues-funny.jpg';
import img5 from '../../assets/Gallery Pic/download.jpeg';
import img6 from '../../assets/Gallery Pic/police-car-team-bus-police-blue-light.jpg';
import img7 from '../../assets/Gallery Pic/policewoman-police-police-car-figure.jpg';
import img8 from '../../assets/Gallery Pic/toy-fire-truck-260nw-676363618.webp';


import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Gallery = () => {

    useEffect(() => {
        AOS.init({
            disable: false,
            startEvent: 'DOMContentLoaded',
            initClassName: 'aos-init',
            animatedClassName: 'aos-animate',
            useClassNames: false,
            disableMutationObserver: false,
            debounceDelay: 50,
            throttleDelay: 99,


            // offset: 120,
            // delay: 0,
            // duration: 4000,
            // easing: 'ease',
            // once: false,
            // mirror: false,
            // anchorPlacement: 'top-bottom'

        });
    }, []);


    return (
        <div className='w-full md:w-[1140px] md: mx-auto'
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="3000"
            data-aos-easing="ease-in"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
        >
            <h2 className='text-center text-3xl font-bold'> Our Collections </h2>


            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-9">
                <div className="grid gap-4">
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src={img1}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src={img2}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src={img3}
                            alt=""
                        />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src={img4}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src={img5}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src={img6}
                            alt=""
                        />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src={img7}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src={img8}
                            alt=""
                        />
                    </div>


                </div>

            </div>
        </div>
    )
};

export default Gallery;