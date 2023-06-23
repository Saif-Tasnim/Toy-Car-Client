import React, { useContext } from 'react';
import img from '../../../src/assets/images.png'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProviders';

const LogIn = () => {

    const { signIn, googleSign } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(res => {
                updateProfile(res.user, {
                    displayName: res.user.displayName,
                    photoURL: res.user.photoURL,
                })
                    .then(() => {
                        Swal.fire(
                            'Logged In!',
                            'Successfully Logged In!',
                            'success'
                        )
                        navigate('/');
                    })

            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${err.message}`,

                })
            })

        form.reset();
    }

    const googleSignIn = () => {
        googleSign()
            .then(res => {
                Swal.fire(
                    'Logged In!',
                    'Successfully Logged In!',
                    'success'
                )
                navigate('/');
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${err.message}`,

                })
            })
    }

    return (
        <div className="min-h-screen bg-base-200 w-[1140px] mx-auto rounded-lg mt-20 p-8">

            <div className="flex flex-col md:flex-row md:justify-around md:items-center gap-10 mt-20">

                <div className="text-center lg:text-left w-1/2">
                    <img src={img} alt="" />
                    <h1 className='text-xl md:text-4xl text-slate-700 text-center md:text-left font-bold mt-6'>Log In Here !! </h1>
                    <p className="py-6 mt-3 text-red-600 font-bold">Unlock the door to a world of imagination and adventure</p>
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm h-[450px] shadow-2xl bg-base-100">
                    <div className="card-body">

                        <form onSubmit={handleLogin}>
                            <div className="form-control">
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
                                <label className="label ">
                                    <Link to="/register" className="label-text-alt link link-hover text-blue-700 font-bold">New to Car Mania X ? </Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <div className="form-control mt-2">
                            <button className="btn btn-primary" onClick={googleSignIn}>Sign In With Google</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
