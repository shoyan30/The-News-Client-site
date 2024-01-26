// import React from 'react';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './LeftNav.css';
import { Card, Col, Row } from "react-bootstrap";
import first from '../../../assets/1.png';
import second from '../../../assets/2.png';
import third from '../../../assets/3.png';
import { CiClock1 } from "react-icons/ci";
import moment from "moment";
const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <h4>All Category</h4>
            <div className=" left-nav">
                <button className="btn">National News</button>
                {
                    categories.map(category => <p
                        key={category.id}
                    >
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>

            <div className="mt-4">
                
                <Row xs={1} md={1} lg={1} className="g-4">
                    <Col >
                        <Card>
                            <Card.Img variant="top" src={first} />
                            <Card.Body className=" pt-4 p-0">

                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>

                                <div className="d-flex align-items-center ps-2">
                                    <p><CiClock1 /></p>
                                    <p className="ps-2">{moment().format("MMMM D, YYYY")}</p>
                                </div>
                            </Card.Body>

                        </Card>
                    </Col>

                    <Col >
                        <Card>
                            <Card.Img variant="top" src={second} />
                            <Card.Body className=" pt-4 p-0">

                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                                <div className="d-flex align-items-center ps-2">
                                    
                                    
                                        <p><CiClock1 /></p>
                                        <p className="ps-2">{moment().format("MMMM D, YYYY")}</p>
                                   
                                </div>

                            </Card.Body>


                        </Card>
                    </Col>

                    <Col >
                        <Card>
                            <Card.Img variant="top" src={third} />
                            <Card.Body className="pt-4 p-0">

                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>

                                <div className="d-flex align-items-center ps-2">
                                    <p><CiClock1 /></p>
                                    <p className="ps-2">{moment().format("MMMM D, YYYY")}</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default LeftNav;