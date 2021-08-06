import React from 'react';
import resume from '../assets/Gurung_resume.pdf';

function NavBar({ currentPage, handlePageChange }) {
    return (<header>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <h1 className="navbar-brand">Sean Gurung</h1>
                <div className="collapse navbar-collapse  d-flex flex-sm-row flex-lg-row-reverse" id="navbarNav">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a href="#about" onClick={() => handlePageChange('About Me')} className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}>
                                About Me
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
                                Portfolio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                                Contact
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href={resume} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>)
};


export default NavBar;