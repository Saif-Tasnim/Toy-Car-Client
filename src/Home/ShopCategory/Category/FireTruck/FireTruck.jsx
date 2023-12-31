import React, { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const FireTruck = () => {

    const [truck, setTruck] = useState([]);
    useEffect(() => {
        fetch('https://toy-car-server-chi.vercel.app/carData?category=Toy%20Fire%20Truck')
            .then(res => res.json())
            .then(data => setTruck(data));
    }, [])

    if (truck.length > 2) {
        setTruck(truck.slice(0, 2));
    }


    return (
        <div className='mt-9 grid grid-cols-1 gap-7 md:grid-cols-2 md:ml-20 md:gap-0'>
            {
                truck.map(t => <>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={t.photo} alt="Shoes" /></figure>
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
                                    <Link to={`/visitDetails/${t._id}`}><button className="btn btn-primary">View Details </button></Link>
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