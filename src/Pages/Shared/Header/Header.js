import React from 'react';
import { Carousel } from 'react-bootstrap';
import homeSlider1 from '../../../images/home-slide-1.jpg';
import homeSlider2 from '../../../images/home-slide-2.jpg';
import homeSlider3 from '../../../images/home-slide-3.jpg';
import './Header.css';


const Header = () => {
    return (
        <>
        
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={homeSlider1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First Tour</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={homeSlider2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second Tour</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={homeSlider3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third Tour</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>
    );
};

export default Header;