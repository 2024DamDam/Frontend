import React from 'react';
import { Link } from 'react-router-dom'; // Link 컴포넌트 추가
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        DAMDAM
      </Link>
      <div className="menu">
        <span className="menu-item">Home</span>
        <span className="menu-item">About</span>
        <span className="menu-item">FAQs</span>
        <span className="menu-item disabled">로그인</span>
        <span className="menu-item disabled">회원가입</span>
      </div>
    </div>
  );
};

export default Navbar;
