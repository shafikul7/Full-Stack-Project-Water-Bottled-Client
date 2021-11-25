/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logout, admin } = useAuth();
    return (
        // bg="dark" variant="dark"
        <Navbar collapseOnSelect expand="lg" className="navbg">
            <Container>
                <Navbar.Brand>
                    <Link className="navbar-brand text-light" to="/">
                        Water Bottles
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link>
                            <Link to="/">Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/explore">Explore</Link>
                        </Nav.Link>
                        {user.isLoggedIn && (
                            <Nav.Link>
                                <Link to="/my-orders">My Orders</Link>
                            </Nav.Link>
                        )}
                        {user?.email ? (
                            <>
                                {!admin && (
                                    <Nav.Link>
                                        <Link to="/dashboard">
                                            <button className="btn btn-dark">User Dashboard</button>
                                        </Link>
                                    </Nav.Link>
                                )}
                                {admin && (
                                    <Nav.Link>
                                        <Link to="/admin-dashboard">
                                            <button className="btn btn-dark">
                                                Admin Dashboard
                                            </button>
                                        </Link>
                                    </Nav.Link>
                                )}
                            </>
                        ) : (
                            <>
                                <Nav.Link>
                                    <Link to="/login">Login</Link>
                                </Nav.Link>
                            </>
                        )}
                        {user?.email && (
                            <>
                                <Nav.Link onClick={logout}>
                                    <Link to="/">Logout</Link>
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
