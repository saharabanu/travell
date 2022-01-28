import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [success, setSuccess] = useState(false);
    
  
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = (data) => {
      
        fetch("https://lit-coast-44901.herokuapp.com/users/admin", {
          method: "PUT",
          headers:{
            'content-type':'application/json'
          },
          
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            if(result.modifiedCount){
              console.log(result)
              setSuccess(true)

            }
            console.log(data)
            });
        
        reset()
      };
    return (
        <div className='admin mx-auto'>
        <h1>Make Admin</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input-field w-50"
            name="email"
            placeholder="Email"
            type="email"
            {...register("email", { required: true })}
          />
          <br />
  
          <input
            className="submit-btn btn btn-danger mt-3 border-0 w-50"
            type="submit"
            value="Make as Admin"
          />
        </form>
        {success && <Alert
      variant="success">Made Admin successfully</Alert>}
      </div>
    );
};

export default MakeAdmin;