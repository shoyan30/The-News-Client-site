import {  Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";

import Category from "../pages/Home/category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Tearms from "../pages/Shared/Tearms/Tearms";
import About from "../pages/About/About";
import Home from "../pages/Home/Home/Home";

const router = createBrowserRouter([

    {
        path: '/',
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/Internationalnews',
                element: <Navigate to={`/category/0`}></Navigate>
            },
            {
                path:'/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/register',
                element: <Register></Register>
            },

            {
                path: '/tearms',
                element:<Tearms></Tearms>
            }
        ]
    },
    {
        path: '/category',
        element: <Main></Main>,
        children: [

            
        
            {
                path:':id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },

    {
        path:'/news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router;