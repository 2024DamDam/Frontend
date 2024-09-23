import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/ChooseCh.css';
import profileImage from '../photo/루피.jpg'; // 루피 프로필 사진

const ChooseCh6 = () => {
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
            <span>#비버</span>
            <span>#상냥한 요리사</span>
            <span>#루피</span>
          </div>
          <div className="greeting">
            <p>안녕 친구야? 난 뽀로로 친구 루피야!</p>
          </div>
          <button className="start-button" onClick={handleStartClick}>START</button>
        </div>
      </main>
    </div>
  );
}

export default ChooseCh6;
