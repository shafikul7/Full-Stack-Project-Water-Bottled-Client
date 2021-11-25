/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */
/** @format */

import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import trash from '../../images/logos/trash-2.png';

const OrderDetail = ({ order, deleteHandler, show, setShow }) => {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deletehandler = (id) => {
        if (window.confirm('Are you sure you want to delete')) {
            deleteHandler(order._id);
        }
    };
    return (
        <>
            <tr style={{ fontWeight: '400' }}>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.phone}</td>
                <td>{order.address}</td>
                <td>{order.status}</td>
                <td>
                    <button className="btn btn-danger" onClick={deletehandler}>
                        <img src={trash} alt="delete" style={{ width: '21px' }} />
                    </button>
                </td>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Attention!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you want to delete this?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="warning" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="danger" onClick={() => deleteHandler(order._id)}>
                            Confirm
                        </Button>
                    </Modal.Footer>
                </Modal>
            </tr>
        </>
    );
};

export default OrderDetail;
