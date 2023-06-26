import React, { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ToyCar = () => {

    const [car, setCar] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/carData?category=Toy%20Sports%20Car')
            .then(res => res.json())
            .then(data => setCar(data));
    }, [])

    if (car.length > 2) {
        setCar(car.slice(0, 2));
    }
    
    return (
        <div className='mt-9 grid grid-cols-1 md:grid-cols-2 ml-20'>
            {
                car.map(c => <>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={c.photo} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"> {c.name} </h2>
                            <p className='mt-3'>Price : {c.price} </p>
                            <div className='flex justify-between mt-2'>
                                <Rating
                                    style={{ maxWidth: 120 }}
                                    value={c.rating}
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

export default ToyCar;