/* eslint-disable no-alert */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
import React from 'react';
import './EventTasks.css';

const SingleOrder = ({ order, deleteTask }) => {
    const deleteHandler = (id) => {
        if (window.confirm('Are you sure you want to delete')) {
            deleteTask(id);
        }
    };
    return (
        <div className="col-lg-6">
            <div className="vn-task">
                <img
                    style={{ maxWidth: '100%', minWidth: '100px' }}
                    src={order.product?.img}
                    alt="order"
                />
                <div className="info">
                    <h5>{order.product?.name}</h5>
                    <h5>{order.status}</h5>
                    <p>{order.product?.description}</p>
                </div>
                <button className="btn btn-secondary" onClick={() => deleteHandler(order._id)}>
                    Cancel Order
                </button>
            </div>
        </div>
    );
};

export default SingleOrder;
