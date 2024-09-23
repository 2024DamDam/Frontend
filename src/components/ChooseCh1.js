import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/ChooseCh.css';
import profileImage from '../photo/사진2.jpg'; // 새로운 프로필 사진

const ChooseCh1 = () => {
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
            <span>#배우</span>
            <span>#활동적</span>
            <span>#여행광</span>
          </div>
          <div className="greeting">
            <p>안녕하세요~</p>
            <p>배우 공효진입니다! 여행 좋아하세요?</p>
            <p>제가 여행 이야기 좀 들려드릴게요!</p>
          </div>
          <button className="start-button" onClick={handleStartClick}>START</button>
        </div>
      </main>
    </div>
  );
}

export default ChooseCh1;

