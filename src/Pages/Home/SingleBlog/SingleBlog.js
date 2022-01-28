import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleBlog.css';

const SingleBlog = () => {
    const [blog,setBlog]= useState({});
    
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://lit-coast-44901.herokuapp.com/blogs/${id}`)
            .then(res => setBlog(res.data))
    }, [id])
    
    return (
        <div>
            <div className="card h-100 container">
            <img src={blog?.img} className="card-img-top w-100 h-25 " alt="..."/>
            <div className="card-body">
                
                <h5 className="card-title">{blog?.title}</h5>
                <p> Date :{blog.date}</p>
                <h5>Price: ${blog?.cost}</h5>
                <p className="card-text">{blog?.description}</p>
                <h5>Location: {blog.location}</h5>
                <h5> Created By : {blog.name}</h5>
                <h5>Category :{blog.category}</h5>
            </div>
            </div>
           
        </div>
    );
};

export default SingleBlog;
