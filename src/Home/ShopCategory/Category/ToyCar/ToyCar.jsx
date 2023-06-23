import React, { useEffect, useState } from 'react';

const ToyCar = () => {

    const [car, setCar] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/carData?category=Toy%20Sports%20Car')
            .then(res => res.json())
            .then(data => setCar(data));
    }, [])

    if (car.length > 2) {
        console.log(car.slice(0, 2));
        console.log("new Array ize is ", car.length);
    }

    else {
        console.log("size is perfect");
    }

    return (
        <div className='mt-9 grid grid-cols-1 md:grid-cols-2 ml-20'>
            {
                car.map(c => <>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={c.picture} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"> {c.name} </h2>
                            <p>Price : {c.price} </p>
                            <p>Ratings : {c.rating} </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">View Details Button</button>
                            </div>
                        </div>
                    </div>
                </>)
            }

        </div>
    );
};

export default ToyCar;