import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Blogs.css';

const Blogs = () => {
   
    const [blogs,setBlogs] = useState([]);
    
    
    useEffect(()=>{
        axios.get('https://lit-coast-44901.herokuapp.com/blogs')
            .then(res => setBlogs(res.data));
       
    },[])
    return (
        <div className='blogs'>
            <div className="heading">
            <span>Our Blogs</span>
            <h3>Our Latest Posts</h3>
            </div>
            <div className="blogs-slider container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        blogs.length ? blogs.map(blog =><div key={blog._id} className="col">
                        <div className="card h-100">
                          <img src={blog.img} className="card-img-top h-100" alt="..."/>
                          
                       

                          <div className="card-body">
                            <h5 className="card-title">{blog.title}</h5>
                            
                          </div>
                          
                        {/* <div className="product-rating">
                            <div>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star empty"></i>
                                
                            </div>
                            </div> */}
                          <div className="card-footer">
                          <Link to={`/singleBlog/${blog._id}`}><button>More Details</button></Link> 
                          </div>
                        </div>
                      </div>): <div>  <Spinner animation="border" variant="dark" /></div>}
                       
                    
                </div>
            </div>
            
        </div>
    );
};

export default Blogs;




