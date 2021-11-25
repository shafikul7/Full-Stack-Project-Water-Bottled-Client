/* eslint-disable react/self-closing-comp */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
/** @format */

import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Card from '../Home/Card';
import '../Home/Home.css';

const useStyles = makeStyles({
    root: {
        width: 1000,
    },
});

const Explore = () => {
    const classes = useStyles();
    const [products, setProducts] = useState([]);
    // const [filter, setFilter] = useState('');

    // Get All Services
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/products`)
            .then((res) => res.json())
            // eslint-disable-next-line no-shadow
            .then((data) => {
                console.log(data.length);
                setProducts(data);
            });
    }, []);

    return (
        <div className="home">
            <main className="vn-home pt-5 mt-2">
                <div className="container text-center">
                    <div className="vn-works-search">
                        <h2 className="display-5 mb-4 head-color">Explore</h2>
                    </div>
                    <div className="vn-works py-5 mt-2">
                        {products.length ? (
                            <div className="row">
                                {products.map((product) => (
                                    <Card product={product} key={Math.random()} />
                                ))}
                            </div>
                        ) : (
                            <div className={classes.root}>
                                <div className="row">
                                    <div className="col-lg-3 col-sm-6 ">
                                        <Skeleton variant="rect" height={250} animation="wave" />
                                        <Skeleton variant="text" height={30} animation="wave" />
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <Skeleton variant="rect" height={250} animation="wave" />
                                        <Skeleton variant="text" height={30} animation="wave" />
                                    </div>
                                    <div className="col-lg-3 col-sm-6 ">
                                        <Skeleton variant="rect" height={250} animation="wave" />
                                        <Skeleton variant="text" height={30} animation="wave" />
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <Skeleton variant="rect" height={250} animation="wave" />
                                        <Skeleton variant="text" height={30} animation="wave" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Explore;
