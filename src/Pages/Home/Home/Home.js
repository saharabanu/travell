import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Navigation from '../../Shared/Navigation/Navigation';
import AllBlogs from '../AllBlogs/AllBlogs';
import Blogs from '../Blogs/Blogs';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Header></Header>
            <AllBlogs></AllBlogs>
            <Blogs></Blogs>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;