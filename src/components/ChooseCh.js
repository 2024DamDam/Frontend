import React from 'react';
import { useNavigate } from 'react-router-dom';  // useNavigate 훅 가져오기
import Navbar from './Navbar';
import '../styles/ChooseCh.css';
import profileImage from '../photo/이청아.png';

const ChooseCh = () => {
  const navigate = useNavigate();  // useNavigate 훅 초기화

  const handleStartClick = () => {
    navigate('/chat');  // 버튼 클릭 시 '/chat' 경로로 이동
  };

  return (
    <div className="make-container">
      <Navbar /> {/* 툴바 컴포넌트 사용 */}
      <div className="search-bar"></div>

      <main className="main-content">
        <div className="profile-container">
          <div className="profile-pic">
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
          <button className="start-button" onClick={handleStartClick}>START</button>  {/* onClick 이벤트 추가 */}
        </div>
      </main>
    </div>
  );
}

export default ChooseCh;
