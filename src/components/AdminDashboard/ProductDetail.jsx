/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */
/** @format */
import React from 'react';
import trash from '../../images/logos/trash-2.png';
import './Admin.css';

const ProductDetail = ({ product, deleteHandler, show, setShow }) => {
    const deleteorder = (id) => {
        if (window.confirm('Are you sure you want to delete')) {
            deleteHandler(product._id);
        }
    };

    return (
        <>
            <tr style={{ fontWeight: '400' }}>
                <div className="product-detail-image">
                    <img
                        style={{ maxWidth: '100%', minWidth: '100px' }}
                        src={product?.pic}
                        alt="order"
                    />
                </div>
                <td>
                    {product.name.length > 20 ? `${product.name.slice(0, 20)}...` : product.name}
                </td>
                <td>${product.price}</td>
                <td>{`${product.description.slice(0, 30)}...`}</td>

                <td>
                    <button className="btn btn-danger" onClick={deleteorder}>
                        <img src={trash} alt="delete" style={{ width: '21px' }} />
                    </button>
                </td>
            </tr>
        </>
    );
};

export default ProductDetail;
