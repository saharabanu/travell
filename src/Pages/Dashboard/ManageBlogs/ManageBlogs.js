import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Image, Modal, Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const ManageBlogs = () => {
    const { user } = useAuth();
    const [selectedBlog, setSelectedBlog] = useState([])
    const [allBlogs, setAllBlogs] = useState({});

    useEffect(() => {
        axios.get('http://localhost:5000/blogs')
            .then(res => setAllBlogs(res.data))
    }, [])
    const handleDeleteProduct = id => {
        const sure = window.confirm("are you sure to delete this ?");
        if (sure) {
            axios.delete(`http://localhost:5000/blogDelete/${id}`)
                .then(res => {
                    if (res.data.deletedCount) {
                        alert("deleted successful");
                        const updatepBlogs = allBlogs.filter(blog => blog._id !== id);
                        setAllBlogs(updatepBlogs)
                    }
                })
        }
    }
    const getBlogUpdate = id => {
        axios.get(`http://localhost:5000/singleBlog/${id}`)
            .then(res => {
                setSelectedBlog(res.data)
                handleupdatingMOdalShow();
            })
    }

    const handleOnBlurProductForm = e => {
        const field = e.target.name;
        const value = e.target.value;
        const data = { ...selectedBlog };
        data[field] = value;
        setSelectedBlog(data);
    }

    const [showupdatingMOdal, setShowupdatingMOdal] = useState(false);
    const handleupdatingMOdalClose = () => setShowupdatingMOdal(false);
    const handleupdatingMOdalShow = () => setShowupdatingMOdal(true);
    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        handleupdatingMOdalClose();
        axios.put(`http://localhost:5000/blogs/${selectedBlog._id}`, selectedBlog)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    alert("Blog updated successfully")
                    axios.get('http://localhost:5000/blogs')
                        .then(res => setAllBlogs(res.data))


                }
            })


    }
    return (
        <div>
            <Container className="py-5">

                <h4>All Blogs</h4>
                <Row className="heading g-0 py-3 mx-5">

                    <Col md={1} xs={6}><h3 className="mb-0 fs-5 text-start ps-3">Title</h3></Col>
                    <Col md={1} xs={6}><h3 className="mb-0 fs-5">Image</h3></Col>
                    <Col md={1} xs={6}><h3 className="mb-0 fs-5">Cost</h3></Col>
                    <Col md={2} xs={6}><h3 className="mb-0 fs-5">Description</h3></Col>
                    <Col md={1} xs={6}><h3 className="mb-0 fs-5">Info</h3></Col>
                    <Col md={1} xs={6}><h3 className="mb-0 fs-5">Category</h3></Col>
                    <Col md={1} xs={6}><h3 className="mb-0 fs-5">Location</h3></Col>
                    
                    <Col md={1} xs={6}><h3 className="mb-0 text-center fs-5">Update</h3></Col>
                    <Col md={2} xs={6}><h3 className="mb-0 text-center fs-5">Delete</h3></Col>
                </Row>
                {allBlogs.length ? allBlogs.map(blog => <Row
                    key={blog._id}
                    className="user-order-detail g-0 mx-5">
                    <Col md={1} xs={12}><h5 className="mb-0 mt-2 fs-6 text-start ps-3">{blog.title}</h5></Col>
                    <Col md={1} xs={12}> <Image src={blog.img} rounded fluid style={{ height: "50px" }} /></Col>
                    <Col md={1} xs={6}><h5 className="mb-0 mt-2 fs-6 ">{blog.cost} Tk</h5></Col>
                    <Col md={2} xs={6}><h5 className="mb-0 mt-2 fs-6 ">{blog.description.slice(0, 50)} </h5></Col>
                    <Col md={1} xs={12}><p className="mb-0 mt-2 fs-6 ">{blog.name} </p></Col>
                    <Col md={1} xs={12}><p className="mb-0 mt-2 fs-6 ">{blog.category} </p></Col>
                    <Col md={1} xs={12}><p className="mb-0 mt-2 fs-6 ">{blog.location} </p></Col>
                    <Col md={1} xs={6}>
                        <h5 className="my-2 text-center" onClick={() => getBlogUpdate(blog._id)}>
                        <Button variant="outline-dark" className=" ms-3" >Update</Button></h5>
                    </Col>
                    <Col md={1} xs={6}>
                        <h5 className="my-2 text-center"><Button variant="danger" className=" ms-3" onClick={() => handleDeleteProduct(blog._id)}>Delete <i className="fas fa-trash"  ></i></Button></h5>
                    </Col>

                </Row>)
                    : <p className="fs-5"> No Blog</p>
                }
            </Container>
            <Modal show={showupdatingMOdal} onHide={handleupdatingMOdalClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Hello {user.displayName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleUpdateSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" className="mb-3" >
                                <Form.Control
                                    size="lg"

                                    type="text"
                                    defaultValue={selectedBlog.title}
                                    name="title"
                                    onBlur={handleOnBlurProductForm}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="12" className="mb-3" >
                                <Form.Control
                                    size="lg"

                                    type="text"
                                    defaultValue={selectedBlog.img}
                                    name="img"
                                    onBlur={handleOnBlurProductForm}

                                />
                            </Form.Group>
                            <Form.Group as={Col} md="12" className="mb-3" >
                                <Form.Control
                                    size="lg"

                                    type="number"
                                    defaultValue={selectedBlog.cost}
                                    min="0"
                                    max="9999999"
                                    name="cost"
                                    onBlur={handleOnBlurProductForm}

                                />
                            </Form.Group>


                        </Row>


                        <Form.Group className="mb-3" as={Col} md="12" controlId="exampleForm.ControlTextarea1">

                            <Form.Control as="textarea"
                                rows={3}
                                defaultValue={selectedBlog.description}
                                name="description"
                                onBlur={handleOnBlurProductForm}

                            />
                        
                        </Form.Group>
                        <Form.Group className="mb-3" as={Col} md="12" controlId="exampleForm.ControlTextarea1">

                            <Form.Control as="textarea"
                                rows={3}
                                defaultValue={selectedBlog.location}
                                name="location"
                                onBlur={handleOnBlurProductForm}

                            />
                            <Form.Control as="textarea"
                                rows={3}
                                defaultValue={selectedBlog.name}
                                name="name"
                                onBlur={handleOnBlurProductForm}

                            />
                            <Form.Control as="textarea"
                                rows={3}
                                defaultValue={selectedBlog.category}
                                name="category"
                                onBlur={handleOnBlurProductForm}

                            />
                        
                        </Form.Group>
                        <p className="text-center my-3"> <Button type="submit" variant="danger" className="banner-btn"> Update Blog</Button></p>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleupdatingMOdalClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ManageBlogs;