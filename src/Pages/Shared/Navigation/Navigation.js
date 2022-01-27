import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { SidebarData } from '../../SidebarData/SidebarData';
import './Navigation.css';

const Navigation = () => {
    const [sidebar, setSidebar]= useState(false);
    const showSidebar = ()=>setSidebar(!sidebar);
    return (
        <div className="navigation-container bg-dark text-white">
            <div className="navigation container">
                <div className="row">
                    <div className="col-md-2">
                        <div className="nav-image">
                            <img  className="w-100"src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/logo.png" alt="" />
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
                                to="/login"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                >
                                Login
                                </NavLink>
                                <IconContext.Provider value={{color:'white'}}>
                                <NavLink to="#" className="navigation-items">
                                <FaIcons.FaBars onClick={showSidebar }/>
                                </NavLink>
                                    <nav className={sidebar? 'nav-menu active' : 'nav-menu'}>
                                        <ul className="nav-menu-items" onClick={showSidebar }>
                                            <li className="navbar-toggle">
                                                <NavLink to="#" className="menu-bars navigation-items"><AiIcons.AiOutlineClose/></NavLink>
                                                {SidebarData.map((item,index)=>{
                                                    return(
                                                       <li key={index} className={item.cName}>
                                                           <NavLink to={item.path} className="menu-bars navigation-items">
                                                               {item.icon}
                                                               <span>{item.title}</span>
                                
                                </NavLink>
                                                       </li>
                                                    )
                                                })}

                                            </li>
                                        </ul>
                                    </nav>
                                    </IconContext.Provider>
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