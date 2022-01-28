import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';

const AllUserExperiences = () => {
    const { user } = useAuth();
    const [allOrders, setAllOrders] = useState([])
    const [orderUpdate, setOrderUpdate] = useState([]);
    const [updateModal, setUpdateModal] = useState(false);
    const closeUpdateModal = () => setUpdateModal(false);
    const showUpdateModal = () => setUpdateModal(true);
    const handleUpdate = (data) => {
        setOrderUpdate(data)
        showUpdateModal();
    }
    const { register, handleSubmit, } = useForm();
    const handleStatusUpdate = data => {
        const id = orderUpdate._id;

        axios.put(`https://lit-coast-44901.herokuapp.com/experienceStatusUpdate/${id}`, data)
            .then(res => {
                if (res.data.modifiedCount) {
                    closeUpdateModal()
                    axios.get('https://lit-coast-44901.herokuapp.com/userExperience')
                        .then(res => {
                            setAllOrders(res.data)
                            alert("Status  updated successful");
                        })
                }
            })
    };
    const handleOrderDelete = (id) => {
        const sure = window.confirm("are you sure to delete this ?");
        if (sure) {
            axios.delete(`https://lit-coast-44901.herokuapp.com/experienceDelete/${id}`)
                .then(res => {
                    if (res.data.deletedCount) {
                        alert("deleted successful");
                        const updateOrders = allOrders.filter(order => order._id !== id);
                        setAllOrders(updateOrders)
                    }
                })
        }
    }
    useEffect(() => {
        axios.get('https://lit-coast-44901.herokuapp.com/userExperience')
            .then(res => setAllOrders(res.data))
    }, [])
    const handleOrderCatagories = category => {

        axios.get(`https://lit-coast-44901.herokuapp.com/catagoriesexperience?status=${category}`)
            .then(res => {
                setAllOrders(res.data)
            })
    }
    return (
        <div>
            <Container className="py-2 px-5">

                <div className="text-start mt-3 ">
                    <Button variant="light" className="mx-3 mb-4 fs-5" onClick={() => handleOrderCatagories("")}>All Orders</Button>
                    <Button variant="light" className="mx-3 mb-4 fs-5" onClick={() => handleOrderCatagories("pending")}>Pending user experience</Button>
                    <Button variant="light" className="mx-3 mb-4 fs-5" onClick={() => handleOrderCatagories("approved")}>Shipped user experience</Button>
                </div>
                <Row className="heading g-0 py-3">
                    <Col md={3} xs={6}><h3 className="mb-0 fs-5">User Name & Email</h3></Col>
                    <Col md={1} xs={6}><h3 className="mb-0 fs-5">Blog Title</h3></Col>
                    <Col md={1} xs={6}><h3 className="mb-0 fs-5">Blog Date</h3></Col>
                    <Col md={1} xs={6}><h3 className="mb-0 fs-5">Blog cost</h3></Col>
                    <Col md={1} xs={6}><h3 className="mb-0 fs-5">Status</h3></Col>
                    <Col md={1} xs={6}><h3 className="mb-0 text-center fs-5">Action</h3></Col>
                    <Col md={2} xs={6}><h3 className="mb-0 text-center fs-5">Delete</h3></Col>
                </Row>
                {allOrders.length ? allOrders.map(order => <Row
                    key={order._id}
                    className="user-order-detail g-0">
                    <Col md={3} xs={12}><h5 className="mb-0 mt-2 fs-6 text-start ps-3"> Name: {order?.name} <br />Email: {order.email}</h5></Col>
                    <Col md={1} xs={12}><h5 className="mb-0 mt-2  fs-6 ">{order?.title}</h5></Col>
                    <Col md={1} xs={12}><h5 className="mb-0 mt-2  fs-6 ">{order.date}</h5></Col>
                    <Col md={2} xs={6}><h5 className="mb-0 mt-2 fs-6 ">{order.expense} Tk</h5></Col>
                    <Col md={1} xs={6}><h5 className="mb-0 mt-2 fs-6 ">{order.status} </h5></Col>
                    <Col md={1} xs={6}>
                        <h5 className="my-2 text-center"><Button onClick={() => handleUpdate(order)} variant="outline-dark" className=" ms-3" >Action</Button></h5>
                    </Col>
                    <Col md={2} xs={6}>
                        <h5 className="my-2 text-center"><Button variant="danger" className=" ms-3" onClick={() => handleOrderDelete(order._id)}>Delete <i className="fas fa-trash"  ></i></Button></h5>
                    </Col>
                </Row>)
                    : <p className="text-center fs-5"> No user Experience</p>
                }
            </Container>
            <Modal show={updateModal} onHide={closeUpdateModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Hello {user.displayName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(handleStatusUpdate)}>
                        <h2 className="fs-3 pb-3">Product :{orderUpdate.productName}</h2>
                        <label className="me-3 fs-5 pb-3">Status : </label>
                        <select {...register("Status")} className="p-1 fs-5">
                            <option value="pending">Pending</option>
                            <option value="shipped">Shipped</option>
                        </select>

                        <Button variant="primary" type="submit" style={{ padding: "5px", marginLeft: "20px", marginTop: "-10px" }}>
                            Save Changes
                        </Button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeUpdateModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
            }

export default AllUserExperiences;