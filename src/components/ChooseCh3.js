import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/ChooseCh.css';
import profileImage from '../photo/임유진.png'; // 다른 프로필 사진

const sendCharacterChoice = () => {
  const voiceId = "d4jieP6FUjGrK40LvHbm";

  // voice_id를 localStorage에 저장
  localStorage.setItem('voice_id', voiceId);
};

const ChooseCh3 = () => {
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
            <span>#캐릭터</span>
            <span>#열정적인</span>
            <span>#스포츠마니아</span>
          </div>
          <div className="greeting">
            <p>안녕하세요~</p>
            <p>교수 임유진입니다! 운동 좋아하세요?</p>
            <p>함께 운동 이야기 나눠봐요!</p>
          </div>
          <button className="start-button" onClick={handleCharacterClick}>START</button>
        </div>
      </main>
    </div>
  );
}

export default ChooseCh3;
