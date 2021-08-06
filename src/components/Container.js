import React, { useState } from 'react';
import '../App.css';
import Navigation from './Navigation';
import Footer from './Footer';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import AboutMe from './pages/About';

export default function Container() {
    const [currentPage, setCurrentPage] = useState('About Me');
  
    const renderPage = () => {
      if (currentPage === 'About Me') {
        return <AboutMe />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      return <Contact />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer />
      </div>
    );
  }