import React, { createContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Admin from './components/AdminDashboard/Admin';
import Explore from './components/Explore/Explore';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Order from './components/Login/Order';
import EventTasks from './components/Orders/MyOrders';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import AdminDashboard from './components/UserDashboard/Admin';
import AuthProvider from './Context/AuthProvider';

export const UserContext = createContext();

function App() {
    return (
        <div className="App">
            <Router>
                <AuthProvider>
                    <Header />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <Route path="/explore">
                            <Explore />
                        </Route>
                        <PrivateRoute path="/purchase">
                            <Order />
                        </PrivateRoute>
                        <PrivateRoute exact path="/my-order">
                            <EventTasks />
                        </PrivateRoute>
                        <PrivateRoute path="/dashboard">
                            <AdminDashboard />
                        </PrivateRoute>
                        <PrivateRoute path="/admin-dashboard">
                            <Admin />
                        </PrivateRoute>
                    </Switch>
                    <Footer />
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;
