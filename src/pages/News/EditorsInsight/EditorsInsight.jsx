// import React from 'react';

import { Card, Col, Row } from "react-bootstrap";
import first from '../../../assets/1.png';
import second from '../../../assets/2.png';
import third from '../../../assets/3.png';
import { CiClock1 } from "react-icons/ci";
import moment from "moment";
const EditorsInsight = () => {
    return (
        <div className="mt-4">
            <h2>Editors Insight</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
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
    );
};

export default EditorsInsight;