import React from 'react';
import { Button, Col, Container, FormControl, Image, InputGroup, Row } from 'react-bootstrap';
import fb from '../../../images/social media/fb.png';
import instragram from '../../../images/social media/instragram.png';
import linkedin from '../../../images/social media/linkedin.png';
import youtube from '../../../images/social media/youtube.png';
import './Footer.css';


const Footer = () => {
    return (
        <div className="bg-dark text-white pt-5 pb-2 text-start">

        <Container>
            <Row className="pt-4">
                <Col md={3}>
                    <h4>Travell</h4>
                    <p >208 West 22th Street  <br /> Uttara, Dhaka</p>
                    <p className=" custom-footer-link">Email : travel@info.com</p>
                    <p className="custom-footer-link">Phone : 01950458000</p>
                    <p className=" custom-footer-link">Fax : 01950458000</p>
                    <p >
                        <span><Image src={fb} rounded className="social-media-customize" /></span>
                        <span><Image src={instragram} rounded className="social-media-customize" /></span>

                        <span><Image src={linkedin} rounded className="social-media-customize" /></span>
                        <span><Image src={youtube} rounded className="social-media-customize" /></span>
                    </p>


                </Col>
                <Col md={3}>
                    <h4>LATEST FROM OUR BLOG</h4>

                    <p className=" custom-footer-link">Lorem ipsum dolor sit amet  <br /> October 12, 2020</p>
                    <p className=" custom-footer-link">Lorem ipsum dolor sit amet  <br /> October 12, 2020</p>
                    <p className=" custom-footer-link">Lorem ipsum dolor sit amet<br /> October 12, 2020</p>


                </Col>
                <Col md={3}>
                    <h4>QUICK LINKS</h4>

                    <p className=" custom-footer-link"> <span><i className="fas fa-caret-square-right  me-2 "></i></span> Home</p>
                    <p className=" custom-footer-link"> <span><i className="fas fa-caret-square-right  me-2 "></i></span> About Us</p>
                    <p className=" custom-footer-link"> <span><i className="fas fa-caret-square-right  me-2 "></i></span> Contact Us</p>
                    <p className=" custom-footer-link"> <span><i className="fas fa-caret-square-right  me-2 "></i></span> Home</p>


                </Col>
                <Col md={3}>
                    <h4>NEWSLETTER</h4>
                    <p >Leave us your email address and we contact you back
                    </p>

                    <Col md={12}>
                        <InputGroup className="mb-3 " size="md" >
                            <FormControl
                                placeholder="Enter you email Address"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />

                        </InputGroup>
                    </Col>
                    <Col md={12}>

                        <Button variant="success">Subscribe</Button>
                    </Col>




                </Col>
            </Row>
            
            
            <hr />
            <p className="fs-5 text-center">
                <i className="far fa-copyright pe-3"></i> Created by <span className='footer-end'>Sahara Banu</span> All rights reserved.
            </p>
        </Container>
    </div>
    );
};

export default Footer;