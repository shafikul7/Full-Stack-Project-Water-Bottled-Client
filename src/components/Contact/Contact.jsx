/* eslint-disable react/button-has-type */
import React from 'react';
import './Contact.css';

const Contact = () => (
    <div className="contact">
        <div className="container">
            <div className="title ">
                <h1 className="head-color">Contact us form</h1>
            </div>
            <div className="contact-form">
                <div className="input-fields">
                    <input type="text" className="input form-control" placeholder="Name" />
                    <input type="text" className="input form-control" placeholder="Email Address" />
                    <input type="text" className="input form-control" placeholder="Phone" />
                    <input type="text" className="input form-control" placeholder="Subject" />
                </div>
                <div className="msg">
                    <textarea placeholder="Message" className="form-control" />
                    <button className="custom__button">send</button>
                </div>
            </div>
        </div>
    </div>
);

export default Contact;
