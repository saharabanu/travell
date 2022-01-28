import React from 'react';
import { Button, Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Dashboard.css';

const Dashboard = () => {
    const { user, logOut,admin } = useAuth();
    const { displayName, photoURL } = user;
    
    return (
        <div className="dashboard-bg">
             
            
 
            <Row className="g-0  ">
                <Col md={2} className="custom-dashboard-link" >
                    
                    <hr className="custom-hr" />
                    <Nav className="flex-column pb-3">
                        <Link to="/home"> <span><i className="fas fa-house-user me-2"></i></span> Home</Link>
                        
                            {!admin && <><h5 className='text-white'>Customer Dashboard</h5>
                            <Link to=""> <span><i className="fas fa-shopping-bag me-2"></i></span>Dashboard</Link>
                            
                            <Link to={`/dashboard/userExperience`}> <span><i className="fas fa-star-half-alt me-2"></i></span> User Experience</Link></>}
                            
                       
                           {admin && <> <h5 className="text-white">Admin Dashboard</h5>
                                
                                <Link to={`/dashboard/addBlog`}> <span><i className="fas fa-plus me-2"></i></span>Add Blog</Link>
                                <Link to={`/dashboard/makeAdmin`}> <span><i className="fas fa-user-cog me-2"></i></span> Make Admin </Link>
                                <Link to={`/dashboard/manageBlogs`}> <span><i className="fab fa-product-hunt me-2"></i></span>Manage Blogs</Link></>}
                            
                        

                    </Nav>
                </Col>
                <Col md={10} className="dashboard-contain-bg">

                    <Row className="g-0 dashboard-header ">
                        <Navbar bg="white" expand="md">
                            <Container>
                                <h3 className="">Dashboard</h3>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="">
                                        <span className="dasha"> <Image className="" src={photoURL} roundedCircle /> {displayName}</span>
                                        <Button  variant="warning" onClick={logOut}  className="text-white dasha">Log Out </Button>

                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </Row>
                    <Outlet></Outlet>
                    
                </Col>
            </Row> 

            
       

        </div >
    );
};

export default Dashboard;