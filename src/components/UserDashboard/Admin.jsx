/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
/** @format */

import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import plus from '../../images/logos/plus.png';
import AddReview from './AddReview';
import './Admin.css';
import ManageOrder from './ManageOrder';
import Pay from './Pay';

const AdminDashboard = () => {
    const { user, token, admin, logout } = useAuth();
    const [manageOrder, setManageOrder] = useState([]);
    const [show, setShow] = useState(false);

    const [toggleView, setToggleView] = useState({
        showAddService: false,
        manageOrder: true,
        pay: false,
    });

    // Get All orders
    useEffect(() => {
        if (toggleView.manageOrder) {
            fetch(`${process.env.REACT_APP_BACKEND_URL}/my-orders`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${token}`,
                    'content-type': 'application/json',
                    email: user?.email,
                },
            })
                .then((res) => res.json())
                .then((data) => setManageOrder(data));
        }
    }, [toggleView.manageOrder, token, user.email]);

    // Delete a user Order
    const handleDeleteEvent = (id) => {
        console.log('delete clicked', id);
        fetch(`${process.env.REACT_APP_BACKEND_URL}/order/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${token}`,
                'content-type': 'application/json',
                email: user?.email,
            },
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result, 'Task deleted');
                if (result) {
                    const newOrders = manageOrder.filter((task) => task._id !== id);
                    setManageOrder(newOrders);
                }
            });
        setShow(false);
    };

    // toggle add service
    const handleAddService = () => {
        setToggleView({
            ...toggleView,
            showAddService: true,
            manageOrder: false,
            pay: false,
        });
    };
    // toggle add service
    const handlePay = () => {
        setToggleView({
            ...toggleView,
            pay: true,
            showAddService: false,
            manageOrder: false,
        });
    };

    // toggle  manageOrders
    const handleManageOrder = () => {
        setToggleView({
            ...toggleView,
            showAddService: false,
            manageOrder: true,
            pay: false,
        });
    };

    const style = {
        primary: {
            color: '#3f90fc',
        },
        default: {
            color: '#000000',
        },
    };

    return (
        <div className="container-fluid">
            <div className="vn-admin-dashboard px-lg-5 px-0">
                {/* this is user dashboard */}
                {!admin && (
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="admin-controls py-3 d-flex flex-lg-column">
                                <button
                                    className="btn"
                                    onClick={handleManageOrder}
                                    style={toggleView.manageOrder ? style.primary : style.default}
                                >
                                    <img src={plus} style={{ maxWidth: '17px' }} alt="" />
                                    <span>My Orders</span>
                                </button>
                                <button
                                    className="btn"
                                    onClick={handleAddService}
                                    style={
                                        toggleView.showAddService ? style.primary : style.default
                                    }
                                >
                                    <img src={plus} style={{ maxWidth: '17px' }} alt="" />
                                    <span>Add Review</span>
                                </button>
                                <button
                                    className="btn"
                                    onClick={handlePay}
                                    style={toggleView.pay ? style.primary : style.default}
                                >
                                    <img src={plus} style={{ maxWidth: '17px' }} alt="" />
                                    <span>Pay</span>
                                </button>
                                <button
                                    className="btn"
                                    onClick={logout}
                                    style={toggleView.pay ? style.primary : style.default}
                                >
                                    <img src={plus} style={{ maxWidth: '17px' }} alt="" />
                                    <span>Logout</span>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            {toggleView.manageOrder && (
                                <ManageOrder
                                    orders={manageOrder}
                                    deleteHandler={handleDeleteEvent}
                                    show={show}
                                    setShow={setShow}
                                >
                                    {' '}
                                </ManageOrder>
                            )}
                            {toggleView.showAddService && <AddReview />}
                            {toggleView.pay && <Pay />}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
