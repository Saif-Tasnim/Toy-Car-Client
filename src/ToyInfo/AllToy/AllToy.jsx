import React, { useEffect, useState } from 'react';

const AllToy = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/toyDetails')
            .then(res => res.json())
            .then(datum => setData(datum));
    }, [])


    return (
        <div className='mt-20'>
            <h1 className='text-4xl font-bold text-emerald-400 text-center mb-16'> List Of All Toys </h1>

            {/* table data */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='text-base'>
                        <tr>
                            <th>

                            </th>
                            <th> Seller Name</th>
                            <th>Toy Name </th>
                            <th>Sub Category</th>
                            <th> Price </th>
                            <th> Available Quantity </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            data.map(d => <tr>
                                <th>
                                    <label>
                                        <button className="btn btn-circle">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    </label>

                                </th>
                                <td>
                                    <div className="flex items-center space-x-3"> <div> {d.seller_name}</div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3"> <div> {d.name}</div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3"> <div> {d.category}</div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3 "> <div> {d.price}</div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3 ml-8"> <div> {d.quantity}</div>
                                    </div>
                                </td>
                                <th>
                                    <button className="btn btn-primary btn-sm  text-center">View Details</button>
                                </th>
                            </tr>)
                        }



                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllToy;