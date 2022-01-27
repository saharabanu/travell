import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddBlog.css';


const AddBlog = () => {
    const { register, handleSubmit,reset } = useForm();

    const onSubmit = data =>{
        fetch('http://localhost:5000/blogs',{
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('blog added successfully')
            }
            console.log(data)
            reset();
        })
    }
    return (
        <div className="add-service">
            <h2>Add A Blog</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="dashboard-from ms-3">

                        <input placeholder="Blog Title" type="text" {...register("title", { required: true })} />
                        <input placeholder="Cost of travell" type="number"{...register("cost", { required: true, min: "0", max: "999999" })} />
                        <input placeholder=" Blog IMG Url Only" type="text" {...register("img", { required: true })} />
                        
                        <textarea placeholder="Blog Description" type="text" {...register("description", { required: true })} ></textarea>
                        <input placeholder="Bloger name or info" type="text" {...register("name", { required: true })} />
                        <input placeholder="date" type="date" {...register("date", { required: true })} />
                        <input placeholder="location" type="text" {...register("location", { required: true })} />
                        <input placeholder="Blog category" type="text" {...register("category", { required: true })} />
                        

                        <Button  className="add-button"type="submit" variant="dark">Add Product</Button>
                    </form>
        </div>
    );
};

export default AddBlog;