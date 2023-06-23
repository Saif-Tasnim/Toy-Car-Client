import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';

const AddToy = () => {

    const { user } = useContext(AuthContext);

    const submitDetails = event => {
        event.preventDefault();
        const form = event.target;

        const photo = form.photo.value;
        const name = form.name.value;
        const seller_name = form.seller_name.value;
        const seller_email = form.seller_email.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;


        const dataOb = { photo, name, seller_name, seller_email, category, price, rating, quantity, details }

        fetch('http://localhost:5000/toyDetails', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(dataOb),
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire(
                    'Good Job!',
                    'Successfully added the data in records.',
                    'success'
                )
            })
    }

    return (
        <div className='mt-16 w-[1140px] mx-auto bg-base-200 p-7'>
            <h1 className='text-4xl font-bold text-center mb-5'> Add New Toy </h1>
            <h1 className='text-xl  text-center'> Insert Data For New Toy </h1>

            <form onSubmit={submitDetails}>
                <div className="card-body">
                    {/* 1st row */}

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Photo URL </span>
                            </label>
                            <input type="text" placeholder="Photo URL" className="input input-bordered" name='photo' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" name='name' />

                        </div>
                    </div>

                    {/* 2nd row */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text"
                                className="input input-bordered"
                                name='seller_name'
                                value={user?.displayName}
                                readOnly
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Seller Email </span>
                            </label>
                            <input type="text"
                                className="input input-bordered"
                                name='seller_email'
                                value={user?.email}
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
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Price </span>
                            </label>
                            <input type="text" placeholder="Price" className="input input-bordered"
                                name='price'
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
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity
                                </span>
                            </label>
                            <input type="text" placeholder="Available Quantity" className="input input-bordered"
                                name='quantity'
                            />

                        </div>
                    </div>

                    {/* text area */}
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Detail description </span>
                            </label>
                            <input type='text' placeholder="Details About Toy Car .... " className="input input-bordered w-full h-[100px]"
                                name='details'
                            />
                        </div>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary"> Submit </button>
                    </div>
                </div>


            </form>
        </div>
    );
};

export default AddToy;