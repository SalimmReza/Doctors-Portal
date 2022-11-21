import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Nav from '../Components/Pages/SharedPage/Nav/Nav';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hooks/Admin';

const DashBoardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Nav></Nav>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><Link to='/dashboard'>My Applications</Link></li>
                        {
                            isAdmin &&
                            <>
                                <li><Link to='/dashBoard/allUsers'>All Users</Link></li>

                                <li><Link to='/dashBoard/addDoctors'>Add Doctor</Link></li>
                                <li><Link to='/dashBoard/manageDoctors'>Manage Doctor</Link></li>

                            </>

                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;