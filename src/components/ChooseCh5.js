import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/ChooseCh.css';
import profileImage from '../photo/박보검.png'; // 박보검 프로필 사진

const ChooseCh5 = () => {
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
            <span>#훈훈한미소</span>
            <span>#다정다감</span>
          </div>
          <div className="greeting">
            <p>안녕하세요, 박보검입니다.</p>
            <p>오늘도 즐거운 하루 보내세요!</p>
          </div>
          <button className="start-button" onClick={handleStartClick}>START</button>
        </div>
      </main>
    </div>
  );
}

export default ChooseCh5;
