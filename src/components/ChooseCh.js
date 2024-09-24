import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/ChooseCh.css';
import profileImage from '../photo/이청아.png';

// 이청아의 voice_id를 저장하는 함수
const sendCharacterChoice = () => {
  const voiceId = "joLgZXc94fcRJftAz3yT";  // 이청아의 voice_id
  const profileImageUrl = profileImage;  // 프로필 사진 URL

  // voice_id와 profileImageUrl를 localStorage에 저장
  localStorage.setItem('voice_id', voiceId);
  localStorage.setItem('profile_image', profileImageUrl);
};

const ChooseCh = () => {
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
          <div className="profile-pic" onClick={handleCharacterClick}>
            <img src={profileImage} alt="Profile" />
          </div>
          <div className="tags">
            <span>#배우</span>
            <span>#편안한</span>
            <span>#맛집탐방</span>
          </div>
          <div className="greeting">
            <p>안녕하세요~</p>
            <p>가수 이청아입니다! 만나서 반가워요!!</p>
            <p>제가 맛집 좀 아는데 알려드릴게요!!</p>
          </div>
          <button className="start-button" onClick={handleCharacterClick}>START</button>
        </div>
      </main>
    </div>
  );
};

export default ChooseCh;
