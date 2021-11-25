/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/** @format */

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Order = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const { user, token } = useAuth();

    const history = useHistory();
    const { id } = useParams();

    const [order, setOrder] = useState({
        name: user?.displayName,
        email: user?.email,
        phone: '',
        address: '',
    });

    const onsubmit = (data) => {
        console.log(data);
        fetch(`${process.env.REACT_APP_BACKEND_URL}/order`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${token}`,
                'content-type': 'application/json',
                email: user?.email,
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('task added ', data);
                if (data) {
                    history.push('/dashboard');
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleSubmitTask = (e) => {
        e.preventDefault();

        const newOrder = { ...order };

        console.log(id);
        fetch(`${process.env.REACT_APP_BACKEND_URL}/order`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${token}`,
                'content-type': 'application/json',
                email: user?.email,
            },
            body: JSON.stringify(newOrder),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('task added ', data);
                if (data) {
                    history.push('/dashboard');
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleInputValue = (e) => {
        const newVolunteer = { ...order };
        newVolunteer[e.target.name] = e.target.value;
        setOrder(newVolunteer);
    };

    return (
        <div className="container d-flex align-items-center justify-content-center py-5 my-5">
            <div className="vn-login-register register p-md-5 p-4">
                <h4 className="mb-5">Create a Purchase Order</h4>

                <form action="/registerVolunteer" onSubmit={handleSubmitTask}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Full Name"
                            name="name"
                            value={order.name}
                            onChange={handleInputValue}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Add your Email"
                            name="email"
                            value={order.email}
                            onChange={handleInputValue}
                            disabled
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Add your Address"
                            name="address"
                            value={order.address}
                            onChange={handleInputValue}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Add your phone number"
                            name="phone"
                            value={order.phone}
                            onChange={handleInputValue}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Place Order
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Order;
