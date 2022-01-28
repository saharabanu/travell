import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Navigation.css';

const Navigation = () => {
    const {user,logOut} = useAuth();
    const [sidebar, setSidebar]= useState(false);
    const showSidebar = ()=>setSidebar(!sidebar);
    return (
        <div className="navigation-container bg-dark text-white">
            <div className="navigation container">
                <div className="row">
                    <div className="col-md-2">
                        <div className="nav-image">
                            <img className="w-100 h-50" src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/logo.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-10">
                            <div className="menu-items">
                                <div className='d-flex justify-content-end align-items-center'>
                                    <div className="nav-items">
                                    <NavLink className="navigation-items"
                                to="/home"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                >
                                Home
                                </NavLink>
                                    <NavLink className="navigation-items"
                                to="/aboutUs"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                >
                                About Us
                                </NavLink>
                                    
                             {user?.email ? <>
                                    <NavLink className="navigation-items"
                                to="/dashboard"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                >
                                Dashboard
                                </NavLink>
                                
                                <button onClick={logOut}>Logout</button>
                                </>
                                :<NavLink className="navigation-items"
                                to="/login"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                >
                                Login
                                </NavLink>}
                                <h4>{ user?.displayName}</h4>

                                
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;