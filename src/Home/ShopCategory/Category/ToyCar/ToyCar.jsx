import React, { useEffect, useState } from 'react';

const ToyCar = () => {

    const [car, setCar] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/carData?category=Toy%20Sports%20Car')
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])

    return (
        <div className='mt-8'>
            {/* card -1  */}
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

            {/* card-2 */}
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ToyCar;