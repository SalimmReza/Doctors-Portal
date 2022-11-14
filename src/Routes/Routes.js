import { createBrowserRouter } from "react-router-dom";
import Appointment from "../Components/Pages/AppointmentPage/Appointment/Appointment";
import DashBoard from "../Components/Pages/DashBoard/DashBoard/DashBoard";
import Home from "../Components/Pages/HomePage/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import Nav from "../Components/Pages/SharedPage/Nav/Nav";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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
                path: '/appointment',
                element: <Appointment></Appointment>
            },

        ]
    },

    {
        path: '/dashBoard',
        element: <PrivateRoute> <DashBoard></DashBoard></PrivateRoute>
    }
])