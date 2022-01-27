import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h4 className='text-danger fw-bold'>Page Not Found</h4>
            <Link to="/"><Button>Back Home</Button></Link>
        </div>
    );
};

export default NotFound;