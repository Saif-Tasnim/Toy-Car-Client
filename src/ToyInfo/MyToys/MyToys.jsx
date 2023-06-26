import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import useTitle from '../../Hook/useTitle';

const MyToys = () => {
    const { user, loading } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [modalData, setModalData] = useState([]);
    const modalRef = useRef(null);
    useTitle("My Toys")

    useEffect(() => {
        fetch(`https://toy-car-server-chi.vercel.app/myToys?email=${user.email}`)
            .then(res => res.json())
            .then(d => setData(d));
    }, []);

    // console.log(user.email);

    const handleDeleteBtn = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-car-server-chi.vercel.app/myToys/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(datum => {
                        if (datum.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            );
                        }

                        const filterData = data.filter(d => d._id !== id);
                        setData(filterData);
                    });
            }
        });
    };

    const handleUpdateButton = id => {
        fetch(`https://toy-car-server-chi.vercel.app/toyDetails/${id}`)
            .then(res => res.json())
            .then(data => setModalData(data))
            .then(() => {
                if (modalRef.current) {
                    modalRef.current.showModal();
                }
            })
            .catch(error => console.log(error));
    }


    if (data.length === 0) {
        return <div className='flex justify-center mt-24 mb-32'>
            <h1 className='text-4xl font-bold text-red-800'>No Data Found For You !!! </h1>
        </div>
    }

    const handleSubmit = (id) => {

        const form = event.target;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const details = form.details.value;

        const updateOb = { quantity, price, details };


        fetch(`https://toy-car-server-chi.vercel.app/myToys/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify(updateOb),
        })
            .then(res => res.json())
            .then(datum => {
                if (datum.modifiedCount > 0) {
                    Swal.fire(
                        'Good Job!',
                        'Data successfully updated.',
                        'success'
                    )

                    const restData = data.filter(d => d._id !== id);
                    const updateData = data.find(d => d._id === id);

                    updateData.price = price;
                    updateData.quantity = quantity;
                    updateData.details = details

                    const newArray = [updateData, ...restData];
                    setData(newArray);

                }
            })
    }



    return (
        <div className="overflow-x-auto mt-8">
            <table className="table">
                {/* head */}
                <thead className='text-base'>
                    <tr>
                        <th></th>
                        <th>Seller Name</th>
                        <th>Toy Name</th>
                        <th>Sub Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        data.map(d => (
                            <tr key={d._id}>
                                <th>
                                    <button className="btn btn-circle" onClick={() => handleDeleteBtn(d._id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </th>
                                <td>{d.seller_name}</td>
                                <td>{d.name}</td>
                                <td>{d.category}</td>
                                <td>{d.price}</td>
                                <td>{d.quantity}</td>
                                <td>
                                    <button className="btn btn-primary btn-md" onClick={() => handleUpdateButton(d._id)}>Update</button>
                                </td>
                            </tr>
                        ))

                    }
                </tbody>
            </table>

            {
                modalData &&

                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle" ref={modalRef}>
                    <form method="dialog" className="modal-box" onSubmit={() => handleSubmit(modalData._id)}>
                        <h3 className="font-bold text-lg text-center text-red-700">{modalData.name}</h3>

                        <div className="card-body">

                            {/* 3rd row */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Available Quantity
                                        </span>
                                    </label>
                                    <input type="text" placeholder="Available Quantity" className="input input-bordered"
                                        name='quantity'
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

                            <div className="modal-action">
                                <button className="btn btn-primary">
                                    Update
                                </button>


                            </div>
                        </div>
                    </form>

                </dialog>


            }

        </div>
    );
};

export default MyToys;
