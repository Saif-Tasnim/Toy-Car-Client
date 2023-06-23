import { Link } from "react-router-dom";
import img from '../../../src/assets/images.png'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";


const NavigationPanel = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire(
                    'Logged Out!',
                    'Successfully Logged Out !',
                    'success'
                )
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${err.message}`,

                })
            })
    }

    const nonUserNav = <div className="flex flex-col gap-4 md:flex-row md:gap-6">
        <li> <Link> Home </Link> </li>
        <li> <Link> Gallery </Link> </li>
        <li> <Link> Blogs </Link> </li>
        <li> <Link> All Toys </Link> </li>


    </div>

    const userNav = <div className="flex flex-col gap-4 md:flex-row md:gap-6">

        <li> <Link to="/"> Home </Link> </li>
        <li> <Link> Blogs </Link> </li>
        <li> <Link> All Toys </Link> </li>
        <li> <Link to='/addToy'> Add A Toy </Link> </li>
        <li> <Link> My Toys </Link> </li>
        <div className="tooltip" data-tip={user?.displayName}>
            <div className="w-12 mr-3">
                <img src={user?.photoURL} className="rounded-md" />
            </div>
        </div>

    </div>

    return (

        <div className="w-full md:w-[1140px] md:mx-auto bg-base-100 flex justify-between md:justify-around items-center p-2 md:p-4">

            <div className="md:navbar-start">

                {/* mobile UI */}
                <div className="dropdown">

                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </label>

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            user ?
                                userNav :
                                nonUserNav
                        }

                    </ul>

                </div>
                <div className="flex items-center">
                    <img src={img} className="w-32 h-16 rounded-lg" alt="" />
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        Car Mania X
                    </Link>
                </div>
            </div>

            <div className=" hidden lg:flex mt-7">
                <ul className="menu menu-horizontal px-1">
                    {
                        user ?
                            userNav :
                            nonUserNav
                    }
                </ul>
            </div>

            {
                user ?

                    <div className="mt-7">
                        <Link to="/" className="btn btn-outline" onClick={handleLogOut}> Log Out </Link>
                    </div>
                    :

                    <div className="mt-7">
                        <Link to="/login" className="btn btn-outline"> Log In </Link>
                    </div>
            }
        </div>

    );
};

export default NavigationPanel;