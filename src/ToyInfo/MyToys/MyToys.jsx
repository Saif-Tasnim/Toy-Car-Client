import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user, loading } = useContext(AuthContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myToys?email=${user.email}`)
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
                fetch(`http://localhost:5000/myToys/${id}`, {
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


    if (data.length === 0) {
        return <div className='flex justify-center mt-24 mb-32'>
            <h1 className='text-4xl font-bold text-red-800'>No Data Found For You !!! </h1>
        </div>
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
                                <td>{d.seller_email}</td>
                                <td>{d.category}</td>
                                <td>{d.price}</td>
                                <td>
                                    <button className="btn btn-primary btn-md">Update</button>
                                </td>
                            </tr>
                        ))

                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;
