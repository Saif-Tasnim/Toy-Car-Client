import React, { useEffect, useRef, useState } from 'react';
import TableFormat from './TableFormat';
import { Rating } from '@smastrom/react-rating';
import { Link } from 'react-router-dom';
import useTitle from '../../Hook/useTitle';


const AllToy = () => {

    const [data, setData] = useState([])
    const [modalData, setModalData] = useState(null);
    const modalRef = useRef(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredToys, setFilteredToys] = useState([]);
    useTitle("All Toy")

    useEffect(() => {
        fetch('https://toy-car-server-chi.vercel.app/toyDetails')
            .then(res => res.json())
            .then(datum => setData(datum));
    }, [])

    useEffect(() => {
        const filteredResults = data.filter((toy) =>
            toy.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredToys(filteredResults);
    }, [searchQuery, data]);


    const handleDetails = id => {
        fetch(`https://toy-car-server-chi.vercel.app/toyDetails/${id}`)
            .then(res => res.json())
            .then(data => setModalData(data))
            .then(() => {
                if (modalRef.current) {
                    modalRef.current.showModal();
                }
            })
            .catch(error => console.log(error));
    };




    return (
        <div className='mt-20'>
            <h1 className='text-4xl font-bold text-emerald-400 text-center mb-6'> List Of All Toys </h1>

            <h4 className='text-xl text-blue-500 text-center mb-16'>Total data : {data.length}</h4>

            {/* search features  */}
            <div className='ml-20 mb-16'>
                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className='w-1/4 h-[40px] p-3' placeholder='Search Through Toy Name' />

            </div>

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
                            filteredToys.length > 0 ?
                                filteredToys.map(d => (
                                    <TableFormat
                                        key={d._id}
                                        d={d}
                                        handleDetails={handleDetails}
                                    />
                                ))

                                : data.map(d => <TableFormat
                                    key={d._id}
                                    d={d}
                                    handleDetails={handleDetails}
                                ></TableFormat>)
                        }
                    </tbody>

                </table>
            </div>

            {
                modalData &&

                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle" ref={modalRef}>
                    <form method="dialog" className="modal-box">
                        <h3 className="font-bold text-lg text-center text-red-700">{modalData.name}</h3>

                        <div>
                            <p className="py-4"> Seller Name :  {modalData.seller_name}</p>
                            <p className="py-4"> Seller Email :  {modalData.seller_email}</p>
                            <p className="py-4"> Toy Sub Category :  {modalData.category}</p>
                            <p className="py-4"> Toy Price:  {modalData.price}</p>
                            <p className="py-4"> Available Quantity:  {modalData.quantity}</p>
                            <div>  <p className="py-4 flex gap-3"> Toy Rating:  <Rating
                                style={{ maxWidth: 120 }}
                                value={modalData.rating}
                                readOnly
                            /> </p></div>

                            <p className="py-4"> Toy Details:  {modalData.details}</p>
                            <img src={modalData.photo} alt="" />

                        </div>

                        <div className="modal-action">
                            <button className="btn" >
                                Close
                            </button>
                        </div>
                    </form>
                </dialog>


            }

        </div >
    );
};

export default AllToy;