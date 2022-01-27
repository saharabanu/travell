import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Navigation from '../../Shared/Navigation/Navigation';
import Blogs from '../Blogs/Blogs';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Header></Header>
            <Blogs></Blogs>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;