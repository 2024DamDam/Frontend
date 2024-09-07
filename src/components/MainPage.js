// MainPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/MainPage.css'; 


const MainPage = () => {
  return (
    <div className="main-container">
      <Navbar /> {/* 툴바 컴포넌트 사용 */}

      <div className="button-container">
        <Link to="/choose">
          <button className="choose-button">Choose One</button>
        </Link>
        <Link to="/make">
          <button className="make-button">Make One</button>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
