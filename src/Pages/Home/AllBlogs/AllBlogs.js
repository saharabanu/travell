import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ShowUserExperience from '../Home/ShowUserExperience/ShowUserExperience';

const AllBlogs = () => {
    const [spots, setSpots] = useState([]);
    const [userExperience, setUserExperience] = useState([]);
    const [blogs, setBlogs] = useState([]);

    //Show spots
    useEffect(() => {
        fetch('https://lit-coast-44901.herokuapp.com/spots')
            .then(res => res.json())
            .then(data => setSpots(data));
    }, [spots])

    //UserExperience
    useEffect(() => {
        axios.get('https://lit-coast-44901.herokuapp.com/userExperience')
            .then(res => setUserExperience(res.data));
    }, [])

    //Admin Blog
    useEffect(() => {
        fetch('https://lit-coast-44901.herokuapp.com/addBlog')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    console.log(blogs);

    return (
        <div className="row mx-auto">
            <div className="col-3 bg-dark h-100 py-4">
                <p className="text-white">Top Tour Spot</p>
                {
                    spots?.map((spot) => (
                        <div className="row" key={spot._id}>
                            <div className="col-11 text-light">
                                <img src={spot?.img} className="img-fluid rounded-3 " alt="" />
                                <h1>{spot?.title}</h1>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className="col-9 bg-light h-100">
                <div>
                    <h1>Travelers Experience.</h1>
                    <div className='row mx-auto'>
                         {
                            userExperience?.map(userExpo => <ShowUserExperience
                                key={userExpo._id}
                                userExpo={userExpo}>
                            </ShowUserExperience>)
                        } 
                    </div>
                </div>
                <hr></hr>
                <div className='p-4'>
                    {/* <h1>Admin Blog</h1> */}
                    <div className='row mx-auto'>
                        {/* {
                            blogs?.map(blog => <ShowAdminBlog
                                key={blog._id}
                                blog={blog}>
                            </ShowAdminBlog>)
                        } */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBlogs;