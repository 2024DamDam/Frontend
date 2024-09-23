import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/ChooseCh.css';
import profileImage from '../photo/박보검.png'; // 박보검 프로필 사진

const sendCharacterChoice = () => {
  const voiceId = "6G2q0bCZZiM3WmPMHNXM";  

  // voice_id를 localStorage에 저장
  localStorage.setItem('voice_id', voiceId);
};

const ChooseCh5 = () => {
  const navigate = useNavigate();

  const handleCharacterClick = () => {
    // voice_id를 저장한 후 chat 페이지로 이동
    sendCharacterChoice();
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
          <button className="start-button" onClick={handleCharacterClick}>START</button>
        </div>
      </main>
    </div>
  );
}

export default ChooseCh5;