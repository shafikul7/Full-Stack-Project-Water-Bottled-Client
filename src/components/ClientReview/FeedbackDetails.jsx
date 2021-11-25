/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import './FeedbackDetails.css';

const FeedbackDetails = ({ feedback }) => (
    <Col xs={12} md={6} lg={4} className="text-center my-2">
        <Card
            // onDoubleClick={() => { }}
            className="feedback-details-card"
            style={{ width: '90%', margin: 'auto' }}
        >
            <Card.Body>
                <div className="d-flex feedback-top">
                    {/* <img
                        style={{ width: '64px', height: '64px', borderRadius: '50%' }}
                        src={avatar}
                        alt=""
                    /> */}
                    <div className="reviews_content ms-4 text-start">
                        <div className="ml-3 mt-1">
                            <h5 style={{ fontSize: '20px', fontWeight: '600' }}>{feedback.name}</h5>
                            <ReactStars
                                count={5}
                                value={feedback.rating}
                                isHalf={true}
                                edit={false}
                                size={24}
                                activeColor="#ffd700"
                            />
                            {/* <p style={{ fontSize: '16px', fontWeight: '600' }}>{feedback.rating}</p> */}
                        </div>
                        <div className="feedback-description">
                            <p className="mt-2" style={{ fontSize: '16px', fontWeight: '400' }}>
                                {' '}
                                {feedback.body}
                            </p>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    </Col>
);

export default FeedbackDetails;
