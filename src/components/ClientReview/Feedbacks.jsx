/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import loader from '../../images/logos/loader.gif';
import FeedbackDetails from './FeedbackDetails';

const Feedbacks = () => {
    const [allFeedbacks, setAllFeedbacks] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/reviews`)
            .then((res) => res.json())
            .then((result) => {
                setAllFeedbacks(result.slice(-6));
            });
    }, []);

    return (
        <div className="mt-0 mb-5">
            <Container>
                <h4
                    style={{ color: '#2d2d2d', fontSize: '34px', fontWeight: '600' }}
                    className="reviews_heading font-weight-bold text-center"
                >
                    Client <span className="brand-text head-color">Reviews</span>
                </h4>

                <Row xs={12} className="mt-4">
                    {allFeedbacks.length < 1 && (
                        <img src={loader} style={{ width: '300px', margin: 'auto' }} />
                    )}
                    {allFeedbacks.map((feedback, index) => (
                        <FeedbackDetails key={feedback._id} feedback={feedback} />
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Feedbacks;
