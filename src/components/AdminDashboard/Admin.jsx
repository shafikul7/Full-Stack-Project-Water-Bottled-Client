/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
/** @format */

import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import plus from '../../images/logos/plus.png';
import AddService from './AddProduct';
import './Admin.css';
import MakeAdmin from './MakeAdmin';
import ManageOrder from './ManageOrder';
import ManageProducts from './ManageProducts';

const AdminDashboard = () => {
    const { user, token, logout } = useAuth();
    const [managemyOrder, setManageOrder] = useState([]);
    const [manageProducts, setmanageProducts] = useState([]);
    const [show, setShow] = useState(false);

    const [toggleView, setToggleView] = useState({
        showAddService: false,
        managemyOrder: true,
        pay: false,
        manageProducts: false,
    });

    // Get All orders
    useEffect(() => {
        if (toggleView.managemyOrder) {
            fetch(`${process.env.REACT_APP_BACKEND_URL}/orders`, {
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
        if (toggleView.manageProducts) {
            fetch(`${process.env.REACT_APP_BACKEND_URL}/products`, {
                method: 'GET',
            })
                .then((res) => res.json())
                .then((data) => setmanageProducts(data));
        }
    }, [toggleView.manageProducts, toggleView.managemyOrder, token, user.email]);

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
                    const newOrders = managemyOrder.filter((task) => task._id !== id);
                    setManageOrder(newOrders);
                }
            });
        setShow(false);
    };

    // Delete Product
    const handleDeleteProduct = (id) => {
        console.log('delete clicked', id);
        fetch(`${process.env.REACT_APP_BACKEND_URL}/product/${id}`, {
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
                    const newOrders = manageProducts.filter((task) => task._id !== id);
                    setmanageProducts(newOrders);
                }
            });
        setShow(false);
    };

    // toggle add service
    const handleAddService = () => {
        setToggleView({
            ...toggleView,
            showAddService: true,
            managemyOrder: false,
            pay: false,
            manageProducts: false,
        });
    };
    // toggle add service
    const handlePay = () => {
        setToggleView({
            ...toggleView,
            pay: true,
            showAddService: false,
            managemyOrder: false,
            manageProducts: false,
        });
    };

    // toggle  manageOrders
    const handleManageOrder = () => {
        setToggleView({
            ...toggleView,
            showAddService: false,
            managemyOrder: true,
            pay: false,
            manageProducts: false,
        });
    };

    // toggle  manageProducts
    const handleManageProducts = () => {
        setToggleView({
            ...toggleView,
            showAddService: false,
            managemyOrder: false,
            pay: false,
            manageProducts: true,
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
                <div className="row">
                    <div className="col-lg-3 admin_wrapper">
                        <div className="admin-controls py-3 d-flex flex-lg-column">
                            <button
                                className="btn mob_btn"
                                onClick={handleManageOrder}
                                style={toggleView.managemyOrder ? style.primary : style.default}
                            >
                                <img src={plus} style={{ maxWidth: '17px' }} alt="" />
                                <span>Admin Manage Orders</span>
                            </button>
                            <button
                                className="btn mob_btn"
                                onClick={handleAddService}
                                style={toggleView.showAddService ? style.primary : style.default}
                            >
                                <img src={plus} style={{ maxWidth: '17px' }} alt="" />
                                <span>Add Product</span>
                            </button>
                            <button
                                className="btn mob_btn"
                                onClick={handlePay}
                                style={toggleView.pay ? style.primary : style.default}
                            >
                                <img src={plus} style={{ maxWidth: '17px' }} alt="" />
                                <span>Make Admin</span>
                            </button>
                            <button
                                className="btn mob_btn"
                                onClick={handleManageProducts}
                                style={toggleView.manageProducts ? style.primary : style.default}
                            >
                                <img src={plus} style={{ maxWidth: '17px' }} alt="" />
                                <span>Manage Products</span>
                            </button>
                            <button className="btn mob_btn" onClick={logout}>
                                <img src={plus} style={{ maxWidth: '17px' }} alt="" />
                                <span>Logout</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        {toggleView.managemyOrder && (
                            <ManageOrder
                                orders={managemyOrder}
                                deleteHandler={handleDeleteEvent}
                                show={show}
                                setShow={setShow}
                            />
                        )}
                        {toggleView.manageProducts && (
                            <ManageProducts
                                products={manageProducts}
                                deleteHandler={handleDeleteProduct}
                                show={show}
                                setShow={setShow}
                            />
                        )}
                        {toggleView.showAddService && <AddService />}
                        {toggleView.pay && <MakeAdmin />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
