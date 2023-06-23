import React, { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const FireTruck = () => {

    const [truck, setTruck] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/carData?category=Toy%20Fire%20Truck')
            .then(res => res.json())
            .then(data => setTruck(data));
    }, [])

    if (truck.length > 2) {
        console.log(car.slice(0, 2));
        console.log("new Array ize is ", truck.length);
    }

    else {
        console.log("size is perfect");
    }


    return (
        <div className='mt-9 grid grid-cols-1 md:grid-cols-2 ml-24'>
            {
                truck.map(t => <>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={t.picture} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"> {t.name} </h2>
                            <p className='mt-3'>Price : {t.price} </p>
                            <div className='flex justify-between mt-2'>
                                <Rating
                                    style={{ maxWidth: 120 }}
                                    value={t.rating}
                                    readOnly
                                />
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View Details </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>)
            }

        </div>
    );
};

export default FireTruck;