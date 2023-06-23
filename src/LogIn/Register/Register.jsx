import React from 'react';
import img from '../../../src/assets/images.png'
import { Link } from 'react-router-dom';

const Register = () => {

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name , photo , email , password);
    }

    return (
        <div className="min-h-screen bg-base-200 w-[1140px] mx-auto rounded-lg mt-20 p-8">

            <div className="flex flex-col md:flex-row md:justify-around md:items-center gap-10">

                <div className="text-center lg:text-left mt-7">
                    <img src={img} alt="" />
                    <h1 className='text-xl md:text-4xl text-slate-700 text-center md:text-left font-bold mt-6'>Register Now !! </h1>
                    <p className="py-6 mt-3 text-red-600 font-bold">Unlock the door to a world of imagination and adventure</p>
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm h-[550px] shadow-2xl bg-base-100">
                    <div className="card-body">

                        <form onSubmit={handleSignUp}>
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text">Name </span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" name="name" required />
                            </div>
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="photo URL" className="input input-bordered" name="photo" required />
                            </div>
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                                <label className="label">
                                    <Link to="/login" className="label-text-alt link link-hover text-blue-600 font-bold"> Already Have An Account ?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up </button>
                            </div>
                        </form>
                   

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;