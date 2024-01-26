/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react';
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import './NewsCard.css';
import moment from "moment";
import { FaEye, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
    const { _id, title, image_url, details, author, total_view, rating } = news;
    return (
        <Card className="mb-4">
            <Card.Header className="d-flex CardHeader">
                <Image className="authorImg" src={author.img} roundedCircle />


                <div className="ps-3 flex-grow-1">
                    <p className="mb-0">{author.name}</p>
                    <p><small>{moment(author.published_date).format('yyyy-mm-dd')}</small></p>
                </div>
                <div>
                    <CiBookmark /> <CiShare2 />
                </div>


            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url}></Card.Img>
                <Card.Text>
                    {details.length < 250 ? <>{details}</> :
                        <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Read More</Link></>
                    }
                </Card.Text>

            </Card.Body>

            <Card.Footer className="text-muted d-flex">
                <Rating className="me-2" placeholderRating={rating.number}
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                    fullSymbol={<FaStar></FaStar>}

                ></Rating>
                <div className="flex-grow-1">
                    <span>{rating.number}</span>
                </div>
                <div>
                    <FaEye></FaEye> {total_view}
                </div>
            </Card.Footer>
        </Card >
    );
};

export default NewsCard;