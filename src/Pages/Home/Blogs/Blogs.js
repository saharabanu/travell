import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Blogs.css';

const Blogs = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/blogs')
            .then(res => setBlogs(res.data))
       
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
                          <img src={blog.img} className="card-img-top" alt="..."/>
                          <div className="icon">
                            <h5><i className="fas fa-calendar"></i>{blog.date}</h5>
                            <h5><i className="fas fa-user"></i>By {blog.name}</h5>
                        </div>
                       

                          <div className="card-body">
                            <h5 className="card-title">{blog.title}</h5>
                            <p className="card-text">{blog.description}</p>
                            <p className="card-text">{blog.cost}</p>
                          </div>
                          <div className="icon">
                            <h5><i className="fas fa-calendar"></i>{blog.category}</h5>
                            <h5><i className="fas fa-user"></i>By {blog.location}</h5>
                        </div>
                        <div className="product-rating">
                            <div>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star empty"></i>
                                
                            </div>
                            </div>
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





{/* <div className="col-md-4 col-12 slide">
                        <div className="image">
                            <img src="" alt="" />
                            <span>burger</span>
                        </div>
                        <div className="content">
                        <div className="icon">
                            <h5><i className="fas fa-calendar"></i>21st May, 2021</h5>
                            <h5><i className="fas fa-user"></i>By Admin</h5>
                        </div>
                       
                        <h5 className="title">Blogs Title Goes Here</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, temporibus!</p>
                        

                        
                    </div> 

                    </div>  */}