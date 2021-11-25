/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/** @format */
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';

const MakeAdmin = () => {
    const { user, token } = useAuth();
    const [status, setStatus] = useState(false);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);

        axios
            .post(
                `${process.env.REACT_APP_BACKEND_URL}/users/admin`,
                {
                    ...data,
                },
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                        'content-type': 'application/json',
                        email: user?.email,
                    },
                }
            )
            .then((res) => {
                if (res.data.insertedId) {
                    setStatus(!status);
                    reset();
                }
            });
    };

    return (
        <div className="admin-add-event">
            <h5 className="display-5 py-md-4 py-0">Make Admin</h5>
            {status && (
                <div className="alert alert-success text-center" role="alert">
                    New Admin added successfully
                </div>
            )}
            <div className="admin-content">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="Email">Email</label>
                    <br />
                    <input
                        {...register('email')}
                        placeholder="Email"
                        className="form-control mt-2"
                    />

                    <br />

                    <input type="submit" className="btn btn-primary mt-4" />
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;
