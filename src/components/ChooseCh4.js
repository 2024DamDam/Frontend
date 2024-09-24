import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/ChooseCh.css';
import profileImage from '../photo/황정민.png'; // 황정민 프로필 사진

//gka
const sendCharacterChoice = () => {
  const voiceId = "xFOh2Yi1fJndlCAOVXsE";  
  const profileImageUrl = profileImage;  // 프로필 사진 URL

  // voice_id와 profileImageUrl를 localStorage에 저장
  localStorage.setItem('voice_id', voiceId);
  localStorage.setItem('profile_image', profileImageUrl);
};

const ChooseCh4 = () => {
  const navigate = useNavigate();

  const handleCharacterClick = () => {
    // voice_id와 프로필 사진을 저장한 후 chat 페이지로 이동
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
            <span>#카리스마</span>
            <span>#다양한배역</span>
          </div>
          <div className="greeting">
            <p>안녕하세요, 배우 황정민입니다.</p>
            <p>저와 함께 영화 이야기를 나눠보실래요?</p>
          </div>
          <button className="start-button" onClick={handleCharacterClick}>START</button>
        </div>
      </main>
    </div>
  );
}

export default ChooseCh4;
