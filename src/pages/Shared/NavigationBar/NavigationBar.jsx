// import React from 'react';

import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from 'react-icons/fa';
import { Link  } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
// import AuthProvider from "../../../provider/AuthProvider";

const NavigationBar = () => {

    

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <Container className="mb-4">
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="/">
                                <Link className='text-decoration-none text-black fs-5' to="/">Home</Link>
                            </Nav.Link>
                            <Nav.Link className="text-black fs-5" href="/about">About</Nav.Link>
                            <Nav.Link className="text-black fs-5" href={"/Internationalnews"}>News</Nav.Link>
                        </Nav>
                        <Nav className='d-flex align-items-center'>
                            {user && <Nav.Link href="#deets">
                                <FaUserCircle className='fs-2'></FaUserCircle>
                            </Nav.Link>
                            }
                            <Nav.Link >
                                {user ? <Button onClick={handleLogOut} variant="secondary">Log Out</Button> :
                                    <Link to='/login'><Button  variant="secondary">Login</Button></Link> &&
                                    <Link to='/register'><Button variant="secondary">Registration</Button></Link>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default NavigationBar;