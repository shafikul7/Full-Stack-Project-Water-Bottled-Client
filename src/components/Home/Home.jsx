/* eslint-disable react/self-closing-comp */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
/** @format */

import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { useHistory } from 'react-router-dom';
import About from '../About/About';
import Review from '../ClientReview/Feedbacks';
import Contact from '../Contact/Contact';
import Card from './Card';
import './Home.css';

const useStyles = makeStyles({
    root: {
        width: 1000,
    },
});

const Home = () => {
    const classes = useStyles();
    const [products, setProducts] = useState([]);
    // const [filter, setFilter] = useState('');

    // Get All Products
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/products`)
            .then((res) => res.json())
            // eslint-disable-next-line no-shadow
            .then((data) => {
                console.log(data.length);
                setProducts(data.slice(0, 6));
            });
    }, []);

    const history = useHistory();
    const images = [
        {
            img: 'https://cdn.pixabay.com/photo/2019/08/12/00/30/yellow-sky-4400101_960_720.jpg ',
            text: 'A million plastic bottles are bought around the world every minute - which breaks down to 20,000 plastic bottles a second - and that number will jump another 20% by 2021. ',
            heading: 'Best Water Bottles',
        },
        {
            img: 'https://cdn.pixabay.com/photo/2021/09/24/02/48/sea-6651168_960_720.jpg',
            text: 'Bottled water is almost 2,000 times more energy intensive to produce than tap water',
            heading: 'Best Water Bottles',
        },
        {
            img: 'https://cdn.pixabay.com/photo/2012/03/01/00/31/water-19659_960_720.jpg',
            text: 'A million plastic bottles are bought around the world every minute - which breaks down to 20,000 plastic bottles a second - and that number will jump another 20% by 2021. ',
            heading: 'Best Water Bottles',
        },
    ];
    return (
        <div className="home">
            <div>
                <Carousel showThumbs={false} showStatus={false}>
                    {images.map((image) => (
                        <div className="silder-rapper">
                            <img src={image.img} className="silder-image img-fluid" />
                            <div className="slider-content">
                                <h2>{image.heading}</h2>
                                <p>{image.text}</p>
                                <button
                                    onClick={() => history.push('/login')}
                                    className="slider-button custom__button"
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className="">
                <About />
            </div>
            <main className="vn-home pt-5 mt-2">
                <div className="container text-center">
                    <div className="vn-works-search">
                        <h2 className="display-5 mb-4 head-color">Our Products</h2>
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
            <div className="">
                <Review />
            </div>
            <div className="">
                <Contact />
            </div>
        </div>
    );
};

export default Home;
