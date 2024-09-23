import React from 'react';
import { Link } from 'react-router-dom'; // Link 컴포넌트 추가
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        DAMDAM
      </Link>
    </div>
  );
};

export default Navbar;
