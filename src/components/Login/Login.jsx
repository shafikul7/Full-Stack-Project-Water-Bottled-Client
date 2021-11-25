/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
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
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
// import login from '../../images/logos/login.png';
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const { value } = e.target;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };
    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    };
    return (
        <Container>
            <Grid>
                <Grid item xs={12} md={6} className="m-auto" >
                    <div className="login_wrapper my-5">
                        <Typography variant="body1" gutterBottom>
                            <h1 className="head-color">Login</h1>
                        </Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '100%', marginTop: "15px" }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                onChange={handleOnChange}
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: '100%', marginTop: "15px" }}
                                id="standard-basic"
                                label="Your Password"
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                                variant="standard"
                            />

                            <Button sx={{ width: '100%', marginTop: "15px" }} type="submit" variant="contained">
                                Login
                            </Button>

                            {isLoading && <CircularProgress />}
                            {user?.email && <Alert severity="success">Login successfully!</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert>}
                        </form>
                        <div className="login_footer text-center mt-4">
                            <NavLink style={{ textDecoration: 'none' }} to="/register">
                                <Button variant="text">New User? Please Register</Button>
                            </NavLink>
                            <p>-----------Or-------------</p>
                            <Button onClick={handleGoogleSignIn} variant="contained">
                                Google Sign In
                            </Button>
                        </div>

                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
