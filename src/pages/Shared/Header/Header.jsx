// import React from 'react';
import moment from 'moment';
import logo from '../../../assets/logo.png'
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container className='mb-4'>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>

            </div>
            <div className='d-flex'>
                <Button variant='danger'>Latest</Button>
                <Marquee>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>


            
        </Container>

    );
};

export default Header;