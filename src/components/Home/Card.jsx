/* eslint-disable prettier/prettier */
/* eslint-disable no-underscore-dangle */
/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Card = ({ product }) => (
    <div className="col-lg-4 col-sm-6 product-wrapper">
        <div className="vn-works-card">
            <div className="product_image">
                <img style={{ maxWidth: '100%' }} src={product.img} alt="task" />
            </div>
            <div className="product_content">
                <h4 className="head-color">{`${product.name.slice(0, 20)}...`}</h4>
                <p>{`${product.description.slice(0, 60)}...`}</p>
                <h3 className="text-success">Price : ${product.price}</h3>
                <h3 className="text-primary">MadeIn : {product.made_in}</h3>
                <div className="product_button">
                    <Link to="/purchase" className="custom__button">Buy Now</Link>
                </div>
            </div>
        </div>
    </div>
);

export default Card;
