import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/HomePage/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Nav from "../Components/Pages/SharedPage/Nav/Nav";
import Main from "../Layout/Main";

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
            }
        ]

    }
])