import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main from './Layout/Main.jsx';
import Home from './Home/Home/Home.jsx';
import LogIn from './LogIn/LogIn/LogIn.jsx';
import Register from './LogIn/Register/Register.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';
import AddToy from './ToyInfo/AddToy/AddToy.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import AllToy from './ToyInfo/AllToy/AllToy';
import MyToys from './ToyInfo/MyToys/MyToys';
import ErrorPage from './ErrorPage/ErrorPage';
import Blogs from './Home/Blogs/Blogs';
import VisitToyDetails from './Home/VisitToyDetails/VisitToyDetails';
import 'sweetalert2/dist/sweetalert2.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/addToy",
        element: <PrivateRoute> <AddToy></AddToy> </PrivateRoute>
      },
      {
        path: 'allToys',
        element: <AllToy></AllToy>
      },
      {
        path: "myToys",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>
      },

      {
        path: "visitDetails/:id",
        element: <PrivateRoute> <VisitToyDetails></VisitToyDetails> </PrivateRoute>,
        loader: ({ params }) => fetch(`https://toy-car-server-chi.vercel.app/toyDetails/${params.id}`)
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='bg-base-200'>
    <React.StrictMode>
      <AuthProviders>
        <RouterProvider router={router}></RouterProvider>
      </AuthProviders>
    </React.StrictMode>,
  </div>
)
