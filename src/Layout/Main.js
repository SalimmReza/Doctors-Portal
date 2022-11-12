import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Pages/SharedPage/Footer/Footer';
import Nav from '../Components/Pages/SharedPage/Nav/Nav';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;