import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const VisitToyDetails = () => {
    const loadedData = useLoaderData();

    const { user } = useContext(AuthContext);

    const [data, setData] = useState(loadedData);

    return (
        <div className='mt-16 w-[1140px] mx-auto bg-base-200 p-7'>
            <h1 className='text-4xl font-bold text-center mb-5'> Show Toy Details </h1>

            <form>
                <div className="card-body">
                    {/* 1st row */}

                    <div className='grid grid-cols-1  gap-7'>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" name='name'
                                defaultValue={data.name}
                                readOnly
                            />

                        </div>
                    </div>


                    {/* 3rd row */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Sub Category </span>
                            </label>
                            <input type="text" placeholder="Sub Category" className="input input-bordered"
                                name='category'
                                defaultValue={data.category}
                                readOnly
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Price </span>
                            </label>
                            <input type="text" placeholder="Price" className="input input-bordered"
                                name='price'
                                defaultValue={data.price}
                                readOnly
                            />

                        </div>
                    </div>

                    {/* 4 row */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Rating </span>
                            </label>
                            <input type="text" placeholder="Rating" className="input input-bordered"
                                name='rating'
                                defaultValue={data.rating}
                                readOnly
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity
                                </span>
                            </label>
                            <input type="text" placeholder="Available Quantity" className="input input-bordered"
                                name='quantity'
                                defaultValue={data.quantity}
                                readOnly
                            />

                        </div>
                    </div>

                    {/* text area */}
                    <div className='grid grid-cols-1  gap-7'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Detail description </span>
                            </label>
                            <input type='text' placeholder="Details About Toy Car .... " className="input input-bordered w-full h-[100px]"
                                name='details'
                                defaultValue={data.details}
                            />
                        </div>
                    </div>

                    {/* img row */}

                    <div className='grid grid-cols-1  gap-7'>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Image </span>
                            </label>
                             <img src={data.photo} className='w-1/2' alt="" />

                        </div>
                    </div>


                </div>


            </form>
        </div>
    );
};

export default VisitToyDetails;