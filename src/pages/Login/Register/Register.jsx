// import React from 'react';

import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Register = () => {

    const [error, setError] = useState('')
    const [success, setSucces] = useState('')
    const [accepted, setAccepted] = useState(false);

    const {createUser} = useContext(AuthContext);

    const handleRegistration = event =>{
        event.preventDefault();
        const form = event.target;
       const name = form.name.value;
       const  photo = form.photo.value;
       const email = form.email.value;
       const password = form.password.value;
       const confirm = form.confirm.value

       console.log(name, photo, email, password);

       if(password !== confirm){
        setError('Your Password did not match')
        return
    }

    else if(password.length <6 ){
        setError('Password Must be 6 Charecter Long')
    }

    else if (!/(?=.*[A-Z])/.test(password)) {
        setError('Please add One Uppercase');
        return;
    }

    else if (!/(?=.*[!@#$%*])/.test(password)) {
        setError('Please add a spacial charecter');
        return;
    }

       createUser(email, password)
       .then(result =>{
            const createdUser = result.user;
            console.log(createdUser);
            form.reset(' ');
            setSucces('Registration Successfull')
            setError(' ')
       })
       .catch(error =>{
        console.log(error);
        setError(error.message);
       })
    }

    const handleCheck = event =>{
        setAccepted(event.target.checked)
    }
    return (
        <div>
            <h2 className="text-center pb-4">Register your account</h2>
            <Container className=" border p-4  w-25 mx-auto">
            <Form onSubmit={handleRegistration}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" id="name" required placeholder="Your Name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="text" name="photo" id="photo"  placeholder="Your Photo" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" id="email" required placeholder="Enter Email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" id="password" required placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="confirm" id="confirm" required placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                    onClick={handleCheck}
                     type="checkbox"
                     name="accept" 
                     label={<>Accept <Link to="/tearms">Tearms & condition</Link></>} />
                </Form.Group>


                <Button variant="primary" disabled ={!accepted}type="submit">
                    Register
                </Button>

                <br />

                <Form.Text>
                    Already Have An Account ? <Link to='/login'>Login</Link>
                </Form.Text>
                <Form.Text className="text-success">
                    <p>{success}</p>
                </Form.Text>
                <Form.Text className="text-danger">
                    <p>{error}</p>
                </Form.Text>
            </Form>


        </Container>
        </div>
    );
};

export default Register;