import React, { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const PoliceCar = () => {

    const [police, setPolice] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/carData?category=Toy%20Police%20Car')
            .then(res => res.json())
            .then(data => setPolice(data));
    }, [])

    
    if (police.length > 2) {
        setPolice(police.slice(0,2));
     }

    return (

        <div className='mt-9 grid grid-cols-1 md:grid-cols-2 ml-24'>
            {
                police.map(p => <>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={p.photo} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"> {p.name} </h2>
                            <p className='mt-3'>Price : {p.price} </p>
                            <div className='flex justify-between mt-2'>
                                <Rating
                                    style={{ maxWidth: 120 }}
                                    value={p.rating}
                                    readOnly
                                />
                                  <div className="card-actions justify-end">
                                    <Link to={`/visitDetails/${p._id}`}><button className="btn btn-primary">View Details </button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </>)
            }

        </div>

    );
};

export default PoliceCar;