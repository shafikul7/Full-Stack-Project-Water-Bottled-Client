/* eslint-disable react/button-has-type */
import React from 'react';
import './About.css';

const About = () => (
    <div className="about-part">
        <h1 className="head-color text-center my-5">About Us</h1>
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <div className="">
                        <img
                            className="img-fluid"
                            src="https://cdn.pixabay.com/photo/2014/12/24/05/02/drop-of-water-578897_960_720.jpg"
                            alt=""
                        />
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="about_content">
                        <h3 className="about-p text-secondary">Water Bottles </h3>
                        <p className="about-d">
                            The capacity of this large kettle is 32oz, and there are segmented
                            capacity marks on the bottle, allowing you to clearly see how much water
                            you have drunk. It is very suitable for outdoor or gym. There are
                            inspirational quotes and time marks on this water bottle, reminding you
                            to drink water in daily life, and encouraging you when you exercise.
                        </p>
                        <button className="custom__button">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default About;
