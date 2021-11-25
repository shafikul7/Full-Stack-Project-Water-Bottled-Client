/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/** @format */
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';

const AddService = () => {
    const { user, token } = useAuth();
    const [status, setStatus] = useState(false);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);

        axios
            .post(
                `${process.env.REACT_APP_BACKEND_URL}/review`,
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
            <h5 className="display-5 py-md-4 py-0">Add Review</h5>
            {status && (
                <div className="alert alert-success text-center" role="alert">
                    New Review added successfully
                </div>
            )}
            <div className="admin-content">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="Name">Name</label>
                    <br />
                    <input
                        {...register('name')}
                        placeholder="Name"
                        className="form-control mt-2"
                        value={user.displayName}
                    />
                    <label htmlFor="Email">Email</label>
                    <br />
                    <input
                        {...register('email')}
                        placeholder="Email"
                        className="form-control mt-2"
                        value={user.email}
                    />
                    <label htmlFor="Prcie">Review</label>
                    <br />
                    <textarea
                        {...register('body')}
                        className="form-control h-25 mt-2"
                        cols="30"
                        rows="10"
                    />
                    <br />
                    <label htmlFor="Prcie">Rating 1-5</label>
                    <input
                        type="number"
                        {...register('rating')}
                        placeholder="1-5"
                        className="form-control mt-2"
                    />
                    <input type="submit" className="btn btn-primary mt-4" />
                </form>
            </div>
        </div>
    );
};

export default AddService;
