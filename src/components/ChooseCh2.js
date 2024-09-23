import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/ChooseCh.css';
import profileImage from '../photo/박영호.png'; // 또 다른 프로필 사진


const sendCharacterChoice = () => {
  const voiceId = "Qw16So0iRAMat85fRh2F";

  // voice_id를 localStorage에 저장
  localStorage.setItem('voice_id', voiceId);
};

const ChooseCh2 = () => {
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
            <span>#코미디언</span>
            <span>#유머러스한</span>
            <span>#웃음전도사</span>
          </div>
          <div className="greeting">
            <p>안녕하세요~</p>
            <p>교수님 박영호입니다! 웃음 가득한 하루 보내세요!</p>
          </div>
          <button className="start-button" onClick={handleCharacterClick}>START</button>
        </div>
      </main>
    </div>
  );
}

export default ChooseCh2;
