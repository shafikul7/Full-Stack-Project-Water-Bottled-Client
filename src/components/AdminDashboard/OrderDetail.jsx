/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */
/** @format */
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import trash from '../../images/logos/trash-2.png';
import Loader from '../../Spinner';

const OrderDetail = ({ order, deleteHandler, show, setShow }) => {
    const { user, token } = useAuth();
    const [pending, setPending] = useState(order.status.toLowerCase() === 'pending');
    const [loading, setLoading] = useState(false);
    const deleteorder = (id) => {
        if (window.confirm('Are you sure you want to delete')) {
            deleteHandler(order._id);
        }
    };
    const statusHandler = (e) => {
        setLoading(true);
        setPending(!pending);
        fetch(`${process.env.REACT_APP_BACKEND_URL}/order/${order._id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${token}`,
                'content-type': 'application/json',
                email: user?.email,
            },
            body: JSON.stringify({
                status: e.target.value,
                id: order._id,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    setLoading(false);
                }
            });
    };
    return (
        <>
            <tr style={{ fontWeight: '400' }} className="text-center">
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.phone}</td>
                <td>{order.address}</td>

                <td>
                    {loading ? (
                        <Loader />
                    ) : (
                        pending && (
                            <Form.Control
                                style={{ width: '137px', textAlign: 'center' }}
                                as="select"
                                className="text-danger"
                                onChange={statusHandler}
                            >
                                <option selected style={{ color: '#FF4545' }}>
                                    Pending
                                </option>
                                <option style={{ color: '#009444' }}>Shipped</option>
                            </Form.Control>
                        )
                    )}
                    {!pending && (
                        <Form.Control
                            style={{ width: '137px', textAlign: 'center' }}
                            className="text-success"
                            as="select"
                            onChange={statusHandler}
                        >
                            <option style={{ color: '#FF4545' }}>Pending</option>
                            <option selected style={{ color: '#009444' }}>
                                Shipped
                            </option>
                        </Form.Control>
                    )}
                </td>
                <td className="text-center">
                    <button className="btn btn-danger" onClick={deleteorder}>
                        <img src={trash} alt="delete" style={{ width: '21px' }} />
                    </button>
                </td>
            </tr>
        </>
    );
};

export default OrderDetail;
