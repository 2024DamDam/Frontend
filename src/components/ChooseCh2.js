import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/ChooseCh.css';
import profileImage from '../photo/사진3.jpg'; // 또 다른 프로필 사진

const ChooseCh2 = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/chat');
  };

  return (
    <div className="make-container">
      <Navbar />
      <div className="search-bar"></div>

      <main className="main-content">
        <div className="profile-container">
          <div className="profile-pic">
            <img src={profileImage} alt="Profile" />
          </div>
          <div className="tags">
            <span>#코미디언</span>
            <span>#유머러스한</span>
            <span>#웃음전도사</span>
          </div>
          <div className="greeting">
            <p>안녕하세요~</p>
            <p>교수님 박영호입니다! 웃음 가득한 하루 보내세요!</p>
          </div>
          <button className="start-button" onClick={handleStartClick}>START</button>
        </div>
      </main>
    </div>
  );
}

export default ChooseCh2;
