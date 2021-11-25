/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import ProductDetail from './ProductDetail';

const ManageProducts = ({ products, deleteHandler, show, setShow }) => {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(products);
    return (
        <div className="admin-vol-list">
            <h5 className="display-5 py-lg-4 pb-2">Manage Products</h5>
            <div className="admin-content">
                <table>
                    <thead>
                        <tr>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Delete Product </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length > 0 ? (
                            products.map((product) => (
                                <ProductDetail
                                    key={product._id}
                                    product={product}
                                    deleteHandler={deleteHandler}
                                    show={show}
                                    setShow={setShow}
                                />
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6">
                                    <div className="alert alert-warning text-center" role="alert">
                                        Products not found
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;
