import React from 'react';
import img from '../assets/errorPage/3-how-to-create-a-great-404-page-for-the-users.jpg'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
           <div className='flex justify-end mr-16 pt-10'>
           <Link to='/' className='border-2 p-2 rounded-md btn btn-primary'> Go Back To Home </Link>
           </div>
            <div className='flex justify-center pt-6 pb-10'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;