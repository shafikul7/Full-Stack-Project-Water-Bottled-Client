/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Loader from '../../Spinner';
import './EventTasks.css';
import SingleOrder from './SingleOrder';

const MyOrders = () => {
    const { allContext, data } = useAuth();
    const { user } = allContext;
    const [mainData, setMainData] = data;
    const [loading, setLoading] = useState(false);

    console.log();
    const [myOrders, setmyOrder] = useState([]);

    // Filtering order by user email
    useEffect(() => {
        setLoading(true);
        fetch(`${process.env.REACT_APP_BACKEND_URL}/my-orders`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                email: user?.email,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                setmyOrder([...data]);
            })
            .catch((err) => console.log(err));
    }, [user.email]);

    // Delete a task
    const deleteTask = (id) => {
        setLoading(true);
        fetch(`${process.env.REACT_APP_BACKEND_URL}/order/${id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result, 'Task deleted');
                if (result) {
                    setLoading(false);
                    const newOrders = [...myOrders].filter((order) => order._id !== id);
                    setmyOrder(newOrders);
                }
            });
    };

    return (
        <div className="container py-5 my-5">
            <div className="vn-event-tasks">
                <h1>My Orders</h1>
                {loading ? (
                    <Loader />
                ) : (
                    <div className="row">
                        {myOrders.length > 0 ? (
                            myOrders.map((order) => (
                                <SingleOrder
                                    order={order}
                                    key={order._id}
                                    deleteTask={deleteTask}
                                />
                            ))
                        ) : (
                            <div style={{ maxWidth: '400px', margin: 'auto' }}>
                                <div className="alert alert-danger text-center">
                                    no orders available
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyOrders;
