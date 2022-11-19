import { createBrowserRouter } from "react-router-dom";
import Appointment from "../Components/Pages/AppointmentPage/Appointment/Appointment";
import AllUsers from "../Components/Pages/DashBoard/AllUsers/AllUsers";
import DashBoard from "../Components/Pages/DashBoard/DashBoard/DashBoard";
import MyAppointments from "../Components/Pages/DashBoard/MyAppointments/MyAppointments";
import Home from "../Components/Pages/HomePage/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import Nav from "../Components/Pages/SharedPage/Nav/Nav";
import DashBoardLayout from "../Layout/DashBoardLayout";
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
        element: <PrivateRoute> <DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashBoard',
                element: <MyAppointments></MyAppointments>

            },
            {
                path: '/dashBoard/allUsers',
                element: <AllUsers />

            }
        ]

    }
])