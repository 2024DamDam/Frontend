import React from 'react';
import { Link } from 'react-router-dom'; // Link 컴포넌트 추가
import '../styles/Navbar.css'; // 기존 CSS 파일 임포트
import logoImage from '../photo/logo.png'; // 로고 이미지 import

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <img src={logoImage} alt="Logo" className="logo-image" /> {/* 로고 이미지 */}
        <span className="logo-text">DAMDAM</span> {/* 로고 옆 텍스트 */}
      </Link>
      <div className="menu">
        <Link to="/about" className="menu-item">About</Link> {/* About 링크 추가 */}
      </div>
    </div>
  );
};

export default Navbar;
