/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import OrderDetail from './OrderDetail';

const ManageOrder = ({ orders, deleteHandler, show, setShow }) => {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(orders);
    return (
        <div className="admin-vol-list">
            <h5 className="display-5 py-lg-4 pb-2">Admin Manage Orders</h5>
            <div className="admin-content">
                <table>
                    <thead>
                        <tr className="text-center">
                            <th>User Name</th>
                            <th>Email ID</th>
                            <th>phone</th>
                            <th>address</th>
                            <th>Order Status</th>
                            <th>Cencel Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length > 0 ? (
                            orders.map((order) => (
                                <OrderDetail
                                    key={order._id}
                                    order={order}
                                    deleteHandler={deleteHandler}
                                    show={show}
                                    setShow={setShow}
                                />
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6">
                                    <div className="alert alert-warning text-center" role="alert">
                                        No Order found
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrder;
