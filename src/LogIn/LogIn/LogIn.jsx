import React from 'react';
import img from '../../../src/assets/images.png'

const LogIn = () => {
    return (
        <div className="min-h-screen bg-base-200 w-[1140px] mx-auto rounded-lg mt-20 p-8">

            <div className="flex flex-col md:flex-row md:justify-around md:items-center gap-10 mt-20">

                <div className="text-center lg:text-left w-1/2">
                    <img src={img} alt="" />
                    <h1 className='text-xl md:text-4xl text-slate-700 text-center md:text-left font-bold mt-6'>Log In Here !! </h1>
                    <p className="py-6 mt-3 text-red-600 font-bold">Unlock the door to a world of imagination and adventure</p>
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">

                        <form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
