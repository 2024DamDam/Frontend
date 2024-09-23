import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/ChoosePage.css';
import profileImage from '../photo/사진1.jpg';

const ChoosePage = () => {
  return (
    <div className="make-container">
      <Navbar /> {/* 툴바 컴포넌트 사용 */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button type="submit">🔍</button>
      </div>

      <div className="character-grid">
        {/* 첫 번째 캐릭터 - 클릭 시 ChooseCh로 이동 */}
        <Link to="/chooseCh" className="character-box">
          <img src={profileImage} alt="캐릭터 1" />
          <p>이청아 </p>
        </Link>
        
        {/* 두 번째 캐릭터 - 클릭 시 ChooseCh1로 이동 */}
        <Link to="/chooseCh1" className="character-box">
          <img src={profileImage} alt="캐릭터 2" />
          <p>공효진</p>
        </Link>

        {/* 세 번째 캐릭터 - 클릭 시 ChooseCh2로 이동 */}
        <Link to="/chooseCh2" className="character-box">
          <img src={profileImage} alt="캐릭터 3" />
          <p>아바타3</p>
        </Link>

        {/* 네 번째 캐릭터 - 클릭 시 ChooseCh3로 이동 */}
        <Link to="/chooseCh3" className="character-box">
          <img src={profileImage} alt="캐릭터 4" />
          <p>임유진</p>
        </Link>

        {/* 다섯 번째 캐릭터 - 클릭 시 ChooseCh4로 이동 */}
        <Link to="/chooseCh4" className="character-box">
          <img src={profileImage} alt="캐릭터 5" />
          <p>박영호</p>
        </Link>

        {/* 여섯 번째 캐릭터 - 클릭 시 ChooseCh5로 이동 */}
        <Link to="/chooseCh5" className="character-box">
          <img src={profileImage} alt="캐릭터 6" />
          <p>박보검</p>
        </Link>

        {/* 일곱 번째 캐릭터 - 클릭 시 ChooseCh5로 이동 */}
        <Link to="/chooseCh5" className="character-box">
          <img src={profileImage} alt="캐릭터 6" />
          <p>루피</p>
        </Link>

        <div className="empty-box"></div>
      </div>
    </div>
  );
};

export default ChoosePage;
