import { createBrowserRouter } from "react-router-dom";
import Appointment from "../Components/Pages/AppointmentPage/Appointment/Appointment";
import AllUsers from "../Components/Pages/DashBoard/AllUsers/AllUsers";
import AddDoctor from "../Components/Pages/DashBoard/DashBoard/AddDoctor/AddDoctor";
import ManageDoctors from "../Components/Pages/DashBoard/ManageDoctors/ManageDoctors";
import MyAppointments from "../Components/Pages/DashBoard/MyAppointments/MyAppointments";
import Payment from "../Components/Pages/DashBoard/Payment/Payment";
import Home from "../Components/Pages/HomePage/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";

import DashBoardLayout from "../Layout/DashBoardLayout";
import Main from "../Layout/Main";
import AdminRoute from "./AdminRoutes";
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
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>

            },
            {
                path: '/dashBoard/addDoctors',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>

            },
            {
                path: '/dashBoard/ManageDoctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>

            },
            {
                path: '/dashBoard/payment/:id',
                element: <PrivateRoute><Payment></Payment></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)

            }
        ]

    }
])