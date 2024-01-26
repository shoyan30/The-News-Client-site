// import React from 'react';

import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Login = () => {

    const [error, setError] = useState('')
    const [success, setSucces] = useState('')

    const { signIn } = useContext(AuthContext)
    const Navigate = useNavigate();
    const location = useLocation()
    console.log('Login page location', location);
    const from = location.state?.from?.pathname || '/category/0'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Navigate(from, {replace:true})
                form.reset();
                setSucces('Login Successfull')
                setError(' ')
            })
            .catch(error => {
                console.log(error)
                setError(error.message);
            })
    }
    return (
        <div>
            <h2 className="text-center pb-4">Login your account !!</h2>
            <Container className=" border p-4  w-25 mx-auto">
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" id="email" required placeholder="Enter Email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" id="password" required placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>


                    <Button variant="secondary" type="submit">
                        Login
                    </Button>

                    <br />

                    <Form.Text>
                        Dont’t Have An Account ? <Link to='/register'>Register</Link>
                    </Form.Text>
                    <p className="text-success">{success}</p>
                    <p className="text-danger">{error}</p>
                </Form>


            </Container>
        </div>
    );
};

export default Login;