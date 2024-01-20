// import React from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Button, ListGroup } from "react-bootstrap";
import QZone from "../QZone/QZone";
import bg from '../../../assets/bg.png'
import './RightNav.css';

const RightNav = () => {
    return (
        <div>
            <div className="mt-4">
                <h4>Login With</h4>
                <Button className="mb-2 w-75" variant="outline-primary"><FaGoogle /> Login With Google</Button>
                <Button className="w-75" variant="outline-secondary"> <FaGithub /> Login With Github</Button>
            </div>

            <div className="mt-4">
                <h4>Find Us On</h4>
                <ListGroup variant="flush">
                    <ListGroup.Item><FaFacebook />  Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter />  Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram />  Instragram</ListGroup.Item>

                </ListGroup>
            </div>
            <div className="mt-4">
                <QZone></QZone>
            </div>

            <div className="mt-4" style={{
                width: '310px',
                height: '509px',
                backgroundImage: `url(${bg})`
            }}>
                <div className="text-center bgimge">
                    <h1>Create an Amazing Newspaper</h1>
                    <p className="p-4">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>

                    <Button variant="danger">Learn More</Button>
                </div>
            </div>

            
        </div>
    );
};

export default RightNav;