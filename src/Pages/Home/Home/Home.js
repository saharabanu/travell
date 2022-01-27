import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Navigation from '../../Shared/Navigation/Navigation';
import Blogs from '../Blogs/Blogs';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Header></Header>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;