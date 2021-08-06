import React from 'react';
import ProfilePic from '../../assets/profile_pic.jpg';

export default function About() {
    return (
        <div>
            <h1>About Me</h1>
            <div className="about-me-container mb-5">
                <div className="row">
                    <div className="span4">
                        <img className="pull-left" id="profile_pic" src={ProfilePic} />
                        <p>
                            Hello! My name is Sean and I am an aspiring web developer. I have a bachelor's degree in Finance from Towson
                            University and I have been working in the financial services inducstry for the past three years. I have a learned
                            a lot in my journey so far but I am looking to change my career to software developer. I have experience with CSS,
                            HTML, JavaScript, MySQL, Node.js.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

