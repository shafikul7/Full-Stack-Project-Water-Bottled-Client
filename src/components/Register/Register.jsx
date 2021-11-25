/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
import {
    Alert,
    Button,
    CircularProgress,
    Container,
    Grid,
    TextField,
    Typography
} from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const { value } = e.target;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };
    const handleLoginSubmit = (e) => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    };
    return (
        <Container>
            <Grid>
                <Grid item xs={12} md={6} className="m-auto">
                    <div className="register_wrapper my-5">
                        <Typography variant="body1" gutterBottom>
                            <h2>Register</h2>
                        </Typography>
                        {!isLoading && (
                            <form onSubmit={handleLoginSubmit}>
                                <TextField
                                    sx={{ width: '100%', marginTop: "15px" }}
                                    id="standard-basic"
                                    label="Your Name"
                                    name="name"
                                    onBlur={handleOnBlur}
                                    variant="standard"
                                />
                                <TextField
                                    sx={{ width: '100%', marginTop: "15px" }}
                                    id="standard-basic"
                                    label="Your Email"
                                    name="email"
                                    type="email"
                                    onBlur={handleOnBlur}
                                    variant="standard"
                                />
                                <TextField
                                    sx={{ width: '100%', marginTop: "15px" }}
                                    id="standard-basic"
                                    label="Your Password"
                                    type="password"
                                    name="password"
                                    onBlur={handleOnBlur}
                                    variant="standard"
                                />
                                <TextField
                                    sx={{ width: '100%', marginTop: "15px" }}
                                    id="standard-basic"
                                    label="ReType Your Password"
                                    type="password"
                                    name="password2"
                                    onBlur={handleOnBlur}
                                    variant="standard"
                                />

                                <Button sx={{ width: '100%', marginTop: "15px" }} type="submit" variant="contained">
                                    Register
                                </Button>
                                <NavLink className="m-auto" style={{ textDecoration: 'none' }} to="/login">
                                    <Button variant="text">Already Registered? Please Login</Button>
                                </NavLink>
                            </form>
                        )}
                    </div>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;
